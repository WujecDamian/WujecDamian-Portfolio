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
    gitxStackMore: 'plus pięć więcej',
    waldoTitle: 'Where\'s Waldo',
    waldoBlurb:
      'Gra w znajdowanie postaci: klikasz w zatłoczoną scenę, serwer sprawdza trafienie, a czas ląduje na tablicy wyników.',
    waldoStackMore: 'plus Vite, Vitest…',
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
    waldoProblem:
      'W Where\'s Waldo łatwo oszukiwać, jeśli to przeglądarka decyduje, czy klik jest dobry, albo jeśli stoper żyje tylko u klienta. Trafienia i wyniki muszą iść przez serwer — i działać na telefonie tak samo jak na dużym ekranie.',
    waldoBuilt:
      'Zrobiłem grę w React (ramka celowania, lista postaci, kilka poziomów) i API w Express z Prisma i PostgreSQL. Współrzędne są normalizowane do rozmiaru obrazu; backend potwierdza trafienia, liczy czas i zapisuje wyniki.',
    waldoResult:
      'Gra jest online: wybierasz scenę, znajdujesz postacie, zapisujesz czas. Ten sam cykl UI–API–baza co w GitX, tylko inny produkt.',
    gitxShotHome: 'Czytaj posty.',
    gitxShotExplore: 'Szukaj ludzi.',
    gitxShotChat: 'Czatuj ze znajomymi.',
    gitxShotGroupPost: 'Podziel się czymś z grupą.',
    gitxShotGroupChat: 'Zaplanuj coś z zespołem.',
    gitxShotProfile: 'Pokaż swój profil.',
    gitxShotProfileEdit:
      'Edytuj profil: informacje o sobie i linki do swoich stron.',
    waldoShotLevels:
      'Wybór poziomu — plaża, stok, sklep z zabawkami i głębiny.',
    waldoShotPlay:
      'Klikasz w scenę, wybierasz postać, a API mówi, czy trafiłeś.',
    waldoShotBoard: 'Po rundzie zapisujesz czas na tablicy wyników.',
  },
}
