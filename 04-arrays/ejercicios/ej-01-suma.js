/*
Ejercicio 1 — Sumar con reduce
Che, tenés esta lista de números:
  const numeros = [4, 8, 15, 16, 23, 42];
Sumalos y mostrá el total.

Un array es como una fila de cajas numeradas. reduce es como caminar
por toda la fila llevando una caja acumuladora: en cada caja sumás lo
que hay adentro a tu acumulador y seguís, hasta llegar al final.

Paso a paso:
1) Usá numeros.reduce(...) con la flecha de dos parámetros que viste
   en ejemplos/03-map-filter-reduce.js:
   - el acumulador arranca en 0 (ese es el segundo argumento de reduce)
   - en cada vuelta, devolvés el acumulador más el número de la vuelta
   - al final te queda la suma de todo
2) Mostrá el total con console.log.

Pista: es como juntar todas las monedas de la mesada y contar cuánto
tenés al final.

Resultado esperado:
108
*/

const numeros = [4, 8, 15, 16, 23, 42];

// completá acá