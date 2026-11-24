import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';

import nyAward from '../assets/photos/ny-outstanding-presentation.jpg';
import expoDubai from '../assets/photos/expo-dubai.jpg';
import expoOsaka from '../assets/photos/expo-osaka.jpg';
import retoAnuies from '../assets/photos/retoanuies.jpg';
import miraiConference from '../assets/photos/miraiconference.jpg';
import podcast from '../assets/photos/mexjapon-podcast.jpg';

export const person = {
  name: 'Rafael Hernández',
  fullName: 'Edgar Rafael Hernández Ríos',
  jobTitle: 'Lead Engineer · Head of R&D Engineering',
  org: 'Mirai Innovation Research Institute',
  orgUrl: 'https://mirai-innovation-lab.com',
  location: 'Osaka, Japan',
  email: 'e.r.hdez94@gmail.com',
  github: 'https://github.com/rafaelhernandezrios',
  githubUser: 'rafaelhernandezrios',
  linkedin: 'https://www.linkedin.com/in/rafaelhernandez94/',
  orcid: 'https://orcid.org/0009-0006-6398-0722',
};

export const stats: { n: string; l: L }[] = [
  { n: '50+', l: { en: 'robotics & AI projects', es: 'proyectos de robótica e IA' } },
  { n: '100+', l: { en: 'students mentored', es: 'estudiantes asesorados' } },
  { n: '6', l: { en: 'years in Japan', es: 'años en Japón' } },
  { n: '2', l: { en: 'World Expos', es: 'Exposiciones Mundiales' } },
];

export interface Highlight { title: L; text: L; date: string; image: ImageMetadata; tag: L }

export const highlights: Highlight[] = [
  {
    title: { en: 'Expo Osaka 2025', es: 'Expo Osaka 2025' },
    text: { en: 'EEG + VR relaxation system: GUI design and relaxation-detection algorithm.', es: 'Sistema de relajación con EEG + VR: diseño de GUI y algoritmo de detección de relajación.' },
    date: '2025 · Osaka', image: expoOsaka, tag: { en: 'Exhibition', es: 'Exhibición' },
  },
  {
    title: { en: 'Reto ANUIES4MX', es: 'Reto ANUIES4MX' },
    text: { en: 'Mentor and organizer of a Mexico–Japan innovation program featured in national media.', es: 'Mentor y organizador de un programa de innovación México–Japón con cobertura en medios nacionales.' },
    date: '2023 – 2026 · México–Japón', image: retoAnuies, tag: { en: 'Education', es: 'Educación' },
  },
  {
    title: { en: 'Outstanding Presentation Award', es: 'Premio a la Presentación Destacada' },
    text: { en: 'Interstellar Initiative 2022, New York — project on saliva-based disease detection.', es: 'Interstellar Initiative 2022, Nueva York — proyecto de detección de enfermedades a partir de saliva.' },
    date: '2022 · New York', image: nyAward, tag: { en: 'Award', es: 'Premio' },
  },
  {
    title: { en: 'Expo 2020 Dubai', es: 'Expo 2020 Dubái' },
    text: { en: 'Represented Mexico showcasing robotics and EEG-based technologies.', es: 'Representé a México mostrando robótica y tecnologías basadas en EEG.' },
    date: '2022 · Dubai', image: expoDubai, tag: { en: 'World Expo', es: 'Expo Mundial' },
  },
  {
    title: { en: 'Projects & mentoring at Mirai', es: 'Proyectos y mentoría en Mirai' },
    text: { en: 'Dozens of robotics and AI projects per year with students and researchers from around the world.', es: 'Decenas de proyectos de robótica e IA al año con estudiantes e investigadores de todo el mundo.' },
    date: '2022 – today · Osaka', image: miraiConference, tag: { en: 'Leadership', es: 'Liderazgo' },
  },
  {
    title: { en: 'Embassy of Mexico in Japan podcast', es: 'Podcast de la Embajada de México en Japón' },
    text: { en: 'Guest speaker on technology and innovation between Mexico and Japan.', es: 'Invitado para hablar de tecnología e innovación entre México y Japón.' },
    date: '2023', image: podcast, tag: { en: 'Media', es: 'Medios' },
  },
];

export interface Publication {
  title: string;
  venue: string;
  year: string;
  authors: string;
  url?: string;
  /** Short tag such as "Journal" or "Conference". */
  kind: L;
}

