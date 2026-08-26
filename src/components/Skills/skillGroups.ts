export const skillGroups = [
  {
    labelKey: 'languages',
    items: ['html', 'css', 'javascript', 'typescript', 'sql'],
  },
  {
    labelKey: 'frameworks',
    items: [
      'react',
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
    items: ['postgresql', 'redis'],
  },
  {
    labelKey: 'concepts',
    items: ['rest', 'authentication', 'authorization', 'backend'],
  },
  {
    labelKey: 'tools',
    items: ['git', 'eslint', 'vitest', 'testinglibrary', 'cursor'],
  },
] as const

export type SkillId = (typeof skillGroups)[number]['items'][number]
export type SkillGroupLabelKey = (typeof skillGroups)[number]['labelKey']
