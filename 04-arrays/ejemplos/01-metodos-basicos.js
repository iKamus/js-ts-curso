// 01-metodos-basicos.js -- Metodos basicos de arrays
// Piensa en un array como la lista de compras: cada cosa tiene su lugar
// y puedes mirarla, sumarle cosas o sacarle cosas.

const frutas = ['manzana', 'pera', 'banana'];
console.log(frutas[0]);                      // manzana
console.log(frutas.length);                  // 3
console.log(frutas[frutas.length - 1]);      // banana (ultimo)

// Agregar / quitar
// push mete al final de la fila y unshift al principio, como hacer cola en el kiosco.
frutas.push('uva');      // al final
frutas.unshift('kiwi');  // al inicio
console.log(frutas);     // ['kiwi','manzana','pera','banana','uva']

// pop saca al ultimo de la fila y shift al primero.
frutas.pop();            // saca del final
frutas.shift();          // saca del inicio
console.log(frutas);     // ['manzana','pera','banana']

// Buscar
// indexOf te dice en que lugar esta; si no esta, te da -1. includes te responde con si o no.
console.log(frutas.indexOf('pera'));     // 1
console.log(frutas.indexOf('melon'));    // -1 (no existe)
console.log(frutas.includes('banana'));  // true

// slice NO modifica el array original
// Es como sacar una foto de un tramo de la lista: miras el recorte sin tocar el original.
console.log(frutas.slice(0, 2));  // ['manzana','pera']
console.log(frutas);              // intacto

// join: array -> string
// Une todos los elementos en un solo texto, con el separador que elijas.
console.log(frutas.join(' - '));  // manzana - pera - banana

// reverse: da vuelta el array
// El primero pasa al final y el ultimo al principio, como dar vuelta la fila.
// OJO: modifica el array original, asi que si lo queres conservar, copia antes.
const alReves = ['a', 'b', 'c'].reverse();
console.log(alReves);             // ['c','b','a']

// Truco: dar vuelta un texto con split + reverse + join
// Para leer un texto "al reves": lo separas en letras, lo das vuelta
// y lo volves a pegar. Es la base del ejercicio del palindromo.
const texto = 'hola';
console.log(texto.split('').reverse().join('')); // aloh
