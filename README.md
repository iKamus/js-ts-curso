# Curso JavaScript → TypeScript

¡Bienvenido! Aquí vas a aprender JavaScript desde cero, de a poco y paso a paso, y al final del camino te vas a encontrar con TypeScript. Todo se corre con **Node.js** en la terminal, así que no necesitas nada más que una computadora con ganas de aprender.

Piénsalo como un cuaderno de clases: cada tema tiene su explicación en formato referencia (keyword por keyword, con métodos, usos y errores comunes), unos ejemplos que puedes correr para ver qué pasa, ejercicios para practicar, y un mini proyecto integrador al final para asentar todo lo que aprendiste. Si algo no sale a la primera, no te preocupes: **equivocarse es parte de aprender**.

## Requisitos
- Node.js v24+ (ya lo tienes instalado). Verifica con: `node --version`

## Cómo usar el curso
1. Entra a un módulo (por ejemplo `01-fundamentos/` o `02-control-flujo/`).
2. Lee su `README.md`: ahí está la referencia de cada keyword, sus métodos, usos y errores comunes. Está pensado para que lo consultes también después de terminar el módulo.
3. Corre los ejemplos: `node ejemplos/nombre.js`. Mira qué imprime cada uno y trata de entender por qué.
4. Resuelve los ejercicios en `ejercicios/`. La consigna está explicada arriba con pasos y tips para llegar a la solución (sin darte la respuesta). El resultado esperado está abajo para que compares. Verificas tú mismo con `node ejercicios/ej-XX.js`.
5. Cuando termines los ejercicios, enfrenta el **mini proyecto** en `proyecto/`: es un desafío más completo que integra todo lo del módulo. Lee su README para los requisitos.
6. Cuando termines un módulo, avísanos y lo revisamos juntos antes de seguir con el siguiente.
7. Las soluciones de ejercicios y proyectos están en `soluciones/` (solo para consulta del instructor, no las mires antes de intentar).

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
- Los ejemplos son para **entender**; los ejercicios, para **practicar** con la ayuda de tips (sin mirar las soluciones).
- Al final de cada módulo, resuelve el **mini proyecto** para integrar todo lo aprendido en algo más completo.
- Si un ejercicio te da error, no te desesperes: lee el mensaje. Entender los errores es parte de aprender.
- Los ejercicios de los módulos 13/14/15 son interactivos (archivos y servidores): se prueban con los comandos que explica cada consigna.
