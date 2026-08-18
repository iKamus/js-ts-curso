/*
Ejercicio 5 — Renombrar archivos
Es como cambiarle la etiqueta a una caja de zapatos: el contenido es el
mismo, solo cambia el nombre. Ojo, cuando renombrás, el nombre viejo
desaparece (no queda una copia).

Paso a paso:
1) Creá el archivo viejo con algo adentro:
   - Armá la ruta con path.join: viejo.txt en esta misma carpeta
   - Escribilo con writeFileSync (si el archivo no existe, lo crea:
     fijate en ejemplos/02-fs-basico.js)
2) Renombralo (moverlo a nuevo.txt):
   - Armá la ruta nueva: nuevo.txt en esta misma carpeta
   - Buscá en fs la función para renombrar: se llama igual que la
     acción, en inglés, y termina en Sync como las que ya viste.
     (rename = cambiar el nombre; Sync = de una)
     El archivo ahora se llama nuevo.txt y viejo.txt ya no existe.
3) Mostrá si existe cada uno:
   - la forma de preguntar "¿existe?" está en ejemplos/02-fs-basico.js
   Mostralo con el formato de abajo.

Resultado esperado:
viejo.txt existe: false
nuevo.txt existe: true
*/

const fs = require('fs');
const path = require('path');

// completá acá