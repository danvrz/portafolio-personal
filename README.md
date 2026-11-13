# Daniel Vertiz — Portafolio personal

Primera versión local del portafolio, creada a partir de la plantilla oficial `react` de Vite. Usa React, JavaScript y CSS. No requiere backend, base de datos ni cuentas externas.

## Empezar en VS Code

Abre la carpeta `daniel-vertiz` con **Archivo → Abrir carpeta**. Abre una terminal integrada con **Terminal → Nueva terminal**. Necesitas Node.js compatible con Vite (22.12+ o 24 LTS) y npm. En el entorno de creación se verificaron Node 24.22.1, npm 11.9.0, Git 2.52.0 y Chromium.

```bash
npm install
npm run dev
```

La instalación solo se necesita la primera vez o cuando cambian las dependencias. Abre la dirección que imprime Vite, normalmente http://localhost:5173. Si el puerto está ocupado, usa el que indique la terminal. Para detener el servidor, pulsa **Ctrl+C** en esa misma terminal. No hace falta cerrar VS Code.

En un entorno remoto o de nube, `localhost` corresponde al servidor remoto: usa su vista previa o reenvío de puertos. Los archivos de este proyecto están en `/workspace/daniel-vertiz`; para ejecutarlos en tu computadora debes tener una copia local de esa carpeta (sin `node_modules`, `dist` ni `.npm-cache`).

## Cómo está organizada la aplicación

- `index.html`: documento base, idioma, descripción e icono.
- `src/main.jsx`: monta React dentro de la página.
- `src/App.jsx`: elige la vista según la URL y actualiza título, desplazamiento y foco al navegar.
- `src/pages/`: Inicio, Proyectos, detalle, Sobre mí, Contacto y página desconocida.
- `src/components/Layout.jsx`: encabezado, navegación y pie compartidos.
- `src/components/ProjectCard.jsx`: tarjeta reutilizable para cada proyecto.
- `src/components/ScientificVisual.jsx`: ilustraciones SVG conceptuales, sin datos reales.
- `src/data/projects.js`: catálogo y contenido de los proyectos.
- `src/data/profile.js`: especialidades y marcadores de contacto.
- `src/index.css`: tipografía, paleta, espacios, componentes y adaptación a pantallas pequeñas.
- `public/favicon.svg`: icono de la pestaña.
- `package.json`: dependencias y comandos; `package-lock.json`: versiones instaladas reproducibles.
- `vite.config.js`: integración oficial de React con Vite.
- `.gitignore`: evita incluir dependencias, compilación y caché al usar Git más adelante.
- `AGENTS.md`: convenciones para futuras sesiones de Codex.

Las rutas usan fragmentos (`#/proyectos`, `#/sobre-mi`, `#/contacto` y `#/proyectos/movilidad-ecobici`). Esto permite abrir detalles y usar atrás/adelante sin añadir una librería de rutas ni configurar un servidor.

## Tu primera modificación

1. Abre `src/pages/Home.jsx`.
2. Busca «Soy Daniel Vertiz» o el texto que quieras cambiar.
3. Edita únicamente el texto entre etiquetas, conserva la estructura y guarda con **Ctrl+S** (Cmd+S en macOS).
4. Vite actualizará el navegador automáticamente mientras `npm run dev` esté activo.

Para editar colores y espacios, abre `src/index.css`. La tipografía se carga desde Google Fonts, con Arial y Georgia como alternativas si no hay conexión.

## Agregar un proyecto

En `src/data/projects.js`, duplica un objeto del arreglo `projects` y cambia:

- `slug`: identificador sin espacios, único y preferiblemente sin acentos.
- `title`, `category`, `description`: título, filtro y presentación.
- `tools`: etiquetas de herramientas propuestas.
- `visual`: `mobility`, `waves` o `statistics` para reutilizar una ilustración.
- `question`, `approach` (lista), `next`: contenido de la página de detalle.

La tarjeta, el filtro y el detalle se generan automáticamente. Todos se marcan actualmente como **Ejemplo · En desarrollo** en `ProjectCard.jsx` y `ProjectDetail`. Cuando exista un proyecto real, habrá que actualizar esa presentación y documentar sus fuentes y resultados. No incluyas resultados sin verificar.

## Completar contacto y trayectoria

En `src/data/profile.js`, reemplaza `url: null` por tus enlaces confirmados, entre comillas. Para correo usa `mailto:tu-direccion-real`. Hasta entonces solo se muestran marcadores, sin enlaces ficticios. La formación y experiencia se completan en `src/pages/About.jsx`.

## Verificación

```bash
npm run build
npm run preview
```

`build` genera el sitio estático en `dist`. `preview` permite revisar esa compilación localmente (normalmente http://localhost:4173); no publica nada. Detén también este servidor con Ctrl+C. `npm run lint` ejecuta el analizador incluido en la plantilla oficial.

Al revisar: navega por las cuatro secciones, abre los tres detalles, filtra proyectos, usa atrás/adelante, recarga un detalle y prueba una ventana estrecha. Usa Tab para comprobar enlaces, filtros y foco visible.

## Alcance de esta fase

Los tres proyectos son propuestas de demostración sin análisis ejecutados ni resultados. La trayectoria y los contactos están pendientes de información confirmada. No se creó repositorio remoto, no se hizo commit y no se publicó la web. La fase de GitHub comienza después de aprobar el diseño.

## Estado de validación de esta entrega

Compilación y analizador de código correctos. La revisión en navegador del entorno remoto quedó pendiente: la infraestructura de vista previa no pudo conectar el puerto 4173 (`relay ... timed out waiting for relay readiness`). Esto no verifica ni descarta problemas visuales; revisa la aplicación localmente antes de aprobar el diseño.
