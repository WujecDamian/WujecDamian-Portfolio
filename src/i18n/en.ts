export const en = {
  meta: {
    title: 'Damian Wujec — Junior Full Stack Developer',
  },
  nav: {
    skills: 'Skills',
    education: 'Education',
    experience: 'Experience',
    langEn: 'EN',
    langPl: 'PL',
    langAria: 'Language',
  },
  hero: {
    name: 'Damian Wujec',
    title: 'Junior Full Stack Developer (Node.js / React)',
    pitch:
      'I build web apps with React and Node.js — APIs, auth, and PostgreSQL — and I am looking for my first junior full-stack role.',
    viewProject: 'View GitX',
    downloadCv: 'Download CV',
    portraitAlt: 'Portrait placeholder for Damian Wujec',
  },
  about: {
    heading: 'About',
    p1: 'I am a junior full-stack developer from Biłgoraj, Poland. I like work that spans the UI, the API, and the database — not only one of those layers.',
    p2: 'GitX is my main proof of work: a social app with GitHub sign-in, a REST API, PostgreSQL, and Redis sessions.',
    p3: 'I trained as a Programmer Technician (INF.03 and INF.04). I am looking for a junior full-stack role where I can keep shipping real features.',
  },
  skills: {
    heading: 'Skills',
    languages: 'Languages',
    frameworks: 'Frameworks / libraries',
    data: 'Databases',
    concepts: 'Concepts',
    tools: 'DevOps / tools',
    languageItems: 'HTML, CSS, JavaScript, TypeScript, SQL',
    frameworkItems:
      'React, Node.js, Express, Prisma, Vite, Passport.js, Socket.IO',
    dataItems: 'PostgreSQL, Redis',
    conceptItems: 'REST API, authentication, authorization, backend development',
    toolItems: 'Git, ESLint, Vitest, React Testing Library, Cursor AI',
  },
  project: {
    heading: 'Project',
    gitxTitle: 'GitX',
    gitxBlurb:
      'A full-stack social platform for developers, inspired by X (Twitter).',
    caseStudy: 'Case study',
    live: 'Live preview',
    github: 'GitHub',
    stackLabel: 'Stack',
  },
  education: {
    heading: 'Education',
    school: 'Regionalne Centrum Edukacji Zawodowej w Biłgoraju',
    title:
      'Vocational Diploma — Programmer Technician (Qualification 351406, INF.03 and INF.04)',
    dates: '2019–2024',
  },
  experience: {
    heading: 'Experience',
    jobs: [
      {
        role: 'Automotive Detailer',
        company: 'APZ GmbH, Rheine, Germany',
        dates: '2025',
        bullets: [
          'High-volume detailing, including lease-return cars, on-site at a BMW/MINI dealership.',
          'Worked as an outsourced technician in an international setting.',
        ],
      },
      {
        role: 'Automotive Detailer',
        company:
          'Karlskrona Bilcenter AB (Mazda/Suzuki & used cars), Karlskrona, Sweden',
        dates: '2025',
        bullets: [
          'Full-cycle detailing to dealership resale standard.',
          'Worked in English on a fast, international team.',
        ],
      },
      {
        role: 'Warehouse Associate',
        company: 'Ambra S.A., Wola Duża, Poland',
        dates: '2024',
        bullets: [
          'Built promotional displays under a quota system.',
          'Hit daily output targets with accuracy and pace.',
        ],
      },
    ],
  },
  contact: {
    heading: 'Contact',
    invite:
      'If you are hiring a junior full-stack developer, I would like to hear from you.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    downloadCv: 'Download CV',
  },
  footer: {
    rights: 'Damian Wujec',
  },
  caseStudy: {
    back: 'Back to home',
    notFound: 'Project not found.',
    problem: 'Problem',
    built: 'What I built',
    screenshots: 'Screenshots',
    result: 'Result',
    links: 'Links',
    gitxProblem:
      'Developers already live on GitHub, but typical social apps still ask for a separate account and ignore that identity. GitX is a Twitter-style feed for developers that treats GitHub as the way in.',
    gitxBuilt:
      'I designed and implemented a REST API with GitHub OAuth 2.0 (Passport.js), session storage in Redis, and a relational schema in PostgreSQL (Prisma). Core features include posts, likes, comments, bookmarks, follows, groups, and profiles — plus the React UI that uses them.',
    gitxResult:
      'A working full-stack app is live: auth, social graph, and sessions hang together end to end. It is the project I use to show how I think about APIs, data, and UI together.',
    shotFeed: 'Feed and social features — see the live app for the current UI.',
    shotAuth: 'GitHub OAuth sign-in and session-backed requests.',
    shotData: 'PostgreSQL schema plus Redis as the session store.',
  },
}

export type Translation = typeof en
