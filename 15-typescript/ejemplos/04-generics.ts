// 04-generics.ts — Genericos y utility types
// Los genericos son como una caja que sirve para cualquier contenido:
// la misma funcion se adapta a lo que le pases, y TS se da cuenta solo.

// T es un parametro de tipo: se define segun lo que pases
function primero<T>(lista: T[]): T | undefined {
  return lista[0];
}

console.log(primero([1, 2, 3]));         // 1
console.log(primero(['a', 'b']));        // 'a'

// se puede especificar explicito
const primerNumero = primero<number>([10, 20]);
console.log(primerNumero); // 10

// generico con restricccion
function larga<T extends { length: number }>(valor: T): number {
  return valor.length;
}
console.log(larga('hello'));    // 5
console.log(larga([1, 2, 3])); // 3

// generico con clases: una caja que guarda lo que vos digas
class Caja<T> {
  contenido?: T;

  guardar(valor: T) {
    this.contenido = valor;
  }
  obtener(): T | undefined {
    return this.contenido;
  }
}

const cajaDeTextos = new Caja<string>();
cajaDeTextos.guardar('hola');
console.log(cajaDeTextos.obtener()); // hola

// utility types: herramientas que TS te da para transformar tipos
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

// Pick: elige solo algunas propiedades del tipo
type SoloNombre = Pick<Usuario, 'nombre'>;    // { nombre: string }
const nombreSolo: SoloNombre = { nombre: 'Ana' };

// Partial: todas las propiedades se vuelven opcionales
type Parcial = Partial<Usuario>;              // todas opcionales
const parcial: Parcial = { nombre: 'Ana' };

// Required: todas las propiedades se vuelven obligatorias (lo contrario de Partial)
interface Config {
  color?: string;
  tamano?: number;
}
type ConfigCompleta = Required<Config>;
const config: ConfigCompleta = { color: 'rojo', tamano: 10 };

// Record: crea un objeto con keys de un tipo y values de otro
type Notas = Record<string, number>;
const notas: Notas = { Ana: 9, Luis: 7 };

console.log(parcial, nombreSolo, config, notas);
