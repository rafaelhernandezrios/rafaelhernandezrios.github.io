export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Text in both languages. */
export type L = { en: string; es: string };
export const t = (v: L | string, lang: Lang) => (typeof v === 'string' ? v : v[lang]);

/** Prefix a path with the language segment ("/" for English, "/es/" for Spanish). */
export const localePath = (path: string, lang: Lang) => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/es${clean === '/' ? '/' : clean}`;
};

/** The same page in the other language. */
export const altPath = (pathname: string, to: Lang) => {
  const base = pathname.replace(/^\/es(\/|$)/, '/');
  return localePath(base, to);
};

export const ui = {
  nav: {
    about: { en: 'About', es: 'Sobre mí' },
    research: { en: 'Research', es: 'Investigación' },
    projects: { en: 'Projects', es: 'Proyectos' },
    highlights: { en: 'Highlights', es: 'Logros' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  hero: {
    kicker: { en: 'Osaka, Japan · Mexico', es: 'Osaka, Japón · México' },
    title: {
      en: 'I build systems where brains, robots and virtual worlds meet.',
      es: 'Construyo sistemas donde se encuentran cerebros, robots y mundos virtuales.',
    },
    lead: {
      en: 'Lead Engineer at Mirai Innovation Research Institute and PhD candidate in Computer Science (UAEH). I design neuroadaptive systems: EEG that measures cognitive load and feeds it back into robots, VR and training simulators.',
      es: 'Lead Engineer en Mirai Innovation Research Institute y doctorando en Ciencias Computacionales (UAEH). Diseño sistemas neuroadaptativos: EEG que mide la carga cognitiva y la retroalimenta a robots, realidad virtual y simuladores de entrenamiento.',
    },
    ctaWork: { en: 'See my work', es: 'Ver mi trabajo' },
    ctaContact: { en: 'Get in touch', es: 'Contáctame' },
  },
  about: {
    title: { en: 'About', es: 'Sobre mí' },
    body: {
      en: [
        'I am a mechatronics engineer with a master’s degree, based in Osaka for the last six years. At Mirai Innovation Research Institute I lead R&D engineering: I design architectures that integrate robotics, VR, AI, biosensors and haptic devices, build prototypes and experiments, and take them to international exhibitions such as Expo Osaka 2025 and Expo Dubai.',
        'My doctoral research focuses on neuroadaptive systems — measuring cognitive load with EEG (frontal theta / parietal alpha) and using that signal to adapt human–machine systems, with an application to laparoscopic surgery training in VR and teleoperation.',
        'I also teach: robotics workshops, AI and VR programs, and mentoring for students and interns from Latin America, Europe and Asia.',
      ],
      es: [
        'Soy ingeniero mecatrónico con maestría y vivo en Osaka desde hace seis años. En Mirai Innovation Research Institute lidero la ingeniería de I+D: diseño arquitecturas que integran robótica, VR, IA, biosensores y dispositivos hápticos, construyo prototipos y experimentos, y los llevo a exhibiciones internacionales como la Expo Osaka 2025 y la Expo Dubái.',
        'Mi investigación doctoral se centra en sistemas neuroadaptativos: medir la carga cognitiva con EEG (theta frontal / alfa parietal) y usar esa señal para adaptar sistemas humano–máquina, con una aplicación al entrenamiento de cirugía laparoscópica en VR y teleoperación.',
        'También enseño: talleres de robótica, programas de IA y VR, y mentoría a estudiantes y practicantes de Latinoamérica, Europa y Asia.',
      ],
    },
    facts: [
      { k: { en: 'Role', es: 'Puesto' }, v: { en: 'Lead Engineer · Head of R&D Engineering, Mirai Innovation', es: 'Lead Engineer · Head of R&D Engineering, Mirai Innovation' } },
      { k: { en: 'PhD', es: 'Doctorado' }, v: { en: 'Computer Science, UAEH (in progress)', es: 'Ciencias Computacionales, UAEH (en curso)' } },
      { k: { en: 'Previously', es: 'Antes' }, v: { en: 'Robotics Engineer, Keisuugiken (Japan)', es: 'Robotics Engineer, Keisuugiken (Japón)' } },
      { k: { en: 'Stack', es: 'Stack' }, v: { en: 'EEG · LSL · ROS 2 · Unity · Python · TypeScript', es: 'EEG · LSL · ROS 2 · Unity · Python · TypeScript' } },
    ],
  },
  research: {
    kicker: { en: 'Doctoral research', es: 'Investigación doctoral' },
    title: { en: 'Neuroadaptive systems', es: 'Sistemas neuroadaptativos' },
    lead: {
      en: 'Can a machine notice when you are overloaded — and adapt before you fail? I measure cognitive load from EEG and close the loop with robots, VR and surgical simulators.',
      es: '¿Puede una máquina notar cuándo estás sobrecargado y adaptarse antes de que falles? Mido la carga cognitiva con EEG y cierro el ciclo con robots, VR y simuladores quirúrgicos.',
    },
    steps: [
      { t: { en: 'Sense', es: 'Medir' }, d: { en: '8-channel AURA EEG streamed over Lab Streaming Layer (LSL).', es: 'EEG AURA de 8 canales transmitido por Lab Streaming Layer (LSL).' } },
      { t: { en: 'Estimate', es: 'Estimar' }, d: { en: 'Frontal theta / parietal alpha ratio (F3·Fz·F4 vs P3·Pz·P4) as a cognitive-load index.', es: 'Razón theta frontal / alfa parietal (F3·Fz·F4 vs P3·Pz·P4) como índice de carga cognitiva.' } },
      { t: { en: 'Adapt', es: 'Adaptar' }, d: { en: 'The system adjusts task difficulty, assistance or pacing in real time.', es: 'El sistema ajusta la dificultad, la asistencia o el ritmo de la tarea en tiempo real.' } },
      { t: { en: 'Train', es: 'Entrenar' }, d: { en: 'Applied to laparoscopic suture training in VR with a haptic robot.', es: 'Aplicado al entrenamiento de sutura laparoscópica en VR con un robot háptico.' } },
    ],
    figureCaption: {
      en: 'Regional θ/α across baseline and task conditions (N = 7). From the PHD repository.',
      es: 'θ/α regional en condiciones de línea base y tarea (N = 7). Del repositorio PHD.',
    },
    pubsTitle: { en: 'Selected publications & talks', es: 'Publicaciones y charlas' },
  },
  projects: {
    title: { en: 'Featured projects', es: 'Proyectos destacados' },
    lead: {
      en: 'Case studies of systems I designed and built — from EEG pipelines to robots and VR experiences.',
      es: 'Casos de estudio de sistemas que diseñé y construí: desde pipelines de EEG hasta robots y experiencias VR.',
    },
    all: { en: 'All projects', es: 'Todos los proyectos' },
    filterAll: { en: 'All', es: 'Todos' },
    readCase: { en: 'Read case study', es: 'Ver caso de estudio' },
    back: { en: '← All projects', es: '← Todos los proyectos' },
    problem: { en: 'The problem', es: 'El problema' },
    solution: { en: 'What I built', es: 'Qué construí' },
    outcome: { en: 'Outcome', es: 'Resultado' },
    stack: { en: 'Stack', es: 'Stack' },
    repos: { en: 'Repositories', es: 'Repositorios' },
    role: { en: 'My role', es: 'Mi rol' },
    year: { en: 'Year', es: 'Año' },
    privateRepo: { en: 'Private repository', es: 'Repositorio privado' },
    next: { en: 'Next project', es: 'Siguiente proyecto' },
    gallery: { en: 'Gallery', es: 'Galería' },
  },
  github: {
    title: { en: 'More on GitHub', es: 'Más en GitHub' },
    lead: {
      en: 'Updated automatically from my public repositories on every deploy.',
      es: 'Se actualiza automáticamente desde mis repositorios públicos en cada deploy.',
    },
    updated: { en: 'Last synced', es: 'Última sincronización' },
    viewAll: { en: 'View profile on GitHub', es: 'Ver perfil en GitHub' },
    search: { en: 'Search repositories…', es: 'Buscar repositorios…' },
  },
  highlights: {
    title: { en: 'Highlights', es: 'Logros' },
    lead: { en: 'Exhibitions, awards and programs along the way.', es: 'Exhibiciones, premios y programas en el camino.' },
  },
  skills: { title: { en: 'Toolbox', es: 'Herramientas' } },
  contact: {
    title: { en: 'Let’s build something', es: 'Construyamos algo' },
    lead: {
      en: 'Open to research collaborations, R&D engineering roles, talks and workshops on robotics, neurotechnology and VR.',
      es: 'Abierto a colaboraciones de investigación, puestos de ingeniería de I+D, charlas y talleres de robótica, neurotecnología y VR.',
    },
    email: { en: 'Email me', es: 'Escríbeme' },
  },
  footer: {
    built: { en: 'Built with Astro · Deployed on GitHub Pages', es: 'Hecho con Astro · Publicado en GitHub Pages' },
  },
} as const;
