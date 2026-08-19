// 01-set.js -- Set: valores unicos
// El Set es como una bolsa que no deja entrar duplicados:
// si un valor ya esta, el segundo intento simplemente no entra.

const set = new Set();

set.add(1);
set.add(2);
set.add(1); // ya estaba el 1, asi que no se repite: queda uno solo
console.log(set);          // Set(2) { 1, 2 }
console.log(set.size);     // 2
console.log(set.has(1));   // true
console.log(set.has(5));   // false

set.delete(2);
console.log(set.size);     // 1

// deduplicar un array
// Meter el array dentro de un Set y expandirlo con [...] es como
// pasar la lista por un filtro que deja un solo ejemplar de cada uno.
const numeros = [1, 2, 2, 3, 3, 3];
const unicos = [...new Set(numeros)];
console.log(unicos); // [1, 2, 3]

// iterar
// Recorrer un Set es como pasar lista: vas mirando cada valor, en orden.
for (const v of set) console.log('valor:', v);

// vaciar
// clear() lo deja limpio, como cuando vacias la mochila al final del anio.
set.clear();
console.log(set.size); // 0

// operaciones de conjuntos
const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// union: todos los valores de ambos
const union = new Set([...a, ...b]);
console.log('union:', [...union]); // [1, 2, 3, 4, 5, 6]

// interseccion: solo los que estan en ambos
const interseccion = new Set([...a].filter(v => b.has(v)));
console.log('interseccion:', [...interseccion]); // [3, 4]

// diferencia: los que estan en a pero no en b
const diferencia = new Set([...a].filter(v => !b.has(v)));
console.log('diferencia:', [...diferencia]); // [1, 2]