/** Newest first. Verified against Crossref/OpenAlex (ORCID 0009-0006-6398-0722). */
export const publications: Publication[] = [
  {
    title: 'EEG Cognitive-Load Control of a Robotic Suturing Trainer',
    venue: 'Mexican Robotics Congress (COMRob 2026)',
    year: '2026',
    authors: 'E. R. Hernández-Ríos, O. A. Domínguez-Ramírez',
    kind: { en: 'Conference', es: 'Congreso' },
  },
  {
    title: 'A Web-Based Multi-Robot Teleoperation Platform: Architecture, Implementation, and User Evaluation',
    venue: 'IEEE/SICE International Symposium on System Integration (SII 2026)',
    year: '2026',
    authors: 'E. R. Hernández-Ríos, C. Peñaloza',
    url: 'https://doi.org/10.1109/SII64115.2026.11404473',
    kind: { en: 'Conference', es: 'Congreso' },
  },
  {
    title: 'Adaptive VR-based Stroop Task Driven by Cognitive Engagement to Enhance Sustained Attention in Young Adults',
    venue: 'IEEE International Conference on Systems, Man, and Cybernetics (SMC 2025)',
    year: '2025',
    authors: 'A. Loaeza-Martínez, J. González-Díaz de León, E. R. Hernández-Ríos, V. Valencia, C. Peñaloza',
    url: 'https://doi.org/10.1109/SMC58881.2025.11343327',
    kind: { en: 'Conference', es: 'Congreso' },
  },
  {
    title: 'Deep Learning-Enhanced Motor Training: A Hybrid VR and Exoskeleton System for Cognitive–Motor Rehabilitation',
    venue: 'Bioengineering (MDPI)',
    year: '2025',
    authors: 'K. P. Acuña Luna, E. R. Hernández-Ríos, V. Valencia, C. Trenado, C. Peñaloza',
    url: 'https://doi.org/10.3390/bioengineering12040331',
    kind: { en: 'Journal', es: 'Revista' },
  },
  {
    title: 'Game-based Automated Neurotraining Platform for Bionic Prosthetic Placements',
    venue: 'IEEE International Conference on Cyborg and Bionic Systems (CBS 2024)',
    year: '2024',
    authors: 'E. Landa-Carpinteyro, E. R. Hernández-Ríos, C. Peñaloza',
    url: 'https://doi.org/10.1109/CBS61689.2024.10860322',
    kind: { en: 'Conference', es: 'Congreso' },
  },
  {
    title: 'Electromyography Acquisition System via Conductive Fabric for Wearable Skill Transfer Device Focused on Drum-Oriented Activities',
    venue: 'IEEE/SICE International Symposium on System Integration (SII 2024)',
    year: '2024',
    authors: 'X. Molina-Padilla, S. Martínez-Fuerte, E. R. Hernández-Ríos, C. Peñaloza',
    url: 'https://doi.org/10.1109/SII58957.2024.10417562',
    kind: { en: 'Conference', es: 'Congreso' },
  },
  {
    title: 'Human-to-Human Knowledge Transfer using Functional Electrical Stimulation',
    venue: 'IEEE International Conference on Systems, Man, and Cybernetics (SMC 2020)',
    year: '2020',
    authors: 'E. R. Hernández-Ríos, C. Peñaloza',
    url: 'https://doi.org/10.1109/SMC42975.2020.9283319',
    kind: { en: 'Conference', es: 'Congreso' },
  },
];

export const pubVenuesNote: L = {
  en: 'More manuscripts on neuroadaptive surgical training are in preparation.',
  es: 'Hay más manuscritos sobre entrenamiento quirúrgico neuroadaptativo en preparación.',
};

export type TalkKind = 'talk' | 'workshop' | 'program' | 'training';
export const talkKinds: Record<TalkKind, L> = {
  talk: { en: 'Talk', es: 'Charla' },
  workshop: { en: 'Workshop', es: 'Taller' },
  program: { en: 'Program', es: 'Programa' },
  training: { en: 'Teacher training', es: 'Capacitación docente' },
};

export interface Talk { date: L; kind: TalkKind; title: L; where: L; text: L; url?: string }

/** Talks, workshops and programs — newest first. */
export const talks: Talk[] = [
  {
    date: { en: 'Nov 18, 2026', es: '18 nov 2026' },
    kind: 'workshop',
    title: { en: 'AURA EEG: from raw signal to a calibrated cognitive-workload indicator', es: 'AURA EEG: de la señal cruda a un indicador calibrado de carga cognitiva' },
    where: { en: 'Mirai Innovation Research Institute, Osaka', es: 'Mirai Innovation Research Institute, Osaka' },
    text: { en: 'One-day hands-on workshop in five blocks: EEG basics, acquisition with AURA + LSL, an offline/online filtering pipeline, the frontal-theta / parietal-alpha index and a personal calibration that drives a live 0–100 gauge.', es: 'Taller práctico de un día en cinco bloques: fundamentos de EEG, adquisición con AURA + LSL, un pipeline de filtrado offline/online, el índice theta frontal / alfa parietal y una calibración personal que mueve un indicador en vivo de 0 a 100.' },
  },
  {
    date: { en: 'Nov 2026', es: 'nov 2026' },
    kind: 'program',
    title: { en: 'Workshop & project-development program', es: 'Programa de talleres y desarrollo de proyectos' },
    where: { en: 'Mirai Innovation, Osaka', es: 'Mirai Innovation, Osaka' },
    text: { en: 'Scheduled and taught a four-week program for visiting university students from Querétaro, Mexico, organised in teams that each built an EmFuTech prototype.', es: 'Organicé e impartí un programa de cuatro semanas para estudiantes universitarios de Querétaro, México, organizados en equipos que construyeron cada uno un prototipo de EmFuTech.' },
  },
  {
    date: { en: '2026', es: '2026' },
    kind: 'workshop',
    title: { en: 'IoT + Data: from sensor to decision', es: 'IoT + Datos: del sensor a la decisión' },
    where: { en: 'Universidad del Caribe, Cancún (remote)', es: 'Universidad del Caribe, Cancún (remoto)' },
    text: { en: 'Three-hour remote workshop for data-engineering and AI students: ESP32 + DHT22 in Wokwi → MQTT → anomaly detection in Colab → actuation.', es: 'Taller remoto de tres horas para estudiantes de ingeniería en datos e IA: ESP32 + DHT22 en Wokwi → MQTT → detección de anomalías en Colab → actuación.' },
    url: 'https://github.com/rafaelhernandezrios/taller-iot',
  },
  {
    date: { en: 'Oct 2026', es: 'oct 2026' },
    kind: 'talk',
    title: { en: 'EEG Cognitive-Load Control of a Robotic Suturing Trainer', es: 'EEG Cognitive-Load Control of a Robotic Suturing Trainer' },
    where: { en: 'Mexican Robotics Congress (COMRob 2026)', es: 'Congreso Mexicano de Robótica (COMRob 2026)' },
    text: { en: 'Paper presentation of the neuroadaptive laparoscopic suturing trainer developed in my PhD.', es: 'Presentación del artículo sobre el entrenador neuroadaptativo de sutura laparoscópica de mi doctorado.' },
  },
  {
    date: { en: 'Aug 2026', es: 'ago 2026' },
    kind: 'talk',
    title: { en: 'Neuroadaptive systems: EEG, robotics and virtual reality', es: 'Sistemas neuroadaptativos: EEG, robótica y realidad virtual' },
    where: { en: 'UAEH and CBTIS 222, Mexico', es: 'UAEH y CBTIS 222, México' },
    text: { en: 'Two talks on the same theme adapted to university and high-school audiences, combining my doctoral research with robotics and VR projects from Mirai.', es: 'Dos charlas con el mismo tema adaptadas a público universitario y de bachillerato, combinando mi investigación doctoral con proyectos de robótica y VR de Mirai.' },
  },
  {
    date: { en: '2026', es: '2026' },
    kind: 'training',
    title: { en: 'Educational robotics lab: teacher workshops', es: 'Laboratorio de robótica educativa: talleres docentes' },
    where: { en: 'School lab in Chihuahua, Mexico', es: 'Laboratorio escolar en Chihuahua, México' },
    text: { en: 'Authored the user manuals and a four-workshop teacher-training track (basic and advanced robotics, 3D printing, CanSat) plus a mentoring program for a newly equipped lab.', es: 'Elaboré los manuales de usuario y una ruta de capacitación docente de cuatro talleres (robótica básica y avanzada, impresión 3D, CanSat) más un programa de mentoría para un laboratorio recién equipado.' },
  },
  {
    date: { en: 'Recurring', es: 'Recurrente' },
    kind: 'workshop',
    title: { en: 'Intro to robotics: servo arms, kinematics and TCP/IP control', es: 'Introducción a la robótica: brazos con servos, cinemática y control por TCP/IP' },
    where: { en: 'Mirai Innovation, every student cohort', es: 'Mirai Innovation, en cada generación de estudiantes' },
    text: { en: 'Forward kinematics, simulation and programming of a servo arm, followed by networked control over TCP/IP; the base for the brain-controlled robot session.', es: 'Cinemática directa, simulación y programación de un brazo con servos, seguido de control en red por TCP/IP; la base para la sesión de robot controlado con el cerebro.' },
    url: 'https://github.com/rafaelhernandezrios/RoboticsWorkshop-Communication',
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { en: 'Neurotech & biosignals', es: 'Neurotecnología y bioseñales' }, items: ['EEG / BCI', 'Lab Streaming Layer', 'MNE', 'EMG', 'Eye tracking'] },
  { group: { en: 'Robotics', es: 'Robótica' }, items: ['ROS 2', 'Teleoperation', 'Haptics', 'Kinematics', 'Mobile robots', 'Pepper / NAOqi'] },
  { group: { en: 'XR', es: 'XR' }, items: ['Unity / C#', 'OpenXR', 'Meta Quest', 'A-Frame / WebXR', 'Exergaming'] },
  { group: { en: 'AI & data', es: 'IA y datos' }, items: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'LLM APIs', 'Statistics'] },
  { group: { en: 'Software', es: 'Software' }, items: ['TypeScript', 'React / Next.js', 'Node.js', 'MongoDB', 'Docker', 'GitHub Actions'] },
  { group: { en: 'Embedded', es: 'Embebidos' }, items: ['ESP32', 'Arduino', 'Raspberry Pi', 'STM32', 'MQTT', 'KiCad'] },
];
