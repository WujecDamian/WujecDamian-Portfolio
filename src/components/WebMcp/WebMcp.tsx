import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProjectCopy } from '../../data/projectCopy'
import { projects, site } from '../../data/site'
import { useLanguage } from '../../i18n'

type ToolDefinition = {
  name: string
  description: string
  inputSchema: object
  annotations?: { readOnlyHint?: boolean }
  execute: (input: Record<string, string>) => Promise<string>
}

type ModelContext = {
  registerTool: (
    tool: ToolDefinition,
    options: { signal: AbortSignal },
  ) => Promise<unknown>
}

const sectionIds = ['about', 'skills', 'projects', 'education', 'experience', 'contact']
const projectIds = projects.map((project) => project.id)

// Exposes the portfolio to in-browser agents through WebMCP, so they can read
// structured data and navigate without scraping the rendered page.
export const WebMcp = () => {
  const navigate = useNavigate()
  const { locale, setLocale, t } = useLanguage()
  const state = useRef({ navigate, locale, setLocale, t })

  useEffect(() => {
    state.current = { navigate, locale, setLocale, t }
  })

  useEffect(() => {
    const modelContext = (document as Document & { modelContext?: ModelContext })
      .modelContext
    if (!modelContext) return

    const json = (value: unknown) => JSON.stringify(value, null, 2)
    const projectSummary = (id: (typeof projectIds)[number]) => {
      const project = projects.find((item) => item.id === id)!
      const copy = getProjectCopy(id, state.current.t)
      return {
        id,
        title: copy.title,
        description: copy.blurb,
        url: `${location.origin}/project/${id}`,
        liveUrl: project.live,
        sourceUrl: 'github' in project ? project.github : undefined,
        stack: project.stack,
      }
    }

    const tools: ToolDefinition[] = [
      {
        name: 'get_profile',
        description:
          'Get who Damian Wujec is: name, role, pitch, location and contact details.',
        inputSchema: { type: 'object', properties: {} },
        annotations: { readOnlyHint: true },
        execute: async () => {
          const { t } = state.current
          return json({
            name: site.name,
            title: t.hero.title,
            pitch: t.hero.pitch,
            location: site.location,
            email: site.email,
            phone: site.phone,
            github: site.github,
            linkedin: site.linkedin,
            cvUrl: `${location.origin}${site.cvPath}`,
          })
        },
      },
      {
        name: 'list_projects',
        description: 'List all portfolio projects with description, stack and links.',
        inputSchema: { type: 'object', properties: {} },
        annotations: { readOnlyHint: true },
        execute: async () => json(projectIds.map(projectSummary)),
      },
      {
        name: 'get_project',
        description:
          'Get the case study of one project: problem, what was built and the result.',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string', enum: projectIds, description: 'Project id' },
          },
          required: ['id'],
        },
        annotations: { readOnlyHint: true },
        execute: async ({ id }) => {
          if (!projectIds.includes(id as (typeof projectIds)[number])) {
            throw new Error(`Unknown project "${id}". Use one of: ${projectIds.join(', ')}`)
          }
          const copy = getProjectCopy(id as (typeof projectIds)[number], state.current.t)
          return json({
            ...projectSummary(id as (typeof projectIds)[number]),
            problem: copy.problem,
            built: copy.built,
            result: copy.result,
          })
        },
      },
      {
        name: 'open_project',
        description: 'Navigate the browser to a project case-study page.',
        inputSchema: {
          type: 'object',
          properties: { id: { type: 'string', enum: projectIds } },
          required: ['id'],
        },
        execute: async ({ id }) => {
          if (!projectIds.includes(id as (typeof projectIds)[number])) {
            throw new Error(`Unknown project "${id}". Use one of: ${projectIds.join(', ')}`)
          }
          await state.current.navigate(`/project/${id}`)
          return `Opened /project/${id}`
        },
      },
      {
        name: 'go_to_section',
        description: 'Scroll the home page to a section.',
        inputSchema: {
          type: 'object',
          properties: { section: { type: 'string', enum: sectionIds } },
          required: ['section'],
        },
        execute: async ({ section }) => {
          if (!sectionIds.includes(section)) {
            throw new Error(`Unknown section "${section}". Use one of: ${sectionIds.join(', ')}`)
          }
          await state.current.navigate(`/#${section}`)
          return `Scrolled to #${section}`
        },
      },
      {
        name: 'set_language',
        description: 'Switch the site language between English (en) and Polish (pl).',
        inputSchema: {
          type: 'object',
          properties: { locale: { type: 'string', enum: ['en', 'pl'] } },
          required: ['locale'],
        },
        execute: async ({ locale: next }) => {
          if (next !== 'en' && next !== 'pl') {
            throw new Error('locale must be "en" or "pl"')
          }
          state.current.setLocale(next)
          return `Language set to ${next}`
        },
      },
    ]

    const controller = new AbortController()
    for (const tool of tools) {
      Promise.resolve(
        modelContext.registerTool(tool, { signal: controller.signal }),
      ).catch(() => {})
    }
    return () => controller.abort()
  }, [])

  return null
}
