# AGENTS.md

Repositorio de un **curso de aprendizaje** de JavaScript → TypeScript (15 módulos numerados). No es una app: cada módulo es autocontenido y se corre con Node desde su propia carpeta. No hay `package.json` en la raíz (solo dentro de `15-typescript/`).

## Regla más importante: no hacer la tarea por el alumno
- `ejemplos/*` son para **entender**: comentarios explicativos, código que corre y muestra salida.
- `ejercicios/*` son **plantillas incompletas** (`// completá acá`) que el alumno debe resolver. **No completar su código** ni alterar la consigna (comentario de arriba) ni el `Resultado esperado` (comentario de abajo, debe quedar idéntico palabra por palabra).
- **Tip**: se pueden agregar pistas/tips en la consigna del ejercicio para orientar al alumno sin dar la solución.
- `proyecto/` contiene el **mini proyecto integrador** del módulo (al final, para asentar lo aprendido). Tiene su propio README con consigna, requisitos, pasos y resultado esperado.
- `soluciones/` contiene las soluciones de ejercicios y proyectos. **Nunca editarla** — existe solo para referencia del instructor. Está en `.gitignore` y no se commitea.
- Editar tono/prosa/comentarios está bien; cambiar lógica, valores o resultados esperados, no.

## Formato del README por módulo — Diccionario por keyword
El `README.md` de cada módulo explica los conceptos en formato **diccionario por keyword**. Cada keyword/concepto tiene esta sección:

```markdown
## keyword
- **Qué es**: definición en criollo con analogía cotidiana
- **Cuándo usarlo**: para qué sirve y cuándo elegirlo
- **Sintaxis**: firma + ejemplo mínimo
- **Métodos/funciones internos**: tabla con método → qué hace → ejemplo → resultado
- **Errores comunes**: trampas típicas
- **Buenas prácticas**: cómo codificarlo bien
```

No es un README narrativo: es una **referencia viva** que el alumno puede consultar después de terminar el módulo.

## Convención de tono (toda la prosa y comentarios)
Español neutro, tono de profe de secundaria con analogías cotidianas (mercado, bondi, mochila), entretenido de leer, **sin emojis**. No usar voseo ("tenés" → "tienes"), ni modismos regionales ("che", "yapa", "tranqui"). Respetalo al tocar cualquier texto.

## Estructura de cada módulo
```
XX-tema/
├── README.md          → Teoría diccionario por keyword (referencia viva)
├── ejemplos/          → Scripts que corren y muestran cada concepto en acción
├── ejercicios/        → Plantillas con consigna + tips + resultado esperado
├── soluciones/        → Soluciones de ejercicios y proyecto (EN .gitignore)
└── proyecto/          → Mini proyecto integrador
    ├── README.md      → Consigna, requisitos, pasos, tips, resultado esperado
    └── archivo(s)     → Plantilla base incompleta
```

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