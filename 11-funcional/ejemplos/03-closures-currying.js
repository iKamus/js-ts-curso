// 03-closures-currying.js — Closures, currying y composicion

// =============================================
// CLOSURES
// =============================================
// Una closure es una funcion que "recuerda" las variables del lugar donde nació.
// Es como una mochila: la funcion nacio con sus cosas adentro y no las pierde.

function crearContador() {
  let cuenta = 0; // variable privada, solo accesible desde dentro
  return {
    incrementar() { cuenta++; return cuenta; },
    ver() { return cuenta; },
    reset() { cuenta = 0; },
  };
}

const contador = crearContador();
contador.incrementar();
contador.incrementar();
console.log('Contador:', contador.ver()); // 2

// Cada llamada a crearContador crea un entorno SEPARADO
const contador2 = crearContador();
contador2.incrementar();
console.log('Contador 2:', contador2.ver()); // 1
console.log('Contador 1:', contador.ver());  // 2 (no se pisan)

// =============================================
// CURRYING
// =============================================
// Currying: f(a, b) se convierte en f(a)(b)
// Es como armar un sandwich por etapas: primero elegis el pan, despues el relleno.

const sumar = (a) => (b) => a + b;
console.log('Currying 2+3:', sumar(2)(3)); // 5

// Util para reutilizar configuracion
const sumarIVA = (iva) => (precio) => +(precio * (1 + iva)).toFixed(2);
const iva21 = sumarIVA(0.21);
const iva10 = sumarIVA(0.10);
console.log('IVA 21% sobre 100:', iva21(100)); // 121
console.log('IVA 10% sobre 100:', iva10(100)); // 110

// Currying para crear funciones especializadas
const crearSaludo = (saludo) => (nombre) => `${saludo}, ${nombre}!`;
const hola = crearSaludo('Hola');
const buenas = crearSaludo('Buenas tardes');
console.log(hola('Ana'));     // Hola, Ana!
console.log(buenas('Luis'));  // Buenas tardes, Luis!

// =============================================
// COMPOSICION
// =============================================
// Composicion: encadenar funciones, cada una hace su parte y le pasa el resultado a la siguiente.
// Es como una cadena de produccion: pelas, cortas y cocinas.

const toUpperCase = (s) => s.toUpperCase();
const exclamar = (s) => `${s}!`;
const gritar = (s) => exclamar(toUpperCase(s));
console.log('Composicion manual:', gritar('hola')); // HOLA!

// Funcion componer generica (de derecha a izquierda)
function componer(fn2, fn1) {
  return (x) => fn2(fn1(x));
}
const gritarCompuesto = componer(exclamar, toUpperCase);
console.log('Composicion con componer:', gritarCompuesto('hola')); // HOLA!

// Composicion de tres funciones
const agregarPuntos = (s) => `${s}...`;
const tripleComposicion = (s) => agregarPuntos(exclamar(toUpperCase(s)));
console.log('Triple composicion:', tripleComposicion('hola')); // HOLA!...
