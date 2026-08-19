/*
Calculadora de descuentos — Plantilla

Completa las partes marcadas con "completa aqui".
Lee el README.md del proyecto para ver los requisitos y el resultado esperado.
*/

// ============================================================
// 1) Funciones de descuento (declaradas con function)
// ============================================================

// completa aqui: descuentoPorcentaje(precio, porcentaje)
// Debe devolver el precio con el porcentaje de descuento aplicado.
// Ejemplo: descuentoPorcentaje(100, 20) -> 80


// completa aqui: descuentoFijo(precio, monto)
// Debe devolver el precio menos el monto fijo.
// Si el monto es mayor al precio, devuelve 0.


// ============================================================
// 2) Funcion con parametros por defecto
// ============================================================

// completa aqui: calcularEnvio(precio, costoEnvio = 500)
// Si el precio supera 5000, el envio es gratis (devuelve 0).
// Si no, devuelve el costoEnvio.


// ============================================================
// 3) Funcion con rest parameters
// ============================================================

// completa aqui: sumarItems(...precios)
// Suma todos los precios y devuelve el total.


// ============================================================
// 4) Arrow functions
// ============================================================

// completa aqui: aplicarImpuesto = (precio, tasa = 21) => ...
// Devuelve el precio con el impuesto incluido.


// ============================================================
// 5) Scope y shadowing
// ============================================================

let total = 0; // esta es la variable global

function calcularTotal(precio, descuento) {
  // completa aqui: crea una variable local "total" que haga shadowing
  // sobre la global. Debe contener el precio con descuento aplicado.
}


// ============================================================
// 6) Flujo principal
// ============================================================

// Array de productos
const camisa = 3500;
const pantalon = 4200;
const zapatillas = 7800;

// Subtotal usando sumarItems
const subtotal = /* completa aqui: llama a sumarItems */;

// Descuento porcentaje (15%)
const conDescuento = /* completa aqui: llama a descuentoPorcentaje */;

// Impuesto (21%)
const conImpuesto = /* completa aqui: llama a aplicarImpuesto */;

// Envio
const envio = /* completa aqui: llama a calcularEnvio */;

// Total final
const totalFinal = conImpuesto + envio;

// ============================================================
// Salida
// ============================================================

console.log('--- Carrito ---');
console.log(`Camisa: ${camisa}`);
console.log(`Pantalon: ${pantalon}`);
console.log(`Zapatillas: ${zapatillas}`);
console.log(`Subtotal (sumarItems): ${subtotal}`);
console.log(`Descuento 15%: ${conDescuento}`);
console.log(`Impuesto 21%: ${conImpuesto}`);
console.log(`Envio: ${envio}`);
console.log(`Total final: ${totalFinal}`);
