// 04-truthy-falsy.js — Valores truthy y falsy

// Son falsy: false, 0, "", null, undefined, NaN (los "no hay nada")
// TODO lo demás es truthy (incluye [] y {}). Cualquier cosa con algo adentro cuenta como "sí".

const valores = [0, '', 'hola', null, undefined, NaN, [], {}, -1];

for (const v of valores) {
  console.log(v, v ? '→ truthy' : '→ falsy');
}

// Uso práctico: || devuelve el PRIMER valor truthy (el plan B si el primero no sirve)
const nombre = '' || 'Anónimo';
console.log(nombre); // Anónimo

// fallback típico: si no hay valor, usamos un valor por defecto
const prefijo = undefined || 'sin prefijo';
console.log(prefijo); // sin prefijo

// && devuelve el primer falsy, o el último si todo es truthy
console.log(true && 'resultado');  // resultado
console.log('a' && '' && 'c');     // '' (primer falsy: se frena en el vacío)