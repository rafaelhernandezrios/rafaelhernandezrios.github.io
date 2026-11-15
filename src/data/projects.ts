import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';

import phdFigure from '../assets/projects/phd-regional-theta-alpha.png';
import auraDemo from '../assets/projects/aura-sdk-demo.jpg';
import clasesRobotica from '../assets/projects/clases-robotica.png';
import expoOsaka from '../assets/photos/expo-osaka.jpg';
import emgPhoto from '../assets/photos/emg_project.jpg';

/**
 * Curated projects. Each one gets its own case-study page at /projects/<slug>/.
 *
 * - `cover`: a real image (photo, screenshot, figure). When missing, a generated
 *   illustration is drawn from `motif` (see components/ProjectCover.astro).
 * - `repos`: GitHub repositories (owner/name). `private: true` hides the link.
 * - Add or reorder freely; `featured: true` shows the project on the home page.
 */
export type Motif =
  | 'eeg' | 'surgery' | 'phobia' | 'relax' | 'aura' | 'mindrobot' | 'teleop'
  | 'interview' | 'hand' | 'vision' | 'education' | 'cansat' | 'analytics' | 'emg';

export type Category = 'neuro' | 'robotics' | 'xr' | 'ai' | 'web' | 'education' | 'hardware';

export const categories: Record<Category, L> = {
  neuro: { en: 'Neurotechnology', es: 'Neurotecnología' },
  robotics: { en: 'Robotics', es: 'Robótica' },
  xr: { en: 'VR / XR', es: 'VR / XR' },
  ai: { en: 'AI & Vision', es: 'IA y visión' },
  web: { en: 'Web platforms', es: 'Plataformas web' },
  education: { en: 'Education', es: 'Educación' },
  hardware: { en: 'Hardware', es: 'Hardware' },
};

export interface Project {
  slug: string;
  title: L;
  tagline: L;
  year: string;
  categories: Category[];
  featured?: boolean;
  motif: Motif;
  accent?: string;
  cover?: ImageMetadata;
  /** 'contain' for charts/figures that must not be cropped. */
  coverFit?: 'cover' | 'contain';
  coverAlt?: L;
  video?: { src: string; poster?: ImageMetadata; caption: L };
  gallery?: { src: ImageMetadata; alt: L; caption?: L }[];
  role: L;
  problem: L;
  solution: L[];
  outcome: L;
  stack: string[];
  repos: { name: string; label?: string; private?: boolean }[];
  links?: { label: L; url: string }[];
}

