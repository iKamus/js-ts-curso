/*
Ejercicio 5 — Renombrar archivos
Es como cambiarle la etiqueta a una caja de zapatos: el contenido es
el mismo, solo cambia el nombre. Cuando renombras, el nombre viejo
desaparece (no queda una copia).

Paso a paso:
1) Creá el archivo viejo con algo adentro:
   - Armá la ruta con path.join: viejo.txt en esta misma carpeta
   - Escribilo con writeFileSync
   Tip: si el archivo no existe, writeFileSync lo crea. Fijate en
   ejemplos/02-fs-basico.js.

2) Renombralo a nuevo.txt:
   - Armá la ruta nueva: nuevo.txt en esta misma carpeta
   - Usa fs.renameSync(rutaVieja, rutaNueva)
     (rename = cambiar el nombre, Sync = de una)

3) Mostrá si existe cada uno:
   - Usa fs.existsSync para cada ruta
   - Mostralo con el formato de abajo

Resultado esperado:
viejo.txt existe: false
nuevo.txt existe: true
*/

const fs = require('fs');
const path = require('path');

// completá acá
