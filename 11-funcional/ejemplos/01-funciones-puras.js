// 01-funciones-puras.js — Funciones puras, efectos colaterales e inmutabilidad

// Una funcion pura es como una receta exacta: mismos ingredientes, mismo resultado.
// No toca nada de afuera, no ensucia la cocina.

// --- FUNCION PURA ---
function sumar(a, b) {
  return a + b;
}
console.log('Pura:', sumar(2, 3)); // 5
console.log('Pura:', sumar(2, 3)); // 5 (siempre lo mismo)

// --- FUNCION IMPURA (con efecto colateral) ---
let llamadas = 0;
function sumarImpura(a, b) {
  llamadas++; // efecto colateral: toca una variable externa
  return a + b;
}
console.log('Impura:', sumarImpura(2, 3)); // 5
console.log('Impura:', sumarImpura(2, 3)); // 5 (resultado igual, pero llamadas cambio)
console.log('Llamadas totales:', llamadas); // 2 (estado externo mutado)

// --- INMUTABILIDAD ---
// En vez de modificar el original, creas una copia con los cambios.
const precios = [100, 200, 150, 80];

// MUTAR (evitar esto)
const copiaMutada = precios;
copiaMutada.push(300);
console.log('Original mutado:', precios); // [100, 200, 150, 80, 300] ouch!

// CREAR COPIA (buen approach)
const original = [100, 200, 150, 80];
const conNuevo = [...original, 300];
console.log('Original:', original);       // [100, 200, 150, 80] intacto
console.log('Copia:', conNuevo);          // [100, 200, 150, 80, 300]

// con objetos tambien
const persona = { nombre: 'Ana', edad: 25 };
const mayor = { ...persona, edad: persona.edad + 1 };
console.log('Original:', persona);  // { nombre: 'Ana', edad: 25 }
console.log('Copia:', mayor);       // { nombre: 'Ana', edad: 26 }

// filter y map devuelven arrays nuevos, no mutan el original
const MayoresA100 = original.filter(p => p > 100);
const duplicados = original.map(p => p * 2);
console.log('Filtrados:', MayoresA100); // [200, 150]
console.log('Duplicados:', duplicados); // [200, 400, 300, 160]
console.log('Sigue igual:', original);  // [100, 200, 150, 80] intacto
