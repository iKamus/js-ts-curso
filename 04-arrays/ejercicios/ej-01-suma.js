/*
Ejercicio 1 -- Sumar con reduce
Tenes esta lista de numeros:
  const numeros = [4, 8, 15, 16, 23, 42];
Sumalos y mostrá el total.

Un array es como una fila de cajas numeradas. reduce es como caminar
por toda la fila llevando una caja acumuladora: en cada caja sumas lo
que hay adentro a tu acumulador y seguis, hasta llegar al final.

Paso a paso:
1) Usa numeros.reduce(...) con la flecha de dos parametros que viste
   en ejemplos/03-map-filter-reduce.js:
   - el acumulador arranca en 0 (ese es el segundo argumento de reduce)
   - en cada vuelta, devolves el acumulador mas el numero de la vuelta
   - al final te queda la suma de todo
2) Muestra el total con console.log.

Pista: es como juntar todas las monedas de la mesada y contar cuanto
tenes al final.

Resultado esperado:
108
*/

const numeros = [4, 8, 15, 16, 23, 42];

// completa aqui
