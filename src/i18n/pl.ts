import type { Translation } from './en'

export const pl: Translation = {
  meta: {
    title: 'Damian Wujec — Junior Full Stack Developer',
  },
  nav: {
    skills: 'Umiejętności',
    projects: 'Projekty',
    education: 'Wykształcenie',
    experience: 'Doświadczenie',
    langEn: 'EN',
    langPl: 'PL',
    langAria: 'Język',
  },
  hero: {
    name: 'Damian Wujec',
    title: 'Junior Full Stack Developer (Node.js / React)',
    pitch:
      'Buduję aplikacje webowe w React i Node.js — API, uwierzytelnianie i PostgreSQL — i szukam pierwszej roli junior full-stack.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    downloadCv: 'Pobierz CV',
    portraitAlt: 'Zdjęcie Damiana Wujca',
  },
  about: {
    heading: 'O mnie',
    p1: 'Jestem junior full-stack developerem z Biłgoraja. Lubię pracę, która obejmuje interfejs, API i bazę danych — nie tylko jedną z tych warstw.',
    p2: 'GitX to mój główny projekt: aplikacja społecznościowa z logowaniem przez GitHub, REST API, PostgreSQL i sesjami w Redis.',
    p3: 'Ukończyłem technikum programistyczne (INF.03 i INF.04). Szukam roli junior full-stack, w której będę dalej dowoził konkretne funkcje.',
  },
  skills: {
    heading: 'Umiejętności',
    languages: 'Języki',
    frameworks: 'Frameworki / biblioteki',
    data: 'Bazy danych',
    concepts: 'Pojęcia',
    tools: 'DevOps / narzędzia',
    items: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      sql: 'SQL',
      react: 'React',
      nodejs: 'Node.js',
      express: 'Express',
      prisma: 'Prisma',
      vite: 'Vite',
      passport: 'Passport.js',
      socketio: 'Socket.IO',
      postgresql: 'PostgreSQL',
      redis: 'Redis',
      rest: 'REST API',
      authentication: 'uwierzytelnianie',
      authorization: 'autoryzacja',
      backend: 'rozwój backendu',
      git: 'Git',
      eslint: 'ESLint',
      vitest: 'Vitest',
      testinglibrary: 'React Testing Library',
      cursor: 'Cursor AI',
    },
  },
  project: {
    heading: 'Projekty',
    gitxTitle: 'GitX',
    gitxBlurb:
      'Pełnostackowa platforma społecznościowa dla programistów, inspirowana X (Twitterem).',
    details: 'Szczegóły',
    live: 'Podgląd na żywo',
    github: 'GitHub',
    stackLabel: 'Stack',
  },
  education: {
    heading: 'Wykształcenie',
    items: [
      {
        school: 'The Odin Project',
        title: 'Ukończenie The Odin Project',
        dates: 'luty–sierpień 2026',
      },
      {
        school: 'Regionalne Centrum Edukacji Zawodowej w Biłgoraju',
        title:
          'Dyplom zawodowy — technik programista (kwalifikacja 351406, INF.03 i INF.04)',
        dates: '2019–2024',
      },
    ],
  },
  experience: {
    heading: 'Doświadczenie',
    jobs: [
      {
        role: 'Detailer samochodowy',
        company: 'APZ GmbH, Rheine, Niemcy',
        dates: '2025',
        bullets: [
          'Detailing dużej liczby aut, w tym po leasingu, na miejscu u dealera BMW/MINI.',
          'Praca jako technik zewnętrzny w międzynarodowym środowisku.',
        ],
      },
      {
        role: 'Detailer samochodowy',
        company:
          'Karlskrona Bilcenter AB (Mazda/Suzuki i auta używane), Karlskrona, Szwecja',
        dates: '2025',
        bullets: [
          'Pełny detailing do standardu sprzedaży dealera.',
          'Praca po angielsku w szybkim, międzynarodowym zespole.',
        ],
      },
      {
        role: 'Pracownik magazynu',
        company: 'Ambra S.A., Wola Duża, Polska',
        dates: '2024',
        bullets: [
          'Montaż ekspozycji promocyjnych w systemie akordowym.',
          'Realizacja dziennych celów z dokładnością i tempem.',
        ],
      },
    ],
  },
  contact: {
    heading: 'Kontakt',
    invite:
      'Jeśli rekrutujesz junior full-stack developera, chętnie się odezwę.',
    email: 'E-mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    downloadCv: 'Pobierz CV',
  },
  footer: {
    rights: 'Damian Wujec',
  },
  caseStudy: {
    back: 'Wróć na stronę główną',
    notFound: 'Nie znaleziono projektu.',
    problem: 'Problem',
    built: 'Co zbudowałem',
    screenshots: 'Zrzuty ekranu',
    result: 'Efekt',
    links: 'Linki',
    gitxProblem:
      'Programiści i tak żyją na GitHubie, a typowe aplikacje społecznościowe wymagają osobnego konta. GitX to feed w stylu Twittera dla developerów, w którym wejściem jest GitHub.',
    gitxBuilt:
      'Zaprojektowałem i zaimplementowałem REST API z GitHub OAuth 2.0 (Passport.js), sesjami w Redis i relacyjnym schematem w PostgreSQL (Prisma). Są posty, polubienia, komentarze, zakładki, follow, grupy i profile — oraz interfejs w React, który z tego korzysta.',
    gitxResult:
      'Działa pełny stos: logowanie, graf społeczny i sesje spinają się od UI do bazy. Tym projektem pokazuję, jak myślę o API, danych i interfejsie naraz.',
    shotFeed:
      'Feed i funkcje społecznościowe — aktualny UI jest w podglądzie na żywo.',
    shotAuth: 'Logowanie GitHub OAuth i żądania oparte o sesję.',
    shotData: 'Schemat PostgreSQL oraz Redis jako magazyn sesji.',
  },
}
