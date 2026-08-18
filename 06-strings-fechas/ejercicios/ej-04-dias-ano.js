/*
Ejercicio 4 — Días restantes del año
Te ponemos de vacaciones imaginarias:
  const hoy = new Date(2026, 7, 15);   // 15 de agosto de 2026
Calculá cuántos días faltan para el 31 de diciembre del MISMO año.

La idea: restar dos fechas. En JavaScript, cuando restás dos fechas,
el resultado está en MILISEGUNDOS (no en días). Un día tiene
1000 * 60 * 60 * 24 milisegundos, así que hay que dividir por eso
para pasar de milisegundos a días. En ejemplos/02-dates.js hay una
parte de "días entre dos fechas" que te muestra exactamente eso.

Paso a paso:
1) Armá la fecha de fin de año del mismo año:
   - tomá el año de hoy (fijate el getter en el ejemplo de fechas)
   - el mes de diciembre (recordá que los meses van de 0 a 11)
   - el día 31
2) Restá las dos fechas → te da los milisegundos que faltan.
3) Dividí por la cantidad de milisegundos que tiene un día.
4) Mostrá el resultado con console.log.

Resultado esperado:
138
*/

const hoy = new Date(2026, 7, 15);

// completá acá