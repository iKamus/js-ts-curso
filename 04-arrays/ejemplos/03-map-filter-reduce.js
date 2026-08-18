// 03-map-filter-reduce.js — Los 4 grandes
// Estos métodos son las herramientas que más vas a usar: transformar, filtrar y resumir.

const precios = [100, 250, 40, 300];

// map: transforma cada elemento → array nuevo
// Es como pasarle la plancha de a una a todas las remeras: cada una cambia, pero el cajón queda igual.
const conImpuesto = precios.map(p => p * 1.21);
console.log(conImpuesto); // [121, 302.5, 48.4, 363]

// filter: deja pasar solo los que cumplen
// Como el portero del boliche: deja entrar solo a los que cumplen la condición.
const caros = precios.filter(p => p >= 250);
console.log(caros); // [250, 300]

// reduce: todo el array → un único valor
// Como sumar todas las boletas del mes para saber cuánto gastaste en total.
const total = precios.reduce((acumulador, p) => acumulador + p, 0);
console.log(total); // 690

// find: el PRIMERO que cumple
// Se detiene apenas encuentra el primero que da la talla, como buscar tu nombre en la lista.
const encontrado = precios.find(p => p === 250);
console.log(encontrado); // 250

// some / every: booleanos
// some pregunta "¿al menos uno cumple?"; every, "¿todos cumplen?". La respuesta es sí o no.
console.log(precios.some(p => p > 500));  // false
console.log(precios.every(p => p > 0));   // true

// encadenar: pares, doblados, sumados
// Podés combinar los pasos como una receta: filtrás, transformás y resumís, en ese orden.
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = numeros
  .filter(n => n % 2 === 0)     // [2,4,6]
  .map(n => n * 10)             // [20,40,60]
  .reduce((acc, n) => acc + n, 0); // 120
console.log(resultado); // 120