export const projects: Project[] = [
  {
    slug: 'eeg-cognitive-load',
    title: { en: 'EEG Cognitive-Load Analysis', es: 'Análisis de carga cognitiva con EEG' },
    tagline: {
      en: 'The core of my PhD: real-time EEG acquisition, cleaning and a frontal-theta / parietal-alpha index of mental workload.',
      es: 'El núcleo de mi doctorado: adquisición de EEG en tiempo real, limpieza y un índice theta frontal / alfa parietal de carga mental.',
    },
    year: '2025 – 2026',
    categories: ['neuro'],
    featured: true,
    motif: 'eeg',
    cover: phdFigure,
    coverFit: 'contain',
    coverAlt: { en: 'Bar charts comparing the regional theta/alpha ratio across four conditions', es: 'Gráficas de barras que comparan la razón theta/alfa regional en cuatro condiciones' },
    role: { en: 'Researcher · sole developer', es: 'Investigador · único desarrollador' },
    problem: {
      en: 'Neuroadaptive systems need a cognitive-load signal that is cheap, robust and works with a low-channel wearable EEG — not only with lab-grade equipment.',
      es: 'Los sistemas neuroadaptativos necesitan una señal de carga cognitiva barata, robusta y que funcione con un EEG portátil de pocos canales, no solo con equipo de laboratorio.',
    },
    solution: [
      { en: 'Acquisition platform with a GUI that records the 8-channel AURA headset over Lab Streaming Layer, with structured protocols and cognitive tasks.', es: 'Plataforma de adquisición con GUI que registra la diadema AURA de 8 canales vía Lab Streaming Layer, con protocolos estructurados y tareas cognitivas.' },
      { en: 'Cleaning and filtering pipeline, spectral band power and the regional θ/α ratio (F3·Fz·F4 vs P3·Pz·P4), with single-channel Fz/Pz as the classic configuration and a sensitivity analysis.', es: 'Pipeline de limpieza y filtrado, potencia espectral por banda y la razón θ/α regional (F3·Fz·F4 vs P3·Pz·P4), con Fz/Pz de un solo canal como configuración clásica y análisis de sensibilidad.' },
      { en: 'Statistical analysis (mixed models, per-window distributions) and scientific figures generated straight from the recordings.', es: 'Análisis estadístico (modelos mixtos, distribuciones por ventana) y figuras científicas generadas directamente de los registros.' },
    ],
    outcome: {
      en: 'A reproducible pipeline used in my cognitive-workload studies (controlled lab protocol and an ecological exergaming task); the anonymized dataset is published as a separate repository.',
      es: 'Un pipeline reproducible que uso en mis estudios de carga cognitiva (protocolo controlado de laboratorio y una tarea ecológica de exergaming); el dataset anonimizado está publicado en un repositorio aparte.',
    },
    stack: ['Python', 'LSL', 'NumPy / SciPy', 'MNE', 'statsmodels', 'PyQt', 'AURA EEG'],
    repos: [{ name: 'PHD' }, { name: 'Wiley-Rafa', label: 'EEG dataset' }],
  },
  {
    slug: 'suture-trainer',
    title: { en: 'SutureTrainer: Neuroadaptive Laparoscopy Simulator', es: 'SutureTrainer: simulador laparoscópico neuroadaptativo' },
    tagline: {
      en: 'A Unity simulator for laparoscopic suturing that reads the trainee’s cognitive load and adapts the session.',
      es: 'Un simulador en Unity de sutura laparoscópica que lee la carga cognitiva del residente y adapta la sesión.',
    },
    year: '2026',
    categories: ['neuro', 'xr', 'robotics'],
    featured: true,
    motif: 'surgery',
    accent: '#3fb6a8',
    role: { en: 'Researcher · Unity & hardware integration', es: 'Investigador · integración Unity y hardware' },
    problem: {
      en: 'Surgical skills training is cognitively demanding; a simulator that ignores the trainee’s mental state can overload novices or under-challenge experts.',
      es: 'El entrenamiento de habilidades quirúrgicas exige mucho cognitivamente; un simulador que ignora el estado mental del residente puede saturar a los novatos o no retar a los expertos.',
    },
    solution: [
      { en: 'Unity training scenes for laparoscopic suturing, operated with VR controllers and with a 3D Systems Touch haptic robot.', es: 'Escenas de entrenamiento en Unity para sutura laparoscópica, operadas con controles de VR y con un robot háptico 3D Systems Touch.' },
      { en: 'Live AURA EEG over LSL to estimate cognitive load during each activity.', es: 'EEG AURA en vivo vía LSL para estimar la carga cognitiva durante cada actividad.' },
      { en: 'Experimental protocol comparing an adaptive group against a non-adaptive group.', es: 'Protocolo experimental que compara un grupo adaptativo contra uno no adaptativo.' },
    ],
    outcome: {
      en: 'Presented as “EEG Cognitive-Load Control of a Robotic Suturing Trainer” at COMRob 2026 (Mexican Robotics Congress).',
      es: 'Presentado como “EEG Cognitive-Load Control of a Robotic Suturing Trainer” en COMRob 2026 (Congreso Mexicano de Robótica).',
    },
    stack: ['Unity', 'C#', 'OpenXR', '3D Systems Touch', 'LSL', 'AURA EEG'],
    repos: [{ name: 'Laparoscopy-training' }],
  },
  {
    slug: 'vr-phobia-exposure',
    title: { en: 'VR Phobia Exposure with EEG-Adaptive Levels', es: 'Exposición a fobias en VR con niveles adaptativos por EEG' },
    tagline: {
      en: 'Gradual 360° exposure to five phobias on Meta Quest 3, driven by a researcher panel and live EEG metrics.',
      es: 'Exposición gradual en 360° a cinco fobias en Meta Quest 3, guiada por un panel de investigador y métricas de EEG en vivo.',
    },
    year: '2026',
    categories: ['xr', 'neuro'],
    featured: true,
    motif: 'phobia',
    accent: '#8b7cf6',
    role: { en: 'Lead developer · system architecture', es: 'Desarrollador principal · arquitectura del sistema' },
    problem: {
      en: 'Exposure therapy research needs controlled, repeatable sessions with synchronized physiological data — and lab PCs that are often locked down.',
      es: 'La investigación en terapia de exposición necesita sesiones controladas y repetibles con datos fisiológicos sincronizados, y PCs de laboratorio que suelen estar bloqueadas.',
    },
    solution: [
      { en: 'Participant app on Quest 3 (consent → waiting room → 360° clip) and a researcher console with session control, live EEG metrics and manual overrides.', es: 'App del participante en Quest 3 (consentimiento → sala de espera → clip 360°) y consola del investigador con control de sesión, métricas de EEG en vivo y ajustes manuales.' },
      { en: 'Synchronized logs (session, phobia, level, video, timestamps, user actions) and an always-visible emergency exit.', es: 'Logs sincronizados (sesión, fobia, nivel, video, timestamps, acciones) y botón de salida de emergencia siempre visible.' },
      { en: 'Three iterations: WebXR + Node, a USB-portable build for offline lab PCs, and finally a native Unity version with automatic headset discovery.', es: 'Tres iteraciones: WebXR + Node, una versión portable en USB para PCs sin internet y finalmente una versión nativa en Unity con descubrimiento automático del visor.' },
    ],
    outcome: {
      en: 'Packaged for research centers, with documentation in English and Japanese.',
      es: 'Empaquetado para centros de investigación, con documentación en inglés y japonés.',
    },
    stack: ['Unity', 'C#', 'A-Frame / WebXR', 'Node.js', 'WebSocket', 'Python', 'LSL'],
    repos: [{ name: 'phobias-unity' }, { name: 'Phobias-ATR' }, { name: 'Phobias' }],
  },
  {
    slug: 'vr-relaxation-eeg',
    title: { en: 'VR Relaxation with EEG — Expo Osaka 2025', es: 'Relajación en VR con EEG — Expo Osaka 2025' },
    tagline: {
      en: 'Visitors relax in 360° environments while their EEG computes a live relaxation index — then the system replays the scene that relaxed them most.',
      es: 'Los visitantes se relajan en entornos 360° mientras su EEG calcula un índice de relajación en vivo; luego el sistema repite la escena que más los relajó.',
    },
    year: '2025 – 2026',
    categories: ['xr', 'neuro'],
    featured: true,
    motif: 'relax',
    accent: '#5fb37d',
    cover: expoOsaka,
    coverAlt: { en: 'A visitor wearing a VR headset at the Expo Osaka 2025 booth while Rafael operates the system', es: 'Un visitante con visor VR en el stand de la Expo Osaka 2025 mientras Rafael opera el sistema' },
    role: { en: 'GUI design · relaxation-detection algorithm · exhibition engineering', es: 'Diseño de GUI · algoritmo de detección de relajación · ingeniería de exhibición' },
    problem: {
      en: 'Make EEG understandable for the general public in a few minutes, at a busy international exhibition, with zero setup failures.',
      es: 'Hacer que el EEG sea comprensible para el público general en pocos minutos, en una exhibición internacional concurrida y sin fallas de montaje.',
    },
    solution: [
      { en: 'A-Frame participant app over HTTPS that works offline on a LAN, a Python LSL → WebSocket bridge and an Electron operator monitor.', es: 'App de participante en A-Frame por HTTPS que funciona sin internet en LAN, puente Python LSL → WebSocket y monitor de operador en Electron.' },
      { en: 'Exhibition mode: a timed playlist of five environments plus a replay of the “winner” with the highest average relaxation index.', es: 'Modo exhibición: playlist cronometrada de cinco entornos más la repetición del “ganador” con el mayor índice de relajación promedio.' },
      { en: 'Later ported to a Unity demo for Meta Quest with a bilingual EN/JP operator console and a brain heatmap.', es: 'Después portado a una demo en Unity para Meta Quest con consola de operador bilingüe EN/JP y mapa de calor cerebral.' },
    ],
    outcome: {
      en: 'Shown at Expo Osaka 2025 and adapted for 5G lab demos.',
      es: 'Exhibido en la Expo Osaka 2025 y adaptado para demos de laboratorio 5G.',
    },
    stack: ['A-Frame', 'Electron', 'Python', 'MNE', 'LSL', 'Unity', 'Meta Quest'],
    repos: [{ name: 'Relaxation-5GTEQS' }, { name: '5G-Lab-Relaxation' }, { name: 'RelaxationExperience' }],
  },
  {
    slug: 'aura-eeg-ecosystem',
    title: { en: 'AURA EEG Software Ecosystem', es: 'Ecosistema de software para el EEG AURA' },
    tagline: {
      en: 'Desktop app, Python SDK and user portal around AURA, Mirai’s 8-channel EEG headset.',
      es: 'App de escritorio, SDK en Python y portal de usuarios alrededor de AURA, la diadema EEG de 8 canales de Mirai.',
    },
    year: '2023 – 2026',
    categories: ['neuro', 'web'],
    featured: true,
    motif: 'aura',
    accent: '#e8664f',
    cover: auraDemo,
    coverAlt: { en: 'AURA Software showing live EEG traces and a brain heatmap', es: 'AURA Software mostrando trazas de EEG en vivo y un mapa de calor cerebral' },
    video: {
      src: '/media/aura-sdk-demo.mp4',
      poster: auraDemo,
      caption: { en: 'AURA Software streaming raw EEG over LSL, the source the SDK scripts subscribe to.', es: 'AURA Software transmitiendo EEG crudo por LSL, la fuente a la que se suscriben los scripts del SDK.' },
    },
    role: { en: 'Contributor to the device software · SDK & portal developer', es: 'Colaborador en el software del dispositivo · desarrollador del SDK y del portal' },
    problem: {
      en: 'A research-grade wearable is only as useful as the tools around it: researchers need to record, stream and analyze data without fighting the hardware.',
      es: 'Un dispositivo portátil de investigación vale lo que valen sus herramientas: los investigadores necesitan grabar, transmitir y analizar datos sin pelear con el hardware.',
    },
    solution: [
      { en: 'AURA Software: live connection, electrode configuration with contact-quality indicators, recording with event markers and LSL streaming.', es: 'AURA Software: conexión en vivo, configuración de electrodos con indicadores de calidad de contacto, grabación con marcadores de eventos y transmisión LSL.' },
      { en: 'AURA SDK: Python examples to receive, filter (incl. a 3-channel Kalman filter), compute band power, plot and record EEG, plus OSC output.', es: 'AURA SDK: ejemplos en Python para recibir, filtrar (incluye un filtro de Kalman de 3 canales), calcular potencia por banda, graficar y grabar EEG, además de salida OSC.' },
      { en: 'User portal: authentication, device registry, software center with S3 downloads, support tickets and learning resources.', es: 'Portal de usuarios: autenticación, registro de dispositivos, centro de software con descargas en S3, tickets de soporte y recursos de aprendizaje.' },
    ],
    outcome: {
      en: 'The toolchain I use across my own experiments and that students and partner labs use in workshops.',
      es: 'La cadena de herramientas que uso en mis propios experimentos y que estudiantes y laboratorios aliados usan en talleres.',
    },
    stack: ['Python', 'pylsl', 'SciPy', 'Next.js', 'TypeScript', 'MongoDB', 'AWS S3'],
    repos: [{ name: 'AURA_SDK' }, { name: 'AURA_Software' }, { name: 'aura-webplatform' }, { name: 'Unofficial-AURAGUI' }],
  },
  {
    slug: 'mind-controlled-robot',
    title: { en: 'Mind-Controlled Robot Arm', es: 'Brazo robótico controlado con la mente' },
    tagline: {
      en: 'Train a model on your own EEG, then move a Dobot Magician by thinking about it.',
      es: 'Entrena un modelo con tu propio EEG y luego mueve un Dobot Magician pensando en ello.',
    },
    year: '2025 – 2026',
    categories: ['neuro', 'robotics', 'education'],
    motif: 'mindrobot',
    accent: '#f0a03c',
    role: { en: 'Developer · workshop instructor', es: 'Desarrollador · instructor del taller' },
    problem: {
      en: 'Brain–computer interfaces feel abstract to students; they need a tangible, safe demo they can calibrate themselves in one session.',
      es: 'Las interfaces cerebro–computadora se sienten abstractas para los estudiantes; necesitan una demo tangible y segura que puedan calibrar ellos mismos en una sesión.',
    },
    solution: [
      { en: 'GUI that connects the robot (serial) and the EEG (LSL), runs a short training protocol and fits a regression model.', es: 'GUI que conecta el robot (serial) y el EEG (LSL), corre un protocolo corto de entrenamiento y ajusta un modelo de regresión.' },
      { en: 'Real-time control loop with safe home position and manual test sequences.', es: 'Lazo de control en tiempo real con posición segura de inicio y secuencias de prueba manuales.' },
      { en: 'A TCP/IP server so a whole class can command one robot from their own laptops, in Python or with a button GUI.', es: 'Un servidor TCP/IP para que todo un grupo controle un mismo robot desde sus laptops, con Python o con una GUI de botones.' },
    ],
    outcome: {
      en: 'Built for Mirai’s robotics and neurotechnology workshops.',
      es: 'Hecho para los talleres de robótica y neurotecnología de Mirai.',
    },
    stack: ['Python', 'scikit-learn', 'LSL', 'Dobot Magician', 'TCP sockets', 'Tkinter'],
    repos: [{ name: 'LinearRegretionEEG' }, { name: 'dobot-mac' }],
  },
  {
    slug: 'robot-teleoperation',
    title: { en: 'Web Teleoperation for Lab Robots', es: 'Teleoperación web de robots de laboratorio' },
    tagline: {
      en: 'Reserve a robot, open your browser and drive it from anywhere — Pepper, Unitree Go2 and more.',
      es: 'Reserva un robot, abre tu navegador y contrólalo desde cualquier lugar: Pepper, Unitree Go2 y más.',
    },
    year: '2023 – 2025',
    categories: ['robotics', 'web'],
    featured: true,
    motif: 'teleop',
    accent: '#4c8dff',
    role: { en: 'Architect · full-stack developer', es: 'Arquitecto · desarrollador full-stack' },
    problem: {
      en: 'International students in remote programs needed hands-on time with real robots located in Osaka.',
      es: 'Estudiantes internacionales en programas remotos necesitaban práctica real con robots ubicados en Osaka.',
    },
    solution: [
      { en: 'Platform with user accounts, a booking system per robot, usage dashboards and an admin panel.', es: 'Plataforma con cuentas de usuario, sistema de reservas por robot, dashboards de uso y panel de administración.' },
      { en: 'Per-robot control interfaces with live video, movement and speech for a SoftBank Pepper (NAOqi) and a Unitree Go2 quadruped.', es: 'Interfaces de control por robot con video en vivo, movimiento y voz para un Pepper de SoftBank (NAOqi) y un cuadrúpedo Unitree Go2.' },
    ],
    outcome: {
      en: 'Built for remote robotics programs with international students.',
      es: 'Hecha para programas remotos de robótica con estudiantes internacionales.',
    },
    stack: ['Node.js', 'Express', 'MongoDB', 'WebRTC', 'ROS', 'NAOqi', 'Python'],
    repos: [{ name: 'teleoperacion-sii' }, { name: 'teleoperation-IKAN' }, { name: 'PepperControlWeb', private: true }],
  },
  {
    slug: 'ai-interview-platform',
    title: { en: 'Mirai Intervieweb: AI Skills Assessment', es: 'Mirai Intervieweb: evaluación de habilidades con IA' },
    tagline: {
      en: 'CV analysis, voice interviews and soft/hard-skill questionnaires scored with LLMs.',
      es: 'Análisis de CV, entrevistas por voz y cuestionarios de habilidades blandas y duras evaluados con LLMs.',
    },
    year: '2025 – 2026',
    categories: ['ai', 'web'],
    featured: true,
    motif: 'interview',
    accent: '#d9588b',
    role: { en: 'Full-stack developer', es: 'Desarrollador full-stack' },
    problem: {
      en: 'Screening hundreds of applicants for international programs took weeks of manual CV reading and interviews.',
      es: 'Filtrar cientos de postulantes a programas internacionales tomaba semanas de lectura manual de CVs y entrevistas.',
    },
    solution: [
      { en: 'CV upload and analysis with GPT-4o-mini, generating tailored interview questions.', es: 'Carga y análisis de CV con GPT-4o-mini, que genera preguntas de entrevista personalizadas.' },
      { en: 'A “virtual studio” voice interview: ElevenLabs TTS reads the question, Whisper transcribes the answer, and a state machine drives the interaction.', es: 'Entrevista por voz tipo “estudio virtual”: ElevenLabs TTS lee la pregunta, Whisper transcribe la respuesta y una máquina de estados guía la interacción.' },
      { en: 'Automatic scoring, questionnaires and reports for evaluators.', es: 'Puntuación automática, cuestionarios y reportes para evaluadores.' },
    ],
    outcome: {
      en: 'Built for applicant evaluation in Mirai Innovation’s programs.',
      es: 'Hecho para evaluar postulantes en los programas de Mirai Innovation.',
    },
    stack: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Whisper', 'ElevenLabs', 'JWT'],
    repos: [{ name: 'interview-system' }],
  },
  {
    slug: 'prosthesis-gesture-control',
    title: { en: 'Gesture-Controlled Robotic Prosthesis', es: 'Prótesis robótica controlada por gestos' },
    tagline: {
      en: 'Real-time hand-gesture detection that drives a robotic hand — built for Expo Osaka 2025.',
      es: 'Detección de gestos de la mano en tiempo real que mueve una mano robótica, hecha para la Expo Osaka 2025.',
    },
    year: '2025',
    categories: ['robotics', 'ai'],
    motif: 'hand',
    accent: '#f08a7e',
    role: { en: 'Developer', es: 'Desarrollador' },
    problem: {
      en: 'Visitors should be able to make a prosthetic hand mirror their own gestures instantly, without wearing any sensor.',
      es: 'Los visitantes debían poder hacer que una mano protésica imitara sus gestos al instante, sin usar ningún sensor.',
    },
    solution: [
      { en: 'MediaPipe hand tracking classifies gestures from a webcam.', es: 'El seguimiento de manos de MediaPipe clasifica gestos desde una webcam.' },
      { en: 'PySide6 interface and serial protocol to the prosthesis controller.', es: 'Interfaz en PySide6 y protocolo serial hacia el controlador de la prótesis.' },
    ],
    outcome: { en: 'Demonstrated at Expo Osaka 2025.', es: 'Demostrado en la Expo Osaka 2025.' },
    stack: ['Python', 'MediaPipe', 'OpenCV', 'PySide6', 'Serial'],
    repos: [{ name: 'robotic-prosthesis-control' }],
  },
  {
    slug: 'computer-vision',
    title: { en: 'Applied Computer Vision', es: 'Visión por computadora aplicada' },
    tagline: {
      en: 'YOLOv8 pest and strawberry detection, GPT-Vision inventory counting and OCR meter reading.',
      es: 'Detección de plagas y fresas con YOLOv8, conteo de inventario con GPT-Vision y lectura de medidores con OCR.',
    },
    year: '2023 – 2025',
    categories: ['ai'],
    motif: 'vision',
    accent: '#3fb6a8',
    role: { en: 'Developer', es: 'Desarrollador' },
    problem: {
      en: 'Agriculture and industry partners asked for quick, low-cost prototypes to automate visual inspection.',
      es: 'Socios de agricultura e industria pedían prototipos rápidos y de bajo costo para automatizar la inspección visual.',
    },
    solution: [
      { en: 'YOLOv8 models with a Flask web app for pest detection, and a strawberry detector for video.', es: 'Modelos YOLOv8 con app web en Flask para detectar plagas, y un detector de fresas en video.' },
      { en: 'Can and bottle counting with GPT Vision as a zero-training alternative.', es: 'Conteo de latas y botellas con GPT Vision como alternativa sin entrenamiento.' },
      { en: 'Water-meter reading: serial image capture plus OCR.', es: 'Lectura de medidores de agua: captura de imagen por serial más OCR.' },
    ],
    outcome: {
      en: 'Working prototypes for demos and partner proposals.',
      es: 'Prototipos funcionales para demos y propuestas a socios.',
    },
    stack: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Flask', 'OpenAI Vision', 'Tesseract'],
    repos: [{ name: 'pest-detection' }, { name: 'Strawberry_detecto' }, { name: 'gpt-inventory-detection' }, { name: 'water_meter_reading' }],
  },
  {
    slug: 'robotics-education',
    title: { en: 'Interactive Robotics & IoT Teaching', es: 'Enseñanza interactiva de robótica e IoT' },
    tagline: {
      en: 'Hands-on material for my classes and workshops: interactive kinematics, IoT pipelines, serial/TCP/LSL practices.',
      es: 'Material práctico para mis clases y talleres: cinemática interactiva, pipelines IoT, prácticas de serial/TCP/LSL.',
    },
    year: '2024 – 2026',
    categories: ['education'],
    featured: true,
    motif: 'education',
    accent: '#f0a03c',
    cover: clasesRobotica,
    coverAlt: { en: 'Interactive web lesson on forward and inverse kinematics of a 2-DOF planar robot', es: 'Lección web interactiva de cinemática directa e inversa de un robot planar de 2 GDL' },
    role: { en: 'Instructor · author', es: 'Instructor · autor' },
    problem: {
      en: 'Students learn robotics faster when they can play with the math and build an end-to-end system in a single session.',
      es: 'Los estudiantes aprenden robótica más rápido cuando pueden jugar con las matemáticas y construir un sistema completo en una sola sesión.',
    },
    solution: [
      { en: 'Interactive web lesson for forward/inverse kinematics of a 2R planar robot, with singularities and activities.', es: 'Lección web interactiva de cinemática directa/inversa de un robot planar 2R, con singularidades y actividades.' },
      { en: '3-hour remote IoT workshop: ESP32 + DHT22 (Wokwi) → MQTT → anomaly detection in Colab → actuation.', es: 'Taller remoto de IoT de 3 horas: ESP32 + DHT22 (Wokwi) → MQTT → detección de anomalías en Colab → actuación.' },
      { en: 'Workshop series on serial communication with Arduino, TCP sockets, LSL, desktop GUIs and Web Serial dashboards.', es: 'Serie de talleres de comunicación serial con Arduino, sockets TCP, LSL, GUIs de escritorio y dashboards con Web Serial.' },
    ],
    outcome: {
      en: 'Taught to university students in person in Osaka and online.',
      es: 'Impartido a estudiantes universitarios, presencial en Osaka y en línea.',
    },
    stack: ['React', 'Vite', 'ESP32', 'MQTT', 'Python', 'Arduino', 'Web Serial API'],
    repos: [{ name: 'clases-robotica' }, { name: 'taller-iot' }, { name: 'RoboticsWorkshop-Communication' }, { name: 'webdashboardwitharduino' }],
  },
  {
    slug: 'jcansat',
    title: { en: 'JCansat v2', es: 'JCansat v2' },
    tagline: {
      en: 'Redesign of an educational CanSat: component audit, architecture decision records, pinout, BOM and KiCad migration.',
      es: 'Rediseño de un CanSat educativo: auditoría de componentes, registros de decisiones de arquitectura, pinout, BOM y migración a KiCad.',
    },
    year: '2026',
    categories: ['hardware', 'education'],
    motif: 'cansat',
    accent: '#4c8dff',
    role: { en: 'Hardware lead', es: 'Líder de hardware' },
    problem: {
      en: 'The first JCansat worked in workshops but was hard to manufacture and maintain.',
      es: 'El primer JCansat funcionaba en talleres pero era difícil de fabricar y mantener.',
    },
    solution: [
      { en: 'Audit of every component and eight ADRs documenting the architecture decisions.', es: 'Auditoría de cada componente y ocho ADRs que documentan las decisiones de arquitectura.' },
      { en: 'Pinout and interconnection reference, BOM and a step-by-step guide to KiCad.', es: 'Referencia de pinout e interconexión, BOM y guía paso a paso hacia KiCad.' },
    ],
    outcome: {
      en: 'A documented base for the next hardware revision used in CanSat programs.',
      es: 'Una base documentada para la siguiente revisión de hardware usada en programas de CanSat.',
    },
    stack: ['KiCad', 'ESP32', 'Sensors', 'ADRs'],
    repos: [{ name: 'Jcansat-v2' }, { name: 'easycansat' }],
  },
  {
    slug: 'emg-classification',
    title: { en: 'EMG Muscle-Activity Classification', es: 'Clasificación de actividad muscular con EMG' },
    tagline: {
      en: 'Machine-learning classification of muscle activity from EMG, combined with EEG recordings.',
      es: 'Clasificación con machine learning de la actividad muscular a partir de EMG, combinada con registros de EEG.',
    },
    year: '2023',
    categories: ['neuro', 'ai'],
    motif: 'emg',
    accent: '#e8664f',
    cover: emgPhoto,
    coverAlt: { en: 'Participant wearing an EEG cap and EMG electrodes on the forearm during a recording session', es: 'Participante con gorro de EEG y electrodos de EMG en el antebrazo durante una sesión de registro' },
    role: { en: 'Developer · experiment design', es: 'Desarrollador · diseño del experimento' },
    problem: {
      en: 'Detect muscle activity reliably with low-cost acquisition hardware.',
      es: 'Detectar actividad muscular de forma confiable con hardware de adquisición de bajo costo.',
    },
    solution: [
      { en: 'Arduino-based EMG acquisition and feature extraction.', es: 'Adquisición de EMG basada en Arduino y extracción de características.' },
      { en: 'Comparison of classical ML models for real-time classification.', es: 'Comparación de modelos clásicos de ML para clasificación en tiempo real.' },
    ],
    outcome: { en: 'Groundwork for later biosignal projects.', es: 'Base para proyectos posteriores de bioseñales.' },
    stack: ['Python', 'Arduino', 'scikit-learn', 'EMG'],
    repos: [{ name: 'EMGModelsPrediction', private: true }],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Repos already shown in a case study (hidden from the automatic GitHub list). */
export const curatedRepoNames = new Set(projects.flatMap((p) => p.repos.map((r) => r.name.toLowerCase())));
