# AGENTS.md

**App web local interactiva** para un curso de JavaScript → TypeScript (58 lecciones, 5 módulos). No es una app de producción: el alumno la abre en el navegador, lee la teoría y resuelve ejercicios que se ejecutan en un sandbox con validación automática.

## Regla más importante: no hacer la tarea por el alumno
- Los ejercicios (`ejercicios` en cada lección) son para que el alumno los resuelva en el editor de la app. El código de ejemplo vive en las secciones y ejemplos de la lección (teoría visible).
- `solucion` es el código correcto de cada ejercicio: **no se renderiza en la UI**, solo lo usa el QA. Se puede editar si la consigna cambia, pero no se debe "simplificar" para que el alumno la adivine.
- Los tests definen el resultado esperado: editar una consigna implica actualizar los tests y la solución juntos.

## Estructura
```
index.html              → Entrada: sidebar + contenido + iframe sandbox
css/styles.css          → Tema claro/oscuro
js/main.js              → Router por hash, ejecutar/verificar, progreso
js/render.js            → Render de sidebar y lecciones
js/editor.js            → CodeMirror 6
js/runner.js            → Sandbox + transpile TS + tests en iframe
js/state.js             → Progreso y tema en localStorage
js/content/indice.js    → Registro del curso (5 módulos)
js/content/modulo-XX/   → Una lección por archivo (export default objeto)
vendor/                 → GENERADO (codemirror.bundle.js, typescript.js): nunca editar
tools/qa.mjs + qa-lib.mjs  → QA: estructura + soluciones (jsdom + vm + tsc)
tools/build-vendor.mjs     → Regenera vendor/ (esbuild)
tools/smoke.mjs            → Smoke test jsdom del motor
```

## Comandos
- `npm start` → sirve la app en `http://localhost:3000` (los ES modules exigen HTTP; doble clic en index.html NO funciona).
- `npm run qa` → valida estructura de todas las lecciones y ejecuta las 189 soluciones contra sus tests. **Correrlo tras cualquier cambio de contenido.**
- `npm run vendor` → regenera `vendor/` (solo si cambian las dependencias de editor).
- `node tools/smoke.mjs` → smoke test de main.js (sidebar + contenido renderizan).
- Windows + PowerShell: encadenar con `;` o `if ($?)`, nunca `&&`.

## Esquema de lección (js/content/modulo-XX/YY-*.js)
```js
export default {
  id: 'mX-lNN',              // único; coincide con la numeración
  numero: NN,
  titulo: '...',
  nivel: 'Fácil' | 'Medio' | 'Dificil',
  lenguaje: 'javascript',    // 'typescript' en el módulo 4 y el proyecto final
  htmlBase: null,            // HTML inyectado en document.body antes de correr el código (lecciones de DOM)
  esProyecto: true,          // solo en lecciones de mini proyecto
  palabrasClave: [{ termino, definicion }],   // 6-8 keywords
  secciones: [{ titulo, parrafos?, codigo?, salida?, tabla?: {columnas, filas}, lista? }],
  ejemplos: [{ titulo, codigo, salida, explicacion }],
  proyecto: { objetivos: [...] },   // solo con esProyecto
  ejercicios: [{ titulo, dificultad, consigna[], pasos[], codigoInicial, pista, tests[], solucion }]
}
```
- 1-4 ejercicios por lección (3 en los mini proyectos, en piezas 1/2/3 autocontenidas).
- `solucion` SIEMPRE autocontenida (declara sus propias variables) y con salida exacta que cumple los tests.

## Tipos de test
| Tipo | Formato | Qué valida |
| --- | --- | --- |
| `output` | `{ tipo:'output', nombre, esperado:['línea 1', ...], mensaje }` | Líneas exactas de console (una por log; objetos con JSON.stringify, bigint con `n`) |
| `valor` | `{ tipo:'valor', nombre, expr, esperado, mensaje }` | Expresión evaluada en el contexto (igualdad estricta; arrays/objetos vía JSON.stringify) |
| `dom` | `{ tipo:'dom', nombre, verificador, mensaje }` | Cuerpo de función que devuelve `{ paso, esperado, obtenido }` |
| `codigo` | `{ tipo:'codigo', nombre, explicacion, requerido?:[regex], prohibido?:[regex], mensaje }` | Regex sobre el código fuente del alumno (para buenas prácticas y tipos) |

Reglas de tests: las regex de `codigo` deben validar la SOLUCIÓN correcta (que pasa) y rechazar la versión "mala" típica; cuidado con regex demasiado amplias que prohíban lo que la propia solución usa.

## Reglas del sandbox (runner.js y tools/qa-lib.mjs replican el mismo motor)
- El código corre como **script clásico** (no module): nada de `import`/`export` en soluciones, nada de `await` top-level (envolver async en una función llamada).
- Lecciones de fetch: los tests NO dependen de red (en QA el fetch rechaza siempre).
- `Event` con `new Event("click")` NO burbujea por defecto: para delegación usar `{ bubbles: true }`.
- `localStorage`/`sessionStorage` simulados (mismos métodos que el real). Persisten por ejecución.
- Tests `output` comparan TODOS los niveles de log (log/warn/error): ordenar los tests para que los que generan logs extra vayan después.
- En TS: las expr de tests `valor` se evalúan sobre el JS transpilado; los `catch` deben tipar `(error as Error)` por `useUnknownInCatchVariables` (strict).

## Convenciones de contenido
- Español neutro (tuteo: "tienes", "puedes", "calcula"), tono docente amigable con analogías cotidianas (mercado, tienda, transporte). **Sin emojis.**
- Teoría completa por keyword: qué es + analogía, cuándo usarlo, sintaxis con salida, tabla de métodos cuando aplique, errores comunes, buenas prácticas.
- Salidas de teoría y ejemplos REALES: objetos como `{"clave":...}`, arrays como `["a","b"]`.
- Numeración: M1 = 1-13 (mini 13), M2 = 14-26 (mini 26), M3 = 27-31 (mini 31), M4 = 32-46 (mini 46), M5 = 47-57 (proyecto final 57). Total 58 lecciones, 189 ejercicios.
- Archivos de lección: `js/content/modulo-XX/01-....js` en orden; id `mX-lNN` coincide con `numero`.

## Entorno
Windows + PowerShell. Sin lint/test global: la verificación es `npm run qa` + `node tools/smoke.mjs` + prueba manual en navegador (`npm start`).