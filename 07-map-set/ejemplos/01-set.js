// 01-set.js — Set: valores únicos
// Ojo: acá probamos el Set, que es como esa bolsa donde no entran duplicados.
// Vos agregás un valor, y si ya está, el Set lo IGNORA: no lo vuelve a guardar.

const set = new Set();

set.add(1);
set.add(2);
set.add(1); // ya estaba el 1, así que no se repite: queda uno solo
console.log(set);          // Set(2) { 1, 2 }
console.log(set.size);     // 2
console.log(set.has(1));   // true
console.log(set.has(5));   // false

set.delete(2);
console.log(set.size);     // 1

// deduplicar un array
// Fijate este truco: meter el array dentro de un Set y expandirlo con [...]
// es como pasar la lista por un filtro que deja un solo ejemplar de cada uno.
const numeros = [1, 2, 2, 3, 3, 3];
const unicos = [...new Set(numeros)];
console.log(unicos); // [1, 2, 3]

// iterar
// Recorrer un Set es como pasar lista: vas mirando cada valor, en orden.
for (const v of set) console.log('valor:', v);

// vaciar
// clear() lo deja limpio, como cuando vaciás la mochila al final del año.
set.clear();
console.log(set.size); // 0