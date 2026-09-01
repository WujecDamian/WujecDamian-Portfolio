export const site = {
  name: 'Damian Wujec',
  email: 'wujecdamian12@gmail.com',
  github: 'https://github.com/WujecDamian',
  linkedin: 'https://www.linkedin.com/in/damian-wujec-5b8a233ab/',
  cvPath: '/Resume-Damian-Wujec.pdf',
  portraitPath: '/portrait.jpg',
  location: 'Biłgoraj, Poland',
}

export const gitx = {
  id: 'gitx',
  github: 'https://github.com/WujecDamian/gitX',
  live: 'https://gitx-wujec.netlify.app/',
  stack: ['postgresql', 'express', 'react', 'nodejs'] as const,
}

export const waldo = {
  id: 'waldo',
  github: 'https://github.com/WujecDamian/odin-Wheres-Waldo',
  live: 'https://wujec-wheres-waldo.netlify.app/',
  stack: ['react', 'express', 'postgresql', 'prisma'] as const,
}

export const projects = [gitx, waldo] as const

export type Project = (typeof projects)[number]
