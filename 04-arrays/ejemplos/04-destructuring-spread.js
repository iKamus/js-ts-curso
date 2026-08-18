// 04-destructuring-spread.js — Destructuring, spread y copias
// Destructuring es abrir el paquete y agarrar directo lo que querés; spread es esparcir el contenido.

// Destructuring de arrays
// Sacás cada elemento y lo guardás en una variable, como repartir cartas de a una.
const [a, b] = [10, 20];
console.log(a, b); // 10 20

// saltar elementos con comas
// Si no te interesa una posición, pasás de largo con una coma, como cambiarte de canal.
const [, , tercero] = [1, 2, 3];
console.log(tercero); // 3

// rest en destructuring
// El "..." agarra todo lo que sobra y lo junta en un array.
const [primero, ...resto] = [1, 2, 3, 4];
console.log(primero); // 1
console.log(resto);   // [2, 3, 4]

// spread: expandir elementos
// El spread "desparrama" los elementos, como vaciar la mochila sobre la mesa.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = [...arr1, ...arr2];
console.log(combinado); // [1, 2, 3, 4]

// copia (no referencia)
// Acá estamos copiando la lista, no pasando el mismo papel. Por eso el original no cambia.
const original = [1, 2, 3];
const copia = [...original];
copia.push(4);
console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]

// sort (OJO: convierte a string por defecto)
// Si no le explicás cómo comparar, ordena como si fueran palabras y los números quedan raros.
const numeros = [10, 2, 25];
console.log([...numeros].sort());                // [10, 2, 25] ¡mal!
console.log([...numeros].sort((x, y) => x - y)); // [2, 10, 25] bien