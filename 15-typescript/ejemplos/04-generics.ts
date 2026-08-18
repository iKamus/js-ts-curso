// 04-generics.ts — Genéricos
// Los genéricos son como una caja que sirve para cualquier contenido:
// la misma función se adapta a lo que le pases, y TS se da cuenta solo.

// T es un parámetro de tipo: se define según lo que pases
// Es como un molde que se llena con la forma de lo que entra
function primero<T>(lista: T[]): T | undefined {
  return lista[0];
}

console.log(primero([1, 2, 3]));         // 1
console.log(primero(['a', 'b']));        // 'a'

// se puede especificar explícito, para ser más claro todavía
const primerNumero = primero<number>([10, 20]);
console.log(primerNumero); // 10

// genéricos con clases: una caja que guarda lo que vos digas
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
// Pick elige una parte del plano, Partial hace todo opcional
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}
type SoloNombre = Pick<Usuario, 'nombre'>;    // { nombre: string }
type Parcial = Partial<Usuario>;              // todas las propiedades opcionales

const parcial: Parcial = { nombre: 'Ana' };
const nombreSolo: SoloNombre = { nombre: 'Ana' };
console.log(parcial, nombreSolo);