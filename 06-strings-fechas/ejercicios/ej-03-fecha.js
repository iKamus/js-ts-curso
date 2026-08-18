/*
Ejercicio 3 — Formatear fecha
Che, acá va un clásico. Tenés esta fecha:
  const d = new Date(2026, 7, 15);
Eso representa el 15 de agosto de 2026.

MUY IMPORTANTE (el clásico error): en JavaScript los meses van de 0 a 11.
Enero es 0, agosto es 7, diciembre es 11. Por eso new Date(2026, 7, 15)
es agosto, no julio. Cuando trabajás con fechas, siempre sumale 1 al mes
para mostrarlo como lo entendemos nosotros.

Paso a paso:
1) Agarrá el día, el mes y el año con los métodos getter que viste en
   ejemplos/02-dates.js (cada uno se llama "get" + el dato en inglés).
2) Ojo con el mes: los getter te devuelven el mes como lo maneja JS
   (de 0 a 11), pero vos querés mostrarlo como lo entendemos nosotros.
   Pensá qué le tenés que hacer al número para pasar de un lado al otro.
3) Para que el mes y el día tengan el cero adelante cuando son de un
   solo dígito (como '08'), hay un método que rellena por izquierda
   hasta el largo que le digas. Está en ejemplos/01-strings.js.
4) Armá el texto "15/08/2026" juntando las partes con '/' y mostralo.

Resultado esperado:
15/08/2026
*/

const d = new Date(2026, 7, 15);

// completá acá