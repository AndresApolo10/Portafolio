export type Project = {
  company: string;
  id: string;
  dates: string;
  kind: 'mobile' | 'desktop' | 'mixed';
  platform: string;
  address?: string;
  description: string;
  stack: string[];
  images: { file: string; caption: string; source?: string }[];
  contributions?: string[];
};

export const projects: Project[] = [
  {
    company: 'Brightn', id: 'brightn', dates: '2026 — Actualidad', kind: 'mobile', platform: 'MÓVIL + CLOUD',
    description: 'Aplicación móvil de bienestar. Desarrollo de interfaces e integración de verificación de identidad y consentimiento parental con AWS.',
    stack: ['React Native', 'TypeScript', 'Lambda', 'AppSync'],
    images: [
      { file: 'brightn-1.webp', caption: 'Bienvenida de Brightn. Captura proporcionada por Andrés.' },
      { file: 'brightn-2.webp', caption: 'Luma: journaling y reflexiones con IA. Captura proporcionada por Andrés.' },
    ],
  },
  {
    company: 'JustFund', id: 'justfund', dates: '2025 — 2026', kind: 'desktop', platform: 'WEB + BACKEND', address: 'justfund.us',
    description: 'Plataforma de gestión de fondos y postulaciones. Funcionalidades del portal, generación de reportes PDF y cambios en el backend.',
    stack: ['React', 'Express', 'Sequelize', 'MySQL'],
    images: [{ file: 'justfund-1.webp', caption: 'Vista de la plataforma publicada en el sitio oficial de JustFund.', source: 'https://www.justfund.us/' }],
  },
  {
    company: 'De Una', id: 'deuna', dates: '2024 — 2025', kind: 'mobile', platform: 'PAGOS + MÓVIL',
    description: 'Aplicación de pagos y cobros. Desarrollo del módulo CNB, interfaces de backoffice, integración de GraphQL y pruebas automatizadas.',
    stack: ['React Native', 'Redux Toolkit', 'REST & GraphQL', 'Jest & Testing Library'],
    images: [
      { file: 'deuna-1.webp', caption: 'Servicios de De Una. Captura proporcionada por Andrés.' },
      { file: 'deuna-2.webp', caption: 'Beneficios y promociones de De Una. Captura proporcionada por Andrés.' },
    ],
  },
  {
    company: 'Cruz Verde', id: 'cruzverde', dates: '2023 — 2024', kind: 'desktop', platform: 'WEB + MÓVIL', address: 'cruzverde.cl',
    description: 'Comercio electrónico y experiencia móvil para Cruz Verde Chile. Componentes reutilizables, integración del módulo wallet y trabajo con servicios NestJS.',
    stack: ['React', 'React Native', 'Storybook', 'NestJS'],
    images: [
      { file: 'cruzverde-web.webp', caption: 'Captura de la web pública de Cruz Verde.', source: 'https://www.cruzverde.cl/' },
    ],
  },
  {
    company: 'Helper', id: 'helper', dates: '2025', kind: 'mobile', platform: 'SERVICIOS + MÓVIL',
    description: 'Aplicación para conectar clientes con profesionales. Registro y perfiles, solicitudes, cotizaciones e integración de estados en tiempo real.',
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Expo', 'Socket.IO'],
    images: [
      { file: 'helper-demo.webp', caption: 'Pantalla de servicios de Helper en iPhone. Sesión demo con datos de ejemplo.' },
    ],
    contributions: [
      'Desarrollé flujos de registro, confirmación de cuenta y recuperación de contraseña con OTP.',
      'Integré solicitudes y cotizaciones con las APIs, y actualizaciones de estado en tiempo real mediante Socket.IO.',
      'Construí la edición de perfiles, fotos, documentos y servicios del profesional, además de componentes reutilizables.',
    ],
  },
];
