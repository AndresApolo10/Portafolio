# Portafolio de Andrés Apolo

Sitio personal con React, TypeScript y Vite. Incluye presentación Full Stack, experiencia profesional, proyectos, contacto y descarga del CV moderno con foto.

## Desarrollo local

Requiere Node.js 22.12 o posterior.

```sh
npm ci
npm run dev
```

Abrir la dirección que imprime Vite. Para comprobar la versión de producción:

```sh
npm run build
npm run preview
```

El botón de sol/luna en la cabecera alterna entre modo claro y oscuro. La primera visita usa el modo claro; la preferencia se guarda localmente en el navegador y se aplica antes de mostrar la página.

## Actualizar contenido

- `src/Language.tsx`: traducciones al inglés y selector de idioma. El idioma inicial es inglés; el botón permite cambiar a español.
- `src/data/profile.ts`: datos, empresas, fechas, aportes profesionales y enlaces públicos de cada producto (web, App Store y Google Play).
- `src/App.tsx`: secciones, descripciones de proyectos y navegación.
- `src/components/ThemeToggle.tsx` y `src/theme.css`: selector de apariencia, persistencia local y paleta oscura.
- `src/styles.css`: estilos y adaptaciones a móvil, tablet y escritorio.
- `src/data/projects.ts`: los cinco proyectos, sus tecnologías, aportes y las fuentes de las capturas.
- `src/components/ProjectShowcase.tsx`: capturas visibles en marcos de celular y computadora, sin modales. Los aportes de Helper se despliegan dentro de su tarjeta.
- `src/components/PersonalGallery.tsx`: texto personal, fotos, carrusel manual y vista ampliada. No avanza automáticamente y respeta la preferencia de movimiento reducido.
- `public/images/brand/`: PNG transparente AA10 aprobado con las A entrelazadas, versión optimizada para la cabecera y el pie, y diseños anteriores conservados como referencia.
- `public/images/andres-apolo.jpg`: foto del perfil.
- `public/images/projects/`: dos capturas de Brightn y dos de De Una proporcionadas por Andrés, imagen oficial de JustFund, captura de la web pública de Cruz Verde y captura nativa de Helper con sesión demo y datos de ejemplo.
- `public/images/personal/`: versiones WebP de las fotos proporcionadas para la galería. La foto de infancia va al final. Las imágenes de origen no se modifican.
- `public/images/tech/`: logos SVG locales de Devicon, con su licencia incluida. React y React Native comparten el símbolo de React.
- `public/images/companies/`: logos de Brightn, Deuna y JustFund obtenidos de sus sitios públicos oficiales, y el icono de Cruz Verde de su ficha de Google Play.
- `public/images/ASSET-SOURCES.json`: procedencia de los nuevos recursos. Los iconos de Amplify, Lambda, AppSync y DynamoDB provienen del paquete oficial de arquitectura de AWS; Testing Library, Expo y Socket.IO usan Simple Icons, con su licencia incluida.
- `public/cv/Andres_Apolo_CV_ES.pdf` y `public/cv/Andres_Apolo_CV_EN.pdf`: CV moderno con foto en español e inglés. Todos los botones descargan automáticamente la versión del idioma seleccionado. El archivo anterior se conserva para enlaces antiguos.

La descarga del CV es un enlace directo al PDF del idioma seleccionado, con nombre ES o EN. Se incluyen enlaces a LinkedIn, X e Instagram. El contacto se realiza por correo; el sitio no almacena mensajes ni requiere backend.

## Publicación

El comando `npm run build` genera `dist/`. Las rutas relativas permiten servirlo en la raíz de un dominio o en el subdirectorio de un proyecto de GitHub Pages. La configuración pública y el dominio definitivo se decidirán después de revisar esta versión local. No se han creado recursos de AWS ni cambiado el despliegue actual de Netlify.

El HTML, JavaScript, CSS e imágenes de la versión anterior siguen disponibles en el historial de Git. `main.js`, `styles.css`, `Icons/`, `Imagenes/` y `downloads/` son archivos de esa versión; no forman parte de la compilación de React.
