// 01-strings.js — Métodos de string
// Los strings son como mensajes de WhatsApp: podés hacer un montón de cosas con ellos,
// pero cada método te devuelve un texto NUEVO, nunca cambia el original.

const texto = '  Hola Mundo JavaScript  ';

// trim: le corta los espacios de los bordes, como recortar los márgenes de la hoja.
console.log(texto.trim());             // 'Hola Mundo JavaScript'
console.log(texto.trim().length);      // 21
console.log('Hola Mundo'.toUpperCase());  // HOLA MUNDO
console.log('Hola Mundo'.toLowerCase());  // hola mundo

const email = 'ana@gmail.com';
// includes, startsWith y endsWith te contestan con sí o no.
console.log(email.includes('@'));         // true
console.log(email.startsWith('ana'));     // true
console.log(email.endsWith('.com'));      // true
console.log(email.indexOf('@'));          // 3
console.log(email.slice(0, 3));           // ana

// split rompe el texto en pedazos y join vuelve a pegarlos.
console.log('a,b,c'.split(','));          // ['a','b','c']
console.log(['a','b','c'].join('-'));     // a-b-c

// OJO con el separador vacío: split('') separa el texto en CADA caracter.
// Es como cortar la soga con tijera en cada letra: te queda un array de letras.
console.log('hola'.split(''));            // ['h','o','l','a']

// replace cambia solo la primera aparición; replaceAll cambia todas, como buscar y reemplazar en Word.
console.log('hola hola'.replace('hola', 'chau'));     // chau hola (solo la 1ª)
console.log('hola hola'.replaceAll('hola', 'chau'));  // chau chau

// Capitalizar: primera letra en mayúscula + el resto igual
// Se arma en TRES pasos con herramientas de este archivo:
//   1) agarrás la primera letra (con [0] o con charAt)
//   2) la ponés en mayúscula con toUpperCase
//   3) le sumás el resto con slice(1) (de la letra 1 en adelante)
// El + junta los dos pedazos como un texto nuevo.
const palabra = 'javascript';
const capitalizada = palabra[0].toUpperCase() + palabra.slice(1);
console.log(capitalizada);                // Javascript

// padStart rellena por izquierda y padEnd por derecha, como completar con ceros un legajo.
console.log('7'.padStart(3, '0'));    // 007
console.log('12'.padEnd(4, '.'));     // 12..
console.log('hi'.repeat(3));          // hihihi
console.log('Hola'[1]);               // o
console.log('Hola'.charAt(0));        // H

// los strings son inmutables
// Fijate: base no cambió. toUpperCase devolvió otro texto, pero el original quedó intacto.
const base = 'hola';
const modificado = base.toUpperCase();
console.log(base, modificado); // hola HOLA