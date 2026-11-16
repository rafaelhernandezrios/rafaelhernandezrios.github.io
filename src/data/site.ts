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

export interface Publication { title: string; venue: string; year: string; authors?: string; url?: string; note?: L }

/** Add papers here — newest first. `url` is optional (DOI, PDF, ResearchGate…). */
export const publications: Publication[] = [
  {
    title: 'EEG Cognitive-Load Control of a Robotic Suturing Trainer',
    venue: 'COMRob 2026 — Mexican Robotics Congress',
    year: '2026',
    authors: 'E. R. Hernández Ríos, O. A. Domínguez Ramírez',
  },
];

export const pubVenuesNote: L = {
  en: 'Earlier work presented at IEEE SMC and IAC (2022–2024).',
  es: 'Trabajos anteriores presentados en IEEE SMC e IAC (2022–2024).',
};

export const skills: { group: L; items: string[] }[] = [
  { group: { en: 'Neurotech & biosignals', es: 'Neurotecnología y bioseñales' }, items: ['EEG / BCI', 'Lab Streaming Layer', 'MNE', 'EMG', 'Eye tracking'] },
  { group: { en: 'Robotics', es: 'Robótica' }, items: ['ROS 2', 'Teleoperation', 'Haptics', 'Kinematics', 'Mobile robots', 'Pepper / NAOqi'] },
  { group: { en: 'XR', es: 'XR' }, items: ['Unity / C#', 'OpenXR', 'Meta Quest', 'A-Frame / WebXR', 'Exergaming'] },
  { group: { en: 'AI & data', es: 'IA y datos' }, items: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'LLM APIs', 'Statistics'] },
  { group: { en: 'Software', es: 'Software' }, items: ['TypeScript', 'React / Next.js', 'Node.js', 'MongoDB', 'Docker', 'GitHub Actions'] },
  { group: { en: 'Embedded', es: 'Embebidos' }, items: ['ESP32', 'Arduino', 'Raspberry Pi', 'STM32', 'MQTT', 'KiCad'] },
];
