// 01-tipos-basicos.ts — Anotacion de tipos
// Acá le ponemos etiqueta a cada caja: decimos qué va adentro y TS
// nos corrige la tarea antes de entregarla.

// Anotacion explícita: declaramos el tipo nosotros mismos
const nombre: string = 'Ana';
const edad: number = 30;
const activo: boolean = true;
const tags: string[] = ['js', 'ts'];
const cantidades: number[] = [1, 2, 3];

// Inferencia: TS deduce el tipo solo, como un profe que sabe
// de qué va tu código con solo mirarlo
let ciudad = 'Cordoba';
// ciudad = 42; // ERROR: number no es asignable a string

// Union type: la caja acepta uno u otro formato
let id: number | string = 'abc-123';
id = 456; // ok

// any: desactiva el chequeo (evitar)
// Es como sacarle la etiqueta a la caja: perdes la garantia
let loQueSea: any = 1;
loQueSea = 'ahora un string';

// null / undefined son tipos
const vacio: null = null;
const indefinido: undefined = undefined;

// literal type: solo acepta un valor exacto
type Direccion = 'arriba' | 'abajo' | 'izquierda' | 'derecha';
const dir: Direccion = 'arriba';
console.log(dir);

// void: para funciones que no devuelven nada (lo ves en funciones.ts)

console.log(nombre, edad, activo, tags, cantidades, ciudad, id, loQueSea, vacio, indefinido);
