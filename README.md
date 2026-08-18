# Curso JavaScript → TypeScript

¡Bienvenido! Acá vas a aprender JavaScript desde cero, de a poquito y paso a paso, y al final del camino te vas a topar con TypeScript. Todo se corre con **Node.js** en la terminal, así que no necesitás nada más que una computadora con ganas de aprender.

Pensalo como un cuaderno de clases: cada tema tiene su explicación sencilla, unos ejemplos que podés correr para ver qué pasa, y unos ejercicios para que practiques vos solo. Si algo no sale a la primera, tranqui: **equivocarse es parte de aprender**.

## Requisitos
- Node.js v24+ (ya lo tenés instalado). Verificá con: `node --version`

## Cómo usar el curso
1. Entrá a un módulo (por ejemplo `01-fundamentos/` o `02-control-flujo/`).
2. Leé su `README.md`: ahí está la explicación en criollo y la guía de ejemplos.
3. Corré los ejemplos: `node ejemplos/nombre.js`. Mirá qué imprime cada uno y tratá de entender por qué.
4. Resolvé los ejercicios en `ejercicios/`. La consigna está explicada arriba en cada archivo, y el resultado esperado, abajo. Verificás vos mismo con `node ejercicios/ej-XX.js`.
5. Cuando termines un módulo, avisá y lo revisamos juntos antes de seguir con el siguiente.

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
- Cada ejercicio se corre con `node archivo.js` y se verifica comparando con el resultado esperado (que está en los comentarios).
- Los ejemplos son para **entender**; los ejercicios, para **practicar** sin mirar las soluciones.
- Si un ejercicio te da error, no te desesperes: leé el mensaje. Entender los errores es parte de aprender.
- Los ejercicios de los módulos 13/14/15 son interactivos (archivos y servidores): se prueban con los comandos que explica cada consigna.