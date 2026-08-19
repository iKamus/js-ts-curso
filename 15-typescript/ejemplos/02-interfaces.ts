// 02-interfaces.ts — Interfaces y types
// Una interface es el plano de un objeto: te dice qué campos tiene que
// tener, como la ficha del alumno en la escuela.

// interface: define la "forma" de un objeto
interface Persona {
  nombre: string;
  edad: number;
  email?: string;       // opcional: puede no estar
  readonly id: number;  // no se puede reasignar
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
// const otro: Estado = 'roto'; // ERROR: 'roto' no es un Estado valido

// type alias para tipos compuestos
type Coordenada = { x: number; y: number };
const pos: Coordenada = { x: 10, y: 20 };
console.log(pos);

// objetos con arrays tipados
interface Inventario {
  nombre: string;
  cantidades: number[];
}

const stock: Inventario = { nombre: 'Deposito', cantidades: [10, 20, 30] };
console.log(stock);
