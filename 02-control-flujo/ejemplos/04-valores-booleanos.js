// 04-valores-booleanos.js — Valores que se comportan como falso o verdadero

// Son falsos: false, 0, "", null, undefined, NaN (los "no hay nada")
// TODO lo demas se comporta como verdadero (incluye [] y {}). Cualquier cosa con algo adentro cuenta.

const valores = [0, '', 'hola', null, undefined, NaN, [], {}, -1];

for (const v of valores) {
  console.log(v, v ? '-> se comporta como verdadero' : '-> se comporta como falso');
}

// Uso practico: || devuelve el PRIMER valor verdadero (el plan B si el primero no sirve)
const nombre = '' || 'Anonimo';
console.log(nombre); // Anonimo

// fallback tipico: si no hay valor, usamos un valor por defecto
const prefijo = undefined || 'sin prefijo';
console.log(prefijo); // sin prefijo

// && devuelve el primer valor falso, o el ultimo si todos se comportan como verdadero
console.log(true && 'resultado');  // resultado
console.log('a' && '' && 'c');     // '' (primer falso: se frena en el vacio)
