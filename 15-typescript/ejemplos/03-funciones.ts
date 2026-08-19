// 03-funciones.ts — Funciones tipadas
// Las funciones acá son como recetas que declaran sus ingredientes
// (parametros) y el plato final (lo que devuelven).

// funcion basica con tipos
function sumar(a: number, b: number): number {
  return a + b;
}

const restar = (a: number, b: number): number => a - b;

// parametro opcional (?) y por defecto
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}

function saludarConDefecto(nombre: string, saludo: string = 'Hola'): string {
  return `${saludo}, ${nombre}`;
}

// rest tipado: ...numeros es number[]
function total(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0);
}

// void: no devuelve nada, solo hace el trabajo y listo
function log(mensaje: string): void {
  console.log(mensaje);
}

// tipo de retorno como tipo custom
type Resultado = { exito: boolean; mensaje: string };

function procesar(dato: string): Resultado {
  if (dato.length > 0) {
    return { exito: true, mensaje: 'OK' };
  }
  return { exito: false, mensaje: 'Vacio' };
}

console.log(sumar(2, 3));                // 5
console.log(restar(10, 4));              // 6
console.log(saludar('Ana', 'Gomez'));    // Ana Gomez
console.log(saludar('Luis'));            // Luis
console.log(saludarConDefecto('Pedro')); // Hola, Pedro
console.log(total(1, 2, 3));            // 6
log('funcion void');
console.log(procesar('dato'));           // { exito: true, mensaje: 'OK' }
console.log(procesar(''));               // { exito: false, mensaje: 'Vacio' }
