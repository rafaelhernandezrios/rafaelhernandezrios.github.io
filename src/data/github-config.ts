/**
 * Settings for the automatic "More on GitHub" list.
 * The list itself lives in github.json and is regenerated on every deploy by
 * scripts/fetch-github.mjs (the committed file is a fallback snapshot).
 */

/** Repos that never appear in the automatic list (client work, personal, copies…). */
export const excludeRepos = [
  'rafaelhernandezrios.github.io',
  'lerobot',
  'montessori',
  'deteccion-de-kevin',
  'TestGitHub',
  'ikan-planeacion',
  'agenda-profesional',
];

/** Optional hand-written descriptions, used when a README does not start with a clear sentence. */
export const descriptionOverrides: Record<string, { en: string; es: string }> = {
  'Relaxation-5GTEQS': { en: '360° relaxation experience with live EEG for lab and exhibition use.', es: 'Experiencia de relajación 360° con EEG en vivo para laboratorio y exhibiciones.' },
  RelaxationExperience: { en: 'PyQt5 hub that orchestrates a VR relaxation app and EEG processing (MNE + LSL).', es: 'Hub en PyQt5 que orquesta una app de relajación en VR y el procesamiento de EEG (MNE + LSL).' },
  'pest-detection': { en: 'Pest detection system with YOLOv8 and a Flask web interface.', es: 'Sistema de detección de plagas con YOLOv8 e interfaz web en Flask.' },
  'gpt-inventory-detection': { en: 'Can and bottle counting with GPT Vision.', es: 'Conteo de latas y botellas con GPT Vision.' },
  'teleoperation-IKAN': { en: 'Teleoperation interface for the IKAN program robots.', es: 'Interfaz de teleoperación para los robots del programa IKAN.' },
  'Laparoscopy-training': { en: 'Unity laparoscopic suture trainer with haptics and EEG.', es: 'Entrenador de sutura laparoscópica en Unity con háptica y EEG.' },
  easycansat: { en: 'Simplified CanSat telemetry tools.', es: 'Herramientas simplificadas de telemetría para CanSat.' },
  'hito-stadistics': { en: 'Privacy-first people analytics for a common room: on-device processing, only JSON events are stored.', es: 'Analítica de personas con privacidad primero para una sala común: procesamiento en el dispositivo, solo se guardan eventos JSON.' },
  ANUIES: { en: 'ANUIES × Mirai Lab integrations for the Aura, Wavex and J-CanSat devices.', es: 'Integraciones ANUIES × Mirai Lab para los dispositivos Aura, Wavex y J-CanSat.' },
};
