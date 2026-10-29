export const skillGroups = [
  {
    labelKey: 'languages',
    items: ['html', 'css', 'javascript', 'typescript', 'sql'],
  },
  {
    labelKey: 'frameworks',
    items: [
      'react',
      'redux',
      'rtkquery',
      'tailwind',
      'shadcn',
      'nodejs',
      'express',
      'prisma',
      'vite',
      'passport',
      'socketio',
    ],
  },
  {
    labelKey: 'data',
    items: ['postgresql', 'redis', 'bigquery'],
  },
  {
    labelKey: 'ai',
    items: ['gemini', 'embeddings', 'llmevals'],
  },
  {
    labelKey: 'concepts',
    items: ['rest', 'authentication', 'authorization', 'backend', 'statemanagement'],
  },
  {
    labelKey: 'tools',
    items: ['git', 'eslint', 'vitest', 'testinglibrary', 'cursor', 'claudecode', 'docker', 'googlecloud'],
  },
  {
    labelKey: 'spoken',
    items: ['polish', 'english'],
  },
] as const

export type SkillId = (typeof skillGroups)[number]['items'][number]
export type SkillGroupLabelKey = (typeof skillGroups)[number]['labelKey']
