// 01-variables.js — Variables y constantes
// Corré: node ejemplos/01-variables.js
//
// Para guardar datos en JavaScript hay TRES palabras clave: var, let y const.
// Son como tres tipos de cajas del almacén: eligen cuánto se puede tocar
// el contenido. Declarar una variable es "crear la caja"; asignarle un
// valor es "ponerle contenido adentro".

// ── const: la caja sellada ──────────────────────────────────────────
// const viene de "constante": algo que no varía. Se crea UNA vez y ese
// valor queda para siempre. Si intentás cambiarlo, el programa tira error.
// Es la opción por defecto: usala siempre que el valor no vaya a cambiar.
const nombre = 'Ana';
// nombre = 'Beto';   // ERROR: no se puede reasignar una const
//                     // (descomentá esa línea para verlo en vivo)

// ── let: la caja que se abre ────────────────────────────────────────
// let viene del inglés "to let" (dejar, permitir): deja que el valor
// cambie. Se usa cuando sabés que el contenido va a ir variando,
// como la edad o un contador.
let edad = 30;
edad = 31;             // reasignación válida: cambiamos el contenido de la caja
console.log('edad después de reasignar:', edad);

// ── var: la caja vieja del almacén ──────────────────────────────────
// var viene de "variable". Era la única forma en el JavaScript viejo.
// Funciona parecido a let, pero tiene trampas (por ejemplo, se escapa
// de las llaves de un bloque, como vas a ver en el módulo de scope).
// Por eso el consejo: en código nuevo NO la uses.
var viejo = 'no lo uses';

// ── declarar sin valor ──────────────────────────────────────────────
// Podés crear la caja vacía y llenarla después. Una variable declarada
// sin valor tiene undefined (la caja existe, pero está vacía).
let ciudad;
console.log('ciudad antes de llenarla:', ciudad);  // undefined
ciudad = 'Córdoba';
console.log('ciudad después de llenarla:', ciudad);

// ── La regla de oro ─────────────────────────────────────────────────
//   const por defecto  →  let si el valor va a cambiar  →  var casi nunca.
// El profe (y tu yo del futuro) te va a agradecer que uses const
// siempre que puedas: menos sorpresas, menos bugs.

console.log('nombre:', nombre);
console.log('viejo:', viejo);

// ── Tipos de números ────────────────────────────────────────────────
// Los números también son valores: sin coma, con coma o bajo cero.
const entero = 42;      // sin coma, como cuando contás bolitas de una en una
const decimal = 3.14;   // con coma, como medir con una regla o una jarra
const negativo = -7;    // bajo cero, como un termómetro en invierno

console.log('números:', entero, decimal, negativo);
console.log('tipo de nombre:', typeof nombre);
console.log('tipo de edad:', typeof edad);