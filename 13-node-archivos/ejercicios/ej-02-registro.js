/*
Ejercicio 2 — Registro (log)
Pensalo como el libro de guardia de la conserjería: cada evento queda
anotado y no se borra nada de lo anterior. Cada vez que corras este
archivo, se agrega UNA línea nueva al final del registro (el log va
creciendo, como las entradas en un registro).

Paso a paso:
1) Armá la ruta del archivo con path.join: el archivo va a quedar en
   la carpeta ejercicios, donde está este archivo (__dirname es la
   carpeta del archivo actual). Fijate cómo en ejemplos/02-fs-basico.js.
2) Armá la línea nueva con la fecha actual. En 06-strings-fechas/
   ejemplos/02-dates.js viste los métodos de Date: buscá el que da la
   fecha en formato estándar, tipo "2026-08-15T14:30:00.000Z", y
   metelo en un template literal con "evento registrado".
3) Agregala al final del archivo con fs.appendFileSync(ruta, linea + '\n').
   - append significa "agregar al final" (no borra lo anterior)
   - '\n' es el salto de línea, para que cada entrada quede en su renglón
   Si el archivo no existe todavía, appendFileSync lo crea: perfecto
   para la primera corrida. (También está en ejemplos/02-fs-basico.js.)
4) Al final, mostrá el contenido completo del archivo con readFileSync
   (vas a ver las entradas de todas las veces que corriste el archivo).

Primera corrida (la fecha real es la de HOY, no la del ejemplo):
[2026-08-15T...] evento registrado
*/

const fs = require('fs');
const path = require('path');

// completá acá