# Curso interactivo: JavaScript → TypeScript

Una **app web local** para aprender JavaScript y TypeScript desde cero, con teoría completa, ejercicios que se ejecutan de verdad y validación automática con feedback.

- **58 lecciones** en **5 módulos**: Fundamentos · Métodos de arrays y strings · DOM y la página · TypeScript · Buenas prácticas.
- Cada lección: teoría en formato diccionario (keywords → sintaxis → métodos → errores comunes → buenas prácticas) + **ejemplos ejecutables** + **ejercicios con verificación automática**.
- Los ejercicios se ejecutan en un **sandbox aislado** (iframe) y se corrigen solos: "Esperado X / Obtuviste Y".
- Los ejercicios de TypeScript se transpilan en el navegador (estricto) y se ejecutan igual que los de JavaScript.
- Progreso guardado en `localStorage`, tema claro/oscuro, trivia por módulo y mini proyectos integradores (incluido un proyecto final que combina todo el curso).
- Funciona **100% offline** (CodeMirror y TypeScript empaquetados localmente en `vendor/`). Sin backend, sin servidores externos.

## Requisitos

- Node.js con pnpm (para servir la app; la app en sí solo necesita un navegador moderno).

## Cómo ejecutar el curso

```powershell
pnpm install     # solo la primera vez
pnpm start       # sirve la app en http://localhost:3000
```

Abre `http://localhost:3000` en tu navegador.

> La app usa ES modules: no la abras con doble clic sobre `index.html` (doble clic = `file://` y los módulos no cargan). Siempre por servidor.

El progreso y el tema se guardan por URL: usa siempre la misma dirección (`http://localhost:3000`) para ver tu progreso.
