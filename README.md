# Curso interactivo: JavaScript → TypeScript

Una **app web local** para aprender JavaScript y TypeScript desde cero, con teoría completa, ejercicios que se ejecutan de verdad y validación automática con feedback.

- **58 lecciones** en **5 módulos**: Fundamentos · Métodos de arrays y strings · DOM y la página · TypeScript · Buenas prácticas.
- Cada lección: teoría en formato diccionario (keywords → sintaxis → métodos → errores comunes → buenas prácticas) + **ejemplos ejecutables** + **ejercicios con verificación automática**.
- Los ejercicios se ejecutan en un **sandbox aislado** (iframe) y se corrigen solos: "Esperado X / Obtuviste Y".
- Los ejercicios de TypeScript se transpilan en el navegador (estricto) y se ejecutan igual que los de JavaScript.
- Progreso guardado en `localStorage`, tema claro/oscuro, trivia por módulo y mini proyectos integradores (incluido un proyecto final que combina todo el curso).
- Funciona **100% offline** (CodeMirror y TypeScript empaquetados localmente en `vendor/`). Sin backend, sin servidores externos.

## Requisitos

- Node.js (para servir la app; la app en sí solo necesita un navegador moderno).
- Una sola instalación inicial: `npm install` (descarga dependencias de desarrollo y genera `vendor/`).

## Cómo abrir el curso

```powershell
npm install     # solo la primera vez
npm start       # abre http://localhost:3000 (o el puerto que muestre)
```

**Nota:** Si al abrir el curso no ves tu progreso guardado, cierra el navegador y asegúrate de que no haya otro servidor `npm start` corriendo en el mismo puerto. El progreso se guarda por-origen (puerto específico).
npm start       # sirve la app en http://localhost:3000
```

Abrí `http://localhost:3000` en tu navegador.

> La app usa ES modules: no la abras con doble clic sobre `index.html` (doble clic = `file://` y los módulos no cargan). Siempre por servidor.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm start` | Sirve la app con `serve .` en `http://localhost:3000` |
| `npm run qa` | Valida estructura y ejecuta las 189 soluciones contra sus tests (`node tools/qa.mjs`) |
| `npm run vendor` | Regenera `vendor/` (bundle de CodeMirror + TypeScript) a partir de `node_modules` |
| `node tools/smoke.mjs` | Smoke test del motor de la app (sidebar + contenido renderizan) |

## Estructura del proyecto

```
├── index.html              → Entrada: sidebar + contenido + sandbox (iframe)
├── css/styles.css          → Estilos con tema claro/oscuro
├── js/
│   ├── main.js             → Router por hash, progreso, ejecutar/verificar
│   ├── render.js           → Render de sidebar, lecciones, ejemplos, ejercicios
│   ├── editor.js           → Editor CodeMirror 6
│   ├── runner.js           → Sandbox: transpila TS, ejecuta en iframe, captura console, corre tests
│   ├── state.js            → Progreso y tema en localStorage
│   └── content/
│       ├── indice.js       → Registro del curso (5 módulos, 58 lecciones)
│       └── modulo-01/ … modulo-05/   → Una lección por archivo
├── vendor/                 → Generado: codemirror.bundle.js + typescript.js (offline)
└── tools/
    ├── qa.mjs + qa-lib.mjs → QA: estructura + ejecución de soluciones (jsdom + vm + tsc)
    ├── build-vendor.mjs    → Genera vendor/ con esbuild
    └── smoke.mjs           → Smoke test jsdom de main.js
```

## Cómo funciona el sandbox

Cada ejecución se hace en un iframe aislado (`sandbox="allow-scripts"`): el código del alumno corre sin acceso a la página real. El harness captura `console.*`, formatea los valores (objetos con `JSON.stringify`, bigint con `n`), simula `localStorage`/`sessionStorage`, inyecta el HTML base de la lección y ejecuta los tests dentro del sandbox; los resultados vuelven por `postMessage`. En TypeScript, primero se transpila con el TypeScript local (modo estricto, ES2020) y los errores de compilación se muestran como feedback.

## Cómo agregar o editar contenido

Cada lección es un archivo que exporta un objeto con `palabrasClave`, `secciones`, `ejemplos` y `ejercicios` (con `tests` de tipos `output`, `valor`, `dom` y `codigo`). Las soluciones no se renderizan: existen solo para el QA. Después de editar, corré `npm run qa` y `node tools/smoke.mjs`.

Ver `AGENTS.md` para el esquema completo de lección, tipos de tests y convenciones de contenido (español neutro, tono docente, sin emojis).