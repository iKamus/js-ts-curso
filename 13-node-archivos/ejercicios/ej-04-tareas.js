/*
Ejercicio 4 — Mini gestor de tareas (CLI con JSON)
Arma tu propia listita de pendientes guardada en un archivo JSON.
Las tareas viven en ejercicios/tareas.json.

Como funciona: le pasas un comando al programa cuando lo corres:
  node ej-04-tareas.js add "comprar pan"   → agrega una tarea
  node ej-04-tareas.js list                → muestra las tareas
  node ej-04-tareas.js remove 0            → borra la tarea de la posicion 0

Paso a paso:
1) Agarra los argumentos del comando. process.argv contiene todos los
   argumentos; con slice(2) sacas los dos primeros (Node y el archivo).
   Tip: observa en la seccion process del README.

2) Arma la ruta del archivo con path.join: va a quedar en esta misma
   carpeta (ejercicios/tareas.json).

3) Lee las tareas (o arranca con lista vacia si el archivo no existe):
   - Para preguntar si existe: fs.existsSync(ruta)
   - Si existe: lee con readFileSync y convierte de JSON a array
     con JSON.parse
   - Si no existe: arranca con []
   Tip: el patron de leer + parsear esta en la seccion fs del README.

4) Segun el primer argumento (args[0]) hace una cosa:
   - 'add': agrega el texto de la tarea (args[1]) al final con .push
   - 'list': muestra cada tarea con su posicion: "0: comprar pan"
   - 'remove': borra la tarea de la posicion Number(args[1]) con
     .splice(indice, 1)

5) Si el comando era add o remove, guarda el array como JSON:
   - writeFileSync escribe el archivo (sobreescribe)
   - JSON.stringify convierte el array a texto. El tercer argumento
     es la indentacion: con 2 queda legible.
   Tip: esta funcion esta en la seccion fs del README.

Prueba:
  node ej-04-tareas.js add "comprar pan"
  node ej-04-tareas.js add "estudiar JS"
  node ej-04-tareas.js list
  node ej-04-tareas.js remove 0
  node ej-04-tareas.js list
*/

const fs = require('fs');
const path = require('path');

// completa aqui
