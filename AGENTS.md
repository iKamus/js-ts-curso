# AGENTS.md

Repositorio de un **curso de aprendizaje** de JavaScript → TypeScript (15 módulos numerados). No es una app: cada módulo es autocontenido y se corre con Node desde su propia carpeta. No hay `package.json` en la raíz (solo dentro de `15-typescript/`).

## Regla más importante: no hacer la tarea por el alumno
- Los **ejemplos están integrados en el `README.md`** de cada módulo: bloques de código explicados que muestran conceptos y salidas esperadas. No hay carpeta `ejemplos/` separada.
- `ejercicios/*` son **plantillas incompletas** (`// completa aquí`) que el alumno debe resolver. **No completar su código** ni alterar la consigna ni el `Resultado esperado` (debe quedar idéntico palabra por palabra).
- **Tips**: se deben incluir pistas/tips en la consigna del ejercicio para orientar al alumno sin darle la solución.
- `proyecto/` contiene el **mini proyecto integrador** del módulo (al final, para asentar lo aprendido). Tiene su propio README con consigna, requisitos, pasos y resultado esperado.
- `soluciones/` contiene las soluciones de ejercicios y proyectos. **Nunca editarla ni borrarla** — existe solo para referencia del instructor. Está en `.gitignore` y no se commitea.
- Editar tono/prosa/comentarios está bien; cambiar lógica, valores o resultados esperados, no.

## Formato del README por módulo — Diccionario por keyword
El `README.md` de cada módulo explica los conceptos en formato **diccionario por keyword**. Cada keyword/concepto tiene esta sección:

```markdown
## keyword
- **Qué es**: definición en lenguaje sencillo con analogía cotidiana
- **Cuándo usarlo**: para qué sirve y cuándo elegirlo
- **Sintaxis**: firma + ejemplo mínimo con salida esperada
- **Métodos/funciones internos**: tabla con método → qué hace → ejemplo → resultado
- **Errores comunes**: trampas típicas y cómo evitarlas
- **Buenas prácticas**: cómo codificarlo bien
```

No es un README narrativo: es una **referencia viva y completa** con todos los ejemplos integrados que el alumno puede consultar en cualquier momento.

## Convención de tono (toda la prosa y comentarios)
Español neutro (tuteo estándar: "tienes", "puedes", "calcula", "escribe"), tono de docente amigable y pedagógico con analogías cotidianas (mercado, transporte, mochila), entretenido de leer, **sin emojis**. Prohibido el voseo ("tenés" → "tienes", "hacé" → "haz", "completá" → "completa") y los modismos regionales ("che", "laburo", "bondi", "tranqui").

## Estructura de cada módulo
```
XX-tema/
├── README.md          → Teoría diccionario por keyword con ejemplos integrados
├── ejercicios/        → Plantillas con consigna + tips + resultado esperado
├── soluciones/        → Soluciones de ejercicios y proyecto (EN .gitignore)
└── proyecto/          → Mini proyecto integrador
    ├── README.md      → Consigna, requisitos, pasos, tips, resultado esperado
    └── archivo(s)     → Plantilla base incompleta
```

## Comandos
- Correr desde el directorio del módulo: `node ejercicios/ej-XX.js` (rutas relativas a la carpeta del módulo).
- `15-typescript` es el único módulo con build: `npm run build` (`tsc`, `strict: true`) compila `ejercicios/` y `proyecto/` `.ts` → `dist/`. **`dist/` es generado: nunca editarlo**; solo editar las fuentes `.ts`.

## Quirks por módulo
- `10-modulos/`: usa extensiones `.cjs` y `.mjs` a propósito (CommonJS vs ES modules); contiene `lib/` para los módulos importados.
- `13-node-archivos/`: los ejercicios usan `data/sample.txt` y `data/datos.json`.
- `14-node-http/`: los ejercicios levantan servidores HTTP en el puerto 3000 que quedan corriendo hasta Ctrl+C; se prueban con `curl` (en Windows usar `curl.exe`).
- `12-async/`: `ejercicios/ej-05-fetch.js` requiere conexión a internet.

## Entorno
Windows + PowerShell: encadenar comandos con `;` o `if ($?)`, no con `&&`. No hay lint/test/typecheck global; la verificación es correr el script con `node` y comparar la salida.