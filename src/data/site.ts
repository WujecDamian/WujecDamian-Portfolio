export const site = {
  name: 'Damian Wujec',
  email: 'wujecdamian12@gmail.com',
  phone: '+48 695 227 457',
  github: 'https://github.com/WujecDamian',
  linkedin: 'https://www.linkedin.com/in/damian-wujec-5b8a233ab/',
  cvPath: '/Damian-Wujec-CV.pdf',
  portraitPath: '/portrait.jpg',
  portraitWebpPath: '/portrait.webp',
  location: 'Biłgoraj, Poland',
}

export const gitx = {
  id: 'gitx',
  github: 'https://github.com/WujecDamian/gitX',
  live: 'https://gitx.wujecdamian.dev/',
  coverBg: '#ebe9ea',
  youtube: '4OHvtWrH0yw',
  stack: ['postgresql', 'express', 'react', 'nodejs'] as const,
}

export const firefocus = {
  id: 'firefocus',
  live: 'https://firefocusai.com/',
  coverBg: '#f5f5f7',
  youtube: 'xRIn7KvsmrA',
  stack: [
    'gemini',
    'embeddings',
    'llmevals',
    'bigquery',
    'googlecloud',
    'react',
    'typescript',
    'nodejs',
    'express',
    'postgresql',
    'cursor',
  ] as const,
}

export const waldo = {
  id: 'waldo',
  github: 'https://github.com/WujecDamian/odin-Wheres-Waldo',
  live: 'https://wujec-wheres-waldo.netlify.app/',
  coverBg: '#f5f4f9',
  stack: ['react', 'express', 'postgresql', 'prisma'] as const,
}

export const wiadomosci = {
  id: 'wiadomosci',
  github: 'https://github.com/WujecDamian/CRUD_wiadomosci',
  live: 'https://wiadomosci.wujecdamian.dev',
  coverBg: '#ebe9ea',
  youtube: 'whnywAikeC0',
  stack: ['react', 'redux', 'rtkquery', 'tailwind', 'shadcn', 'vitest'] as const,
}

export const projects = [gitx, firefocus, wiadomosci, waldo] as const

export type Project = (typeof projects)[number]
