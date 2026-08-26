export const en = {
  meta: {
    title: "Damian Wujec — Junior Full Stack Developer",
  },
  nav: {
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    experience: "Experience",
    langEn: "EN",
    langPl: "PL",
    langAria: "Language",
  },
  hero: {
    name: "Damian Wujec",
    title:
      "Junior Full Stack Developer | PostgreSQL · Express · React · Node.js",
    pitch:
      "Building full applications from start to finish with the PERN stack. Passionate about constant growth and never-ending learning. Aiming to become really good at coding! Looking for my first junior full-stack role.",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadCv: "Download CV",
    portraitAlt: "Portrait of Damian Wujec",
  },
  about: {
    heading: "About",
    p1: "Hi, I’m Damian! I’ve been fascinated by building web applications for quite some time. I see programming as a path with no finish line - one that constantly demands learning new things and adapting to a rapidly changing environment. This suits me perfectly because even though my knowledge is limited now, it allows me to stand out in the long run, which I find highly motivating.",
    p2: "I love creating solutions that solve real problems. I’m looking for a role where I can grow with a team, learn from others, and bring mutual value.",
    p3: "Programming is my long-term vision. I want to keep mastering the fundamentals and continuously grow my skills so I can leverage them with AI, while exploring everything new coming to this fast-moving field.",
  },
  skills: {
    heading: "Skills",
    languages: "Languages",
    frameworks: "Frameworks / libraries",
    data: "Databases",
    concepts: "Concepts",
    tools: "DevOps / tools",
    items: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      typescript: "TypeScript",
      sql: "SQL",
      react: "React",
      nodejs: "Node.js",
      express: "Express",
      prisma: "Prisma",
      vite: "Vite",
      passport: "Passport.js",
      socketio: "Socket.IO",
      postgresql: "PostgreSQL",
      redis: "Redis",
      rest: "REST API",
      authentication: "authentication",
      authorization: "authorization",
      backend: "backend development",
      git: "Git",
      eslint: "ESLint",
      vitest: "Vitest",
      testinglibrary: "React Testing Library",
      cursor: "Cursor AI",
    },
  },
  project: {
    heading: "Projects",
    gitxTitle: "GitX",
    gitxBlurb:
      "A full-stack social platform for developers, inspired by X (Twitter).",
    details: "Details",
    live: "Live preview",
    github: "GitHub",
    stackLabel: "Stack",
    stackMore: "+5 more...",
  },
  education: {
    heading: "Education",
    items: [
      {
        school: "The Odin Project",
        title:
          "Completed The Odin Project - Full Stack JavaScript path, a self-taught course emphasizing reading documentation and building projects from scratch",

        dates: "February–August 2026",
      },
      {
        school: "Regionalne Centrum Edukacji Zawodowej w Biłgoraju",
        title:
          "Vocational Diploma — Programmer Technician (Qualification 351406, INF.03 and INF.04)",
        dates: "2019–2024",
      },
    ],
  },
  experience: {
    heading: "Experience",
    jobs: [
      {
        role: "Automotive Detailer",
        company: "APZ GmbH, Rheine, Germany",
        dates: "2025",
        bullets: [
          "Delivered high-volume automotive detailing (~4 vehicles/day), including refurbishment of lease-return vehicles",
          "Performed paint correction, surface protection, and full interior/exterior restoration for dealership-ready standards",
          "Worked on-site at BMW/MINI dealership (Procar Automobile, Münster) as an outsourced technician.",
        ],
      },
      {
        role: "Automotive Detailer",
        company:
          "Karlskrona Bilcenter AB (Authorized Mazda/Suzuki & Used Car Dealership), Karlskrona, Sweden",
        dates: "2025",
        bullets: [
          "Performed full-cycle vehicle detailing including paint correction, polishing, protective coatings, and interior restoration",
          "Prepared vehicles for resale by improving presentation quality to dealership standards",
          "Communicated in English within an international work environment while maintaining high productivity (12h shifts, 6 days/week)",
        ],
      },
      {
        role: "Warehouse Associate",
        company: "Ambra S.A., Wola Duża, Poland",
        dates: "2024",
        bullets: [
          "Assembled and prepared promotional display units in a high-paced warehouse environment under a performance-based (quota/akord) system",
          "Worked in team-based production workflows, ensuring timely delivery of daily output targets",
          "Maintained accuracy, consistency, and reliability while operating under time constraints",
        ],
      },
    ],
  },
  contact: {
    heading: "Contact",
    invite:
      "If you are hiring a junior full-stack developer, I would like to hear from you.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "Download CV",
  },
  footer: {
    rights: "Damian Wujec",
  },
  caseStudy: {
    back: "Back to home",
    notFound: "Project not found.",
    problem: "Problem",
    built: "What I built",
    screenshots: "Screenshots",
    result: "Result",
    links: "Links",
    gitxProblem:
      "Developers already live on GitHub, but typical social apps still ask for a separate account and ignore that identity. GitX is a Twitter-style feed for developers that treats GitHub as the way in.",
    gitxBuilt:
      "I designed and implemented a REST API with GitHub OAuth 2.0 (Passport.js), session storage in Redis, and a relational schema in PostgreSQL (Prisma). Core features include posts, likes, comments, bookmarks, follows, groups, and profiles — plus the React UI that uses them.",
    gitxResult:
      "A working full-stack app is live: auth, social graph, and sessions hang together end to end. It is the project I use to show how I think about APIs, data, and UI together.",
    shotFeed: "Feed and social features — see the live app for the current UI.",
    shotAuth: "GitHub OAuth sign-in and session-backed requests.",
    shotData: "PostgreSQL schema plus Redis as the session store.",
  },
};

export type Translation = typeof en;
