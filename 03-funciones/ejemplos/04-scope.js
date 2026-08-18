// 04-scope.js — Scope (alcance de las variables)

// Scope es hasta dónde llega a vivir una variable, como el radio de la mochila: lo que guardás se queda ahí
let global = 'puedo usarse en todo el archivo';

function ejemplo() {
  let local = 'solo dentro de la función';
  console.log(global);  // ok (la mochila global se ve desde adentro)
  console.log(local);   // ok (la local vive acá adentro)
}
ejemplo();
// console.log(local); // ERROR: local no existe acá afuera (se quedó adentro de la función)

// Bloques: let/const son de bloque (viven solo dentro de las llaves)
{
  let enBloque = 'solo dentro de las llaves';
  var enVar = 'var escapa del bloque';
}
// console.log(enBloque); // ERROR
console.log(enVar); // 'var escapa del bloque' → por eso no usamos var (rompe el radio de la mochila)

// Shadowing: una variable local tapa a la global (como el nombre del compañero tapa al del registro)
let mensaje = 'global';
function otra() {
  let mensaje = 'local';
  console.log(mensaje); // local
}
otra();
console.log(mensaje); // global