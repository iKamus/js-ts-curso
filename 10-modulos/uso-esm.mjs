// uso-esm.mjs — Consumir ES Modules
// Corré: node uso-esm.mjs
// Con import pedimos lo que exportó lib/matematicas.mjs.
// El default se importa sin llaves y los named van entre {}, así se ve
// enseguida quién es quién.

import mensaje, { sumar, restar, PI } from './lib/matematicas.mjs';

console.log(sumar(2, 3));    // 5
console.log(restar(10, 4));  // 6
console.log(PI);             // 3.1416
console.log(mensaje());      // Soy el export default