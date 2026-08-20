# Curso JavaScript → TypeScript

¡Bienvenido! Aquí vas a aprender JavaScript desde cero, de a poco y paso a paso, y al final del camino te vas a encontrar con TypeScript. Todo se corre con **Node.js** en la terminal, así que no necesitas nada más que una computadora con ganas de aprender.

Piénsalo como un cuaderno de clases: cada tema tiene su explicación en formato referencia (keyword por keyword, con sintaxis, métodos, ejemplos explicados, errores comunes y buenas prácticas), ejercicios prácticos para ejercitar con la ayuda de tips, y un mini proyecto integrador al final para asentar todo lo que aprendiste. Si algo no sale a la primera, no te preocupes: **equivocarse es parte de aprender**.

## Requisitos
- Node.js v24+ (ya lo tienes instalado). Verifica con: `node --version`

## Cómo usar el curso
1. Entra a un módulo (por ejemplo `01-fundamentos/` o `02-control-flujo/`).
2. Lee su `README.md`: ahí está la referencia completa con teoría y ejemplos de código integrados. Consúltalo siempre que tengas dudas.
3. Resuelve los ejercicios en `ejercicios/`. Cada archivo tiene la consigna con pasos detallados y tips que te orientan sin darte la solución directa. El resultado esperado está al final del comentario para que puedas comparar.
4. Ejecuta tu ejercicio desde la carpeta del módulo con: `node ejercicios/ej-XX.js`.
5. Cuando termines los ejercicios, resuelve el **mini proyecto** en `proyecto/`: un desafío integrador que une todo lo aprendido en el módulo. Lee `proyecto/README.md` para ver los requisitos.
6. Las soluciones de ejercicios y proyectos están en `soluciones/` (solo para consulta de referencia del instructor; resuélvelo por tu cuenta antes de mirar).

## Módulos

| Módulo | Tema | Nivel |
|---|---|---|
| 01-fundamentos | Variables, tipos, operadores, strings | Básico |
| 02-control-flujo | if/else, switch, ternarios, bucles | Básico |
| 03-funciones | Declaración, arrow, parámetros, scope | Básico |
| 04-arrays | Métodos, map/filter/reduce, spread | Básico |
| 05-objetos | Objetos, métodos, referencias, destructuring | Básico |
| 06-strings-fechas | Métodos de string, Date, Math | Básico/Medio |
| 07-map-set | Map y Set | Medio |
| 08-clases | Clases, herencia, getters/setters | Medio |
| 09-errores | try/catch, throw, errores custom | Medio |
| 10-modulos | CommonJS y ES modules | Medio |
| 11-funcional | Closures, higher-order, currying | Medio |
| 12-async | Promesas, async/await, fetch | Medio/Avanzado |
| 13-node-archivos | fs, path, process.argv | Avanzado |
| 14-node-http | Servidor HTTP, JSON API | Avanzado |
| 15-typescript | TypeScript completo | Avanzado |

## Reglas del curso
- Cada ejercicio se corre con `node ejercicios/ej-XX.js` y se verifica comparando con el `Resultado esperado` del encabezado.
- Los ejercicios son plantillas que debes completar donde dice `// completa aquí`.
- Al final de cada módulo, resuelve el **mini proyecto** para integrar todo lo aprendido en un caso práctico.
- Si un ejercicio te da error, no te desesperes: lee el mensaje. Entender los errores es parte fundamental del aprendizaje.
- Los módulos 13 y 14 son interactivos (archivos del sistema y servidores HTTP); se prueban con los comandos explicados en sus consignas.
- El módulo 15 (TypeScript) se compila con `npm run build`.
