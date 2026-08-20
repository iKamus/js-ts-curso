/*
Ejercicio 2 — Registro (log)
Cada vez que corras este archivo, se agrega UNA linea nueva al final
del registro. Es como el libro de guardia de la conserjeria: cada
evento queda anotado y no se borra nada de lo anterior.

Paso a paso:
1) Arma la ruta del archivo con path.join. El archivo va a quedar en
   la carpeta ejercicios, donde esta este archivo.
   Tip: usa __dirname con path.join, como en la seccion fs del README.

2) Arma la linea nueva con la fecha actual. Busca en la documentacion
   de Date el metodo que da la fecha en formato ISO (tipo
   "2026-08-15T14:30:00.000Z"). Metelo en un template literal con
   el texto "evento registrado".

3) Agregala al final del archivo con fs.appendFileSync(ruta, linea + '\n').
   - appendFileSync agrega sin borrar lo anterior
   - Si el archivo no existe, lo crea automaticamente
   Tip: esta funcion esta en la seccion fs del README.

4) Muestra el contenido completo del archivo con fs.readFileSync.
   Vas a ver las entradas de todas las veces que corriste el archivo.

Primera corrida (la fecha real es la de hoy):
[2026-08-15T...] evento registrado
*/

const fs = require('fs');
const path = require('path');

// completa aqui
