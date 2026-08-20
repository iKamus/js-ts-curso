/*
Ejercicio 4 -- Dias restantes del ano
Te ponemos de vacaciones imaginarias:
  const hoy = new Date(2026, 7, 15);   // 15 de agosto de 2026
Calcula cuantos dias faltan para el 31 de diciembre del MISMO ano.

Conceptos que vas a usar: getFullYear, new Date, resta de fechas, milisegundos a dias.

La idea: restar dos fechas. En JavaScript, cuando restas dos fechas,
el resultado esta en MILISEGUNDOS (no en dias). Un dia tiene
1000 * 60 * 60 * 24 milisegundos, asi que hay que dividir por eso
para pasar de milisegundos a dias. En el README del modulo (seccion
Date) hay una parte de "dias entre dos fechas" que te muestra
exactamente eso.

Paso a paso:
1) Arma la fecha de fin de ano del mismo anno:
   - toma el anno de hoy (observa el getter en la seccion Date del README)
   - el mes de diciembre (recorda que los meses van de 0 a 11)
   - el dia 31
2) Resta las dos fechas -> te da los milisegundos que faltan.
3) Divide por la cantidad de milisegundos que tiene un dia.
4) Muestra el resultado con console.log.

Resultado esperado:
138
*/

const hoy = new Date(2026, 7, 15);

// completa aqui
