// 02-interfaces.ts — Interfaces y types
// Una interface es el plano de un objeto: te dice qué campos tiene que
// tener, como la ficha del alumno en la escuela.

// interface: define la "forma" de un objeto
interface Persona {
  nombre: string;
  edad: number;
  email?: string;       // opcional: puede no estar, como un teléfono de contacto
  readonly id: number;  // no se puede reasignar: es el número de documento
}

function presentar(p: Persona): string {
  return `${p.nombre} (${p.edad})`;
}

const ana: Persona = { nombre: 'Ana', edad: 30, id: 1 };
console.log(presentar(ana)); // Ana (30)
// ana.id = 2; // ERROR: readonly

// type alias para uniones: la caja acepta solo estos valores
type Estado = 'activo' | 'inactivo' | 'pendiente';
const estado: Estado = 'activo';
// const otro: Estado = 'roto'; // ERROR: 'roto' no es un Estado válido

// objetos con arrays tipados: campos que son listas de números
interface Inventario {
  nombre: string;
  cantidades: number[];
}

const stock: Inventario = { nombre: 'Depósito', cantidades: [10, 20, 30] };
console.log(stock);