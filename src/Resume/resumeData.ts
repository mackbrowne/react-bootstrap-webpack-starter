export const summary = `Staff-level engineer with 13+ years building production mobile and web systems across
startups, scale-ups, and large enterprises. Specializes in React Native architecture,
consumer-facing mobile apps, and the full journey from zero to shipped — including
the CI/CD infrastructure, performance work, and developer tooling that makes teams
fast and reliable. Previously at Shopify, contributing to the POS platform across
mobile, web, and DevOps. Based in Amsterdam, open to senior IC, staff, and engineering
leadership roles.`;

export const experience = [
  {
    company: 'Shopify',
    location: 'Amsterdam',
    positions: [
      {
        title: 'Senior Engineer - Retail',
        time: 'Jun 2022 – Mar 2026',
        duties: [
          'Fixed a critical KMM/JS type coercion bug in the receipt printer in the first week — then continued contributing to the broader KMM/React Native architecture, debugging state sync issues across the Kotlin business logic and JS UI layers.',
          'Rewrote the POS numeric keypad to use integer currency units, eliminating an entire class of currency symbol and backspace bugs and simplifying future maintenance.',
          'Led a tiger team with the Principal Engineer to overhaul the React Native e2e test suite — resolved foundational architectural issues, redistributed ownership across teams, and drove the suite to 100% pass rate.',
          "Led the migration from Yarn to pnpm across the POS monorepo — a 40,000-line changeset — using AI-assisted development tooling as part of the team's standard engineering workflow.",
          'Optimized FlatList rendering and offline sync performance across the POS; led several projects including receiptless returns and a full overhaul of the POS UI.',
        ],
      },
    ],
  },
  {
    company: 'Workiva',
    location: 'Amsterdam',
    positions: [
      {
        title: 'Senior Engineer - Global Solutions',
        time: 'Oct 2021 – May 2022',
        duties: [
          'Delivered high-priority feature requests for enterprise customers (including Fortune 500 clients), working with full autonomy from requirements through to production.',
          'Rapidly onboarded to a new stack (Go and Dart), contributing meaningful refactors and feature additions within weeks.',
          'Extended core application workflows including custom wizards, feature flags, and parameterized component refactors on the Go backend.',
          'Conducted technical interviews as part of growing the European engineering team.',
        ],
      },
    ],
  },
  {
    company: 'Nationale Nederlanden',
    location: 'Amsterdam',
    positions: [
      {
        title: 'Senior Engineer & Tech Lead - Architecture and Innovation',
        time: 'Jul 2020 – Sep 2021',
        duties: [
          'Tech Lead on the NN Bank mobile app team (React Native), delivering features including a swipeable card UI displaying live customer IBAN and account details.',
          'Implemented a custom bitwise encryption module in JavaScript for secure PIN and credential transmission, built to specification from a payment provider with full unit test coverage including known-answer tests against provider-supplied key/value pairs.',
          'Established screenshot and end-to-end testing infrastructure using Detox across the mobile app.',
          'Led the company-wide UI component library initiative — consolidated duplicate components across product teams into a single shared source, standardised APIs, and built a sandbox app with documented examples to drive adoption.',
          "Leveraged the bank's push notification framework extensively throughout feature development — nearly every flow had configurable alerts, including interactive notifications requiring user response, which shaped how features were designed and tested.",
          'Implemented deep linking to handle external triggers (email activation, third-party redirects) routing users directly into authenticated in-app actions.',
          'Integrated Crashlytics for OS-level crash reporting alongside React Native error boundaries, providing production observability beyond what the JS layer surfaces.',
          'Conducted 50–100 technical interviews during a major hiring expansion, developing evaluation criteria and technical assessments to screen candidates — largely international hires — with a focus on surfacing genuine ability over rehearsed answers.',
          'Progressing toward Engineering Manager before departing; the Architecture & Innovation team was subsequently disbanded.',
        ],
      },
    ],
  },
  {
    company: 'Elsevier',
    location: 'Amsterdam',
    positions: [
      {
        title: 'Senior Engineer - Scopus',
        time: 'Feb 2020 – Jul 2020',
        duties: [
          'Built a Git-abstraction CLI tool for non-Git-native developers — wrapping branch management, merges, and commits in npm scripts with guided conflict resolution, enabling the wider team to consume and update shared HTML web components without Git knowledge.',
          'Contributed to the micro-frontend architecture rebuild of the Scopus homepage.',
          'Conducted technical interviews to support team growth.',
        ],
      },
    ],
  },
  {
    company: 'Prodigy Education',
    location: 'Toronto',
    positions: [
      {
        title: 'Senior Engineer - Principal Web Squad',
        time: 'Jun 2018 – Sep 2019',
        duties: [
          'Built the Principal dashboard from the ground up — aggregating student and teacher data across entire schools into views unique to the principal role.',
          'Collaborated closely with product and design in extended sessions to define UX and feature scope for a net-new user type.',
        ],
      },
      {
        title: 'Lead Mobile Engineer',
        time: '',
        duties: [
          'Built a custom in-app developer console for mobile QA — exposing Chrome-style commands (game state warping, debug shortcuts) directly from the mobile app, eliminating the need to manually play through the game to reach test states.',
          'Implemented Google OAuth for the mobile app, which had been disabled on mobile entirely — including account recovery for users who had previously authenticated via Google with no mobile login path.',
          'Drove mobile performance improvements across the app — reduced startup time, trimmed app footprint, and optimised in-game content and loading screen performance for a smoother experience on lower-end devices. Integrated Crashlytics for native crash reporting alongside in-app logging.',
          'Designed and implemented the full CI/CD pipeline: branch-protected promotion flow (development → staging → main), automated TestFlight and Google Play deployments on merge, app signing, staging-gate quality checks, and a two-approval PR requirement — enabling junior developers to ship confidently to production.',
          'Introduced Docusaurus to the engineering org — presented the proposal, migrated all existing content in advance, and launched a fully working site the same day leadership approved it.',
        ],
      },
    ],
  },
  {
    company: 'Self Incorporated Consultant',
    location: 'Canada & USA (On-Site and Remote)',
    positions: [
      {
        title: 'Full Stack, Mobile Developer & Architect',
        time: 'August 2011 – June 2018',
        duties: [
          'Built a full passenger/driver ride-sharing mobile app with real-time geolocation for Transit Labs / RideCo.',
          'Developed an award-winning CMS for the Wynonna Earp TV series — geo-locked and time-locked to release content by region and episode air time, built in MeteorJS with advanced mobile-compatible parallax effects.',
          'Served as Technical Director at Shop Bonsai — hired and led a team of 8, built a custom hybrid e-commerce app with merchant product management and order processing, deep linking with web fallbacks to ensure an uninterrupted experience with or without the app, and two-way push notification flows with control-flow logic including local and remote-triggered notifications with user response handling.',
          'Built unofficial IBM mobile clients including ClearConcert, a Rational Team Concert mobile client.',
          'Delivered full-stack and hybrid mobile projects across IBM, NYPD, NBC, Syfy/Space Channel, and multiple Toronto startups and nonprofits.',
        ],
      },
    ],
  },
];

export const education = [
  {
    company: 'University Of Ontario Institute of Technology',
    location: 'Oshawa, Canada',
    positions: [
      {
        title: 'Bachelor Of Science with Honours',
        time: '2007 - 2012',
        duties: [
          'Computer Science with minor in Mathematics. Thesis involving concurrent, multi-core web crawling.',
          '16 Month Internship in Web Application Development at IBM.',
        ],
      },
    ],
  },
];

export const contact = ['info@mackbrowne.com'];

export const portfolio = [
  'linkedin.com/in/mackbrowne',
  'github.com/mackbrowne',
  'mackbrowne.com',
];

export const skills = [
  'Mobile CI/CD & App Store Delivery',
  'React Native Architecture',
  'Staff & Tech Lead',
  'Engineering Hiring & Interviews',
  'Single Page Apps',
  'REST & GraphQL APIs',
  'Unit, E2E & Screenshot Testing',
  'Feature Flags & Remote Config',
  'Agile, Kanban and Scrum',
  'AI-Assisted Development',
];

export const frameworks = [
  'React Native',
  'ReactJS',
  'Expo',
  'Cordova',
  'NodeJS',
  'Styled-Components',
  'Redux',
  'TypeScript',
  'GraphQL',
  'Jest',
  'Detox',
  'Cypress',
  'Bootstrap',
  'MeteorJS',
  'Angular',
];

export const services = [
  'AWS',
  'Firebase',
  'Crashlytics',
  'LaunchDarkly',
  'CircleCI',
  'Google Play',
  'Apple Developer',
  'TestFlight',
  'Stripe',
  'OAuth',
  'JIRA',
];

export const tools = [
  'Git',
  'pnpm',
  'Claude Code',
  'Cursor',
  'VSCode',
  'Jenkins',
  'Sentry',
  'Prettier',
  'Lighthouse',
  'Docusaurus',
];

export const languages = [
  'JavaScript',
  'TypeScript',
  'Ruby',
  'Go',
  'Dart',
  'Kotlin',
  'Python',
  'SQL',
  'Java',
];
