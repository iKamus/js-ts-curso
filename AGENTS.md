# AGENTS.md

Repositorio de un **curso de aprendizaje** de JavaScript → TypeScript (15 módulos numerados). No es una app: cada módulo es autocontenido y se corre con Node desde su propia carpeta. No hay `package.json` en la raíz (solo dentro de `15-typescript/`).

## Regla más importante: no hacer la tarea por el alumno
- `ejemplos/*` son para **entender**: comentarios explicativos, código que corre y muestra salida.
- `ejercicios/*` son **plantillas incompletas** (`// completá acá`) que el alumno debe resolver. **No completar su código** ni alterar la consigna (comentario de arriba) ni el `Resultado esperado` (comentario de abajo, debe quedar idéntico palabra por palabra).
- Editar tono/prosa/comentarios está bien; cambiar lógica, valores o resultados esperados, no.

## Convención de tono (toda la prosa y comentarios)
Español rioplatense, voseo ("tenés", "fijate"), tono de profe de secundaria con analogías cotidianas (mercado, bondi, mochila), alentador, **sin emojis**. Respetala al tocar cualquier texto.

## Comandos
- Correr desde el directorio del módulo: `node ejemplos/XX.js` o `node ejercicios/ej-XX.js` (rutas relativas a la carpeta del módulo).
- `15-typescript` es el único módulo con build: `npm run build` (`tsc`, `strict: true`) compila `ejemplos/` y `ejercicios/` `.ts` → `dist/`. **`dist/` es generado: nunca editarlo**; solo editar las fuentes `.ts`.

## Quirks por módulo
- `10-modulos/`: usa extensiones `.cjs` y `.mjs` a propósito (CommonJS vs ES modules); respetar la extensión al correr (`node uso-cjs.cjs`).
- `13-node-archivos/`: los ejercicios usan `data/sample.txt` y `data/datos.json`; algunos ejemplos crean/borran archivos temporales al correr.
- `14-node-http/`: los ejercicios levantan servidores HTTP en el puerto 3000 que quedan corriendo hasta Ctrl+C; se prueban con `curl` (en Windows usar `curl.exe`).
- `12-async/`: `ejemplos/04-fetch.js` y `ejercicios/ej-05-fetch.js` requieren internet.

## Entorno
Windows + PowerShell: encadenar comandos con `;` o `if ($?)`, no con `&&`. No hay lint/test/typecheck global; la verificación es correr el script con `node` y comparar la salida.