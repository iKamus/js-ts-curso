/*
Ejercicio 5 — Renombrar archivos
Es como cambiarle la etiqueta a una caja de zapatos: el contenido es
el mismo, solo cambia el nombre. Cuando renombras, el nombre viejo
desaparece (no queda una copia).

Paso a paso:
1) Crea el archivo viejo con algo adentro:
   - Arma la ruta con path.join: viejo.txt en esta misma carpeta
   - Escribelo con writeFileSync
   Tip: si el archivo no existe, writeFileSync lo crea. Observa en
   la seccion fs del README.

2) Renombralo a nuevo.txt:
   - Arma la ruta nueva: nuevo.txt en esta misma carpeta
   - Usa fs.renameSync(rutaVieja, rutaNueva)
     (rename = cambiar el nombre, Sync = de una)

3) Muestra si existe cada uno:
   - Usa fs.existsSync para cada ruta
   - Mostralo con el formato de abajo

Resultado esperado:
viejo.txt existe: false
nuevo.txt existe: true
*/

const fs = require('fs');
const path = require('path');

// completa aqui
