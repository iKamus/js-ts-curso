// 03-comparacion.js — Contar frecuencias con Map
// Acá vamos a contar cuántas veces aparece cada palabra, como si
// estuvieras anotando quién pide cada vez un préstamo de la lapicera.

const texto = 'la casa de la casa';
const frec = new Map();

// La idea: cada palabra es una clave, y el valor es la cantidad de veces que aparece.
// Si todavía no estaba, get() devuelve undefined, y undefined || 0 es 0, así arrancamos de cero.
for (const palabra of texto.split(' ')) {
  frec.set(palabra, (frec.get(palabra) || 0) + 1);
}
console.log([...frec.entries()]);
// [ ['la', 2], ['casa', 2], ['de', 1] ]

// con un objeto también se puede
// Dale, con un objeto común también funciona, mismo truco.
const frecObj = {};
for (const palabra of texto.split(' ')) {
  frecObj[palabra] = (frecObj[palabra] || 0) + 1;
}
console.log(frecObj); // { la: 2, casa: 2, de: 1 }

// Map es más cómodo cuando las claves son dinámicas y variadas,
// y respeta el orden de inserción al iterar.
// O sea: guardás en orden y te devuelve en el mismo orden, como una lista del super.