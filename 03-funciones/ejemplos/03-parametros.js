// 03-parametros.js — Parametros

// Parametros por defecto: si no te pasan el ingrediente, ya tenes el plan B
function saludo(nombre = 'Anonimo') {
  return `Hola, ${nombre}`;
}
console.log(saludo());        // Hola, Anonimo
console.log(saludo('Ana'));   // Hola, Ana

// Rest params: juntan los argumentos extra en un array (como las monedas que sobran en la bolsa)
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) total += n;
  return total;
}
console.log(sumarTodos(1, 2, 3, 4)); // 10
console.log(sumarTodos());           // 0

// Arguments (solo en funciones clasicas): tiene todo lo que te pasaron, sin nombre
function cuantos() {
  return arguments.length;
}
console.log(cuantos(1, 2, 3)); // 3
