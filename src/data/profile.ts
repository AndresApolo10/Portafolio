export const profile = {
  "name": "Andrés Apolo",
  "title": "Full Stack Developer",
  "focus": "React · React Native · TypeScript · Node.js · AWS",
  "location": "Machala, Ecuador",
  "email": "andres-10a@hotmail.com",
  "phone": "+593 995981031",
  "github": "https://github.com/AndresApolo10",
  "linkedin": "https://www.linkedin.com/in/andr%C3%A9s-apolo-mu%C3%B1oz-42603924a/",
  "x": "https://x.com/AndresApolo10",
  "instagram": "https://www.instagram.com/andresapolo10/",
  "portfolio": "https://portafolio-andres-apolo.netlify.app/",
  "summary": "Desarrollador Full Stack con experiencia en aplicaciones web y móviles con React, React Native y TypeScript, y en servicios backend con Node.js. Trabajo con APIs REST y GraphQL, bases de datos relacionales y servicios serverless de AWS. He participado en productos de pagos, comercio electrónico, gestión de fondos y bienestar, desarrollando interfaces, lógica de negocio, integraciones y pruebas automatizadas.",
  "experience": [
    {
      "company": "Brightn",
      "role": "Full Stack Developer",
      "dates": "Julio 2026 - Actualidad",
      "start": "2026-07",
      "end": null,
      "context": "Aplicación móvil de bienestar con React Native y backend serverless en AWS.",
      "bullets": [
        "Implementé flujos de verificación de identidad y consentimiento parental, conectando la aplicación con funciones AWS Lambda y resolutores de AppSync.",
        "Desarrollé interfaces de membresías, consentimientos y guías de uso con React Native y TypeScript.",
        "Incorporé límites de intentos de verificación y validaciones de titularidad, junto con ajustes de permisos y configuración para correos de consentimiento.",
        "Corregí problemas de navegación, notificaciones y visualización; gestioné versiones y generé builds para iOS y Android."
      ]
    },
    {
      "company": "JustFund",
      "role": "Full Stack Developer",
      "dates": "Septiembre 2025 - Junio 2026",
      "start": "2025-09",
      "end": "2026-06",
      "context": "Plataforma web para gestionar fondos, postulaciones y procesos de evaluación.",
      "bullets": [
        "Desarrollé funcionalidades en React y TypeScript para perfiles de postulantes, filtros, selección masiva y guardado automático de evaluaciones.",
        "Implementé y ajusté la generación de reportes PDF en el backend Node.js, con plantillas de postulaciones, respuestas contextuales y numeración de páginas.",
        "Actualicé el esquema de invitaciones para un flujo basado en correo electrónico mediante migraciones de base de datos.",
        "Corregí validaciones de formularios, recordatorios y estados de las pantallas de revisión, trabajando sobre un backend Express con Sequelize y MySQL."
      ]
    },
    {
      "company": "De Una",
      "role": "Front-End Developer",
      "dates": "Agosto 2024 - Agosto 2025",
      "start": "2024-08",
      "end": "2025-08",
      "context": "Aplicación móvil y backoffice del módulo CNB.",
      "bullets": [
        "Desarrollé funcionalidades del módulo CNB en la aplicación móvil, con Redux Toolkit para la gestión del estado e integración de APIs GraphQL.",
        "Construí interfaces modulares del backoffice de comisiones CNB dentro de una arquitectura de microfrontends.",
        "Implementé pruebas unitarias con Jest y pruebas de integración con Mock Service Worker, y participé en revisiones de código y coordinación entre frontend, backend y producto."
      ]
    },
    {
      "company": "Cruz Verde",
      "role": "Front-End Developer",
      "dates": "2023 - Abril 2024",
      "start": "2023",
      "end": "2024-04",
      "context": "Proyectos web y móviles de Cruz Verde Chile.",
      "bullets": [
        "Desarrollé funcionalidades del portal de compra y de la aplicación wallet con React y React Native, incluyendo la integración del módulo wallet en la app.",
        "Creé y mantuve componentes de diseño reutilizables con React, React Native, Vite y Storybook.",
        "Participé en implementación y mantenimiento de microservicios con NestJS y arquitectura CQRS, con monitoreo en Sentry y AWS CloudWatch.",
        "Desarrollé pruebas con Testing Library, Cypress y MSW, e integré herramientas de analítica y Firebase."
      ]
    }
  ],
  "education": [
    {
      "institution": "Academlo",
      "course": "Desarrollador Web Full Stack",
      "dates": "2022"
    },
    {
      "institution": "Universidad Católica de Santiago de Guayaquil",
      "course": "Estudios en Ingeniería en Sistemas",
      "dates": "2009 - 2016"
    }
  ],
  "languages": [
    "Español nativo",
    "Inglés A2"
  ],
  "updated": "2026-10-18"
} as const;


export const companyLinks: Record<string, readonly { label: string; href: string }[]> = {
  Brightn: [
    { label: 'Sitio web', href: 'https://www.brightn.app/' },
    { label: 'App Store', href: 'https://apps.apple.com/us/app/brightn-ai-wellness-plans/id1673747865' },
    { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.brightn.prod' },
  ],
  JustFund: [
    { label: 'Sitio web', href: 'https://www.justfund.us/' },
  ],
  'De Una': [
    { label: 'Sitio web', href: 'https://www.deuna.ec/' },
    { label: 'App Store', href: 'https://apps.apple.com/us/app/deuna/id1490185584' },
    { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.appdeuna.wallet' },
  ],
  'Cruz Verde': [
    { label: 'Sitio web', href: 'https://www.cruzverde.cl/' },
    { label: 'App Store', href: 'https://apps.apple.com/cl/app/farmacias-cruz-verde-chile/id1592134658' },
    { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.cruzverde.cl.ecommerce' },
  ],
};
