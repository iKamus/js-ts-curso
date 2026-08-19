/*
Ejercicio 3 -- Formatear fecha
Aca va un clasico. Tenes esta fecha:
  const d = new Date(2026, 7, 15);
Eso representa el 15 de agosto de 2026.

Conceptos que vas a usar: getFullYear, getMonth, getDate, padStart, template literals.

MUY IMPORTANTE (el clasico error): en JavaScript los meses van de 0 a 11.
Enero es 0, agosto es 7, diciembre es 11. Por eso new Date(2026, 7, 15)
es agosto, no julio. Cuando trabajes con fechas, siempre sumale 1 al mes
para mostrarlo como lo entendemos nosotros.

Paso a paso:
1) Agarra el dia, el mes y el anno con los metodos getter que viste en
   ejemplos/02-dates.js (cada uno se llama "get" + el dato en ingles).
2) Ojo con el mes: los getter te devuelven el mes como lo maneja JS
   (de 0 a 11), pero vos queres mostrarlo como lo entendemos nosotros.
   Pensa que le tenes que hacer al numero para pasar de un lado al otro.
3) Para que el mes y el dia tengan el cero adelante cuando son de un
   solo digito (como '08'), hay un metodo que rellena por izquierda
   hasta el largo que le digas. Esta en ejemplos/01-strings.js.
4) Arma el texto "15/08/2026" juntando las partes con '/' y mostralo.

Resultado esperado:
15/08/2026
*/

const d = new Date(2026, 7, 15);

// completa aca
