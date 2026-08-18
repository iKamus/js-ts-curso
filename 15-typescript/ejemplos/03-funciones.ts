// 03-funciones.ts — Funciones tipadas
// Las funciones acá son como recetas que declaran sus ingredientes
// (parámetros) y el plato final (lo que devuelven).

function sumar(a: number, b: number): number {
  return a + b;
}

const restar = (a: number, b: number): number => a - b;

// parámetro opcional (?) y por defecto:
// el apellido es como el extra de la receta: si no lo ponés, no pasa nada
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}

// rest tipado: ...numeros es number[]
// Aceptás todos los números que te pasen, como un cajón donde entra todo
function total(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0);
}

// void: no devuelve nada, solo hace el trabajo y listo
function log(mensaje: string): void {
  console.log(mensaje);
}

console.log(sumar(2, 3));         // 5
console.log(restar(10, 4));       // 6
console.log(saludar('Ana', 'Gomez')); // Ana Gomez
console.log(saludar('Luis'));     // Luis
console.log(total(1, 2, 3));      // 6
log('función void');