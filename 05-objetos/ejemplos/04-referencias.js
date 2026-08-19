// 04-referencias.js — Referencias, copias y optional chaining

// Los objetos se asignan por REFERENCIA
// Cuidado: `alias` y `original` son dos nombres para el MISMO cuaderno.
const original = { saldo: 100 };
const alias = original;
alias.saldo = 50;
console.log(original.saldo); // 50  ← ¡cambió el original!

// Copia superficial (solo primer nivel)
// Con el spread hacés una fotocopia del primer nivel: lo de afuera queda separado.
const copia = { ...original };
copia.saldo = 99;
console.log(original.saldo); // 50 (intacto)

// Copia profunda con structuredClone (anida cualquier cosa)
// Si hay objetos adentro de objetos, el spread no alcanza: structuredClone copia TODO.
const anidado = { datos: { x: 1 }, lista: [1, 2, 3] };
const profunda = structuredClone(anidado);
profunda.datos.x = 999;
console.log(anidado.datos.x); // 1 (intacto)

// Optional chaining (?.) → undefined en vez de error
// Es el paracaídas: si no existe lo que buscás, te tira undefined y no se rompe.
const usuario = {};
console.log(usuario.perfil?.nombre); // undefined (sin error)
// console.log(usuario.perfil.nombre); // ERROR: no se puede leer 'nombre' de undefined

// Con operador ?? (nullish): valor por defecto solo si es null/undefined
// Como tener un plan B: si no hay valor, usás el que pasaste vos.
const puerto = usuario.perfil?.puerto ?? 8080;
console.log(puerto); // 8080
