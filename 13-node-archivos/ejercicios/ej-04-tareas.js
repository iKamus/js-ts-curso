/*
Ejercicio 4 — Mini gestor de tareas (CLI con JSON)
Acá vas a armar tu propia listita de pendientes, como la que anotás en
el celular, pero guardada en un archivo JSON. Las tareas viven en
ejercicios/tareas.json.

¿Cómo funciona? Le pasás un comando al programa cuando lo corrés:
  node ej-04-tareas.js add "comprar pan"   → agrega una tarea
  node ej-04-tareas.js list                → muestra las tareas
  node ej-04-tareas.js remove 0            → borra la tarea de la posición 0

Paso a paso:
1) Agarrá los argumentos del comando. Fijate en ejemplos/01-process.js:
   process.argv son todos los argumentos (node, el archivo, y lo demás),
   y con slice sacás los dos primeros (que son siempre node y el archivo)
   para quedarte con los tuyos. Por ejemplo con "add comprar pan":
   te queda ['add', 'comprar pan'].
2) Armá la ruta del archivo con path.join (el archivo va a quedar en
   esta misma carpeta: tareas.json).
3) Leé las tareas (o arrancá con lista vacía si el archivo no existe):
   - la forma de preguntar "¿existe el archivo?" está en
     ejemplos/02-fs-basico.js
   - si existe: lo leés y lo convertís de JSON a array con JSON.parse
     (el JSON.parse lo viste en el módulo 09, y el patrón de leer +
     parsear está en ejemplos/03-fs-async.js)
   - si no existe: arrancás con un array vacío []
   Puede ser con un if/else o con un ternario.
4) Según el primer argumento (args[0]) hacé una cosa:
   - 'add': agregá el texto de la tarea (args[1]) al final con .push
   - 'list': mostrá cada tarea con su posición: "0: comprar pan"
     (una por línea). Podés usar forEach((tarea, i) => ...) o un for.
   - 'remove': borrá la tarea de la posición Number(args[1]) con
     .splice(indice, 1) (splice corta de a uno desde esa posición)
5) Si el comando era add o remove, GUARDÁ el array de vuelta como JSON:
   - writeFileSync escribe el archivo (sobreescribe), como en
     ejemplos/02-fs-basico.js
   - JSON.stringify convierte el array a texto JSON. Fijate que acepta
     un tercer argumento: el número de espacios de indentación. Con 2
     queda "lindo" y más fácil de leer si abrís el archivo.

Probá:
  node ej-04-tareas.js add "comprar pan"
  node ej-04-tareas.js add "estudiar JS"
  node ej-04-tareas.js list
  → 0: comprar pan
    1: estudiar JS
  node ej-04-tareas.js remove 0
  node ej-04-tareas.js list
  → 0: estudiar JS
*/

const fs = require('fs');
const path = require('path');

// completá acá