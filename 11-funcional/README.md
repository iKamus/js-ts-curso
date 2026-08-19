# Modulo 11 - Programacion funcional

Programacion funcional es un estilo de codificacion donde todo se resuelve combinando **funciones**: pequenas recetas que reciben datos, los transforman y devuelven resultados, sin romper nada por el camino. En JavaScript se usa muchisimo porque te permite escribir codigo mas corto, mas predecible y mas facil de arreglar cuando algo falla.

---

## Funciones puras
- **Que es**: una funcion que, con los mismos argumentos, SIEMPRE devuelve el mismo resultado y NO toca nada de afuera. Es como una receta de cocina exacta: si pones los mismos ingredientes en el mismo orden, siempre sale el mismo plato, y no ensucias la mesada mientras cocinas.
- **Cuando usarla**: cuando queres que tu codigo sea predecible y facil de probar. Si una funcion pura falla, el problema esta en los datos que le llegaron, no en algun lado escondido.
- **Sintaxis**:
```js
// pura: solo usa sus argumentos
function sumar(a, b) {
  return a + b;
}

// impura: modifica algo externo
let total = 0;
function sumarImpura(n) {
  total += n; // toca la variable externa
}
```
- **Errores comunes**:
  - Modificar variables externas dentro de la funcion (contador global, array compartido).
  - Llamar a `Math.random()` o `Date.now()` adentro: la salida nunca es la misma.
  - Mutar un objeto o array que llego como parametro en vez de devolver uno nuevo.
- **Buenas practicas**:
  - Si necesitas "guardar" algo, devolve un valor nuevo, no mutes el original.
  - Si la funcion necesita un valor externo, pasalo como parametro.
  - Las funciones puras son faciles de testear: `expect(sumar(2,3)).toBe(5)`.

---

## Efectos colaterales
- **Que es**: todo lo que una funcion hace ADMAS de devolver un valor: escribir en consola, modificar una variable global, tocar el DOM, hacer un fetch. Es como un empleado que, ademas de hacer su trabajo, tambien mueve los muebles de la oficina sin que nadie le pida.
- **Cuando usarlo**: a veces son necesarios (grabar en una base de datos, mostrar algo en pantalla). El problema es cuando aparecen donde no los esperas.
- **Sintaxis**:
```js
// sin efectos colaterales
function calcularTotal(precios) {
  return precios.reduce((acc, p) => acc + p, 0);
}

// con efectos colaterales
let log = [];
function calcularTotal(precios) {
  log.push('calculando'); // efecto colateral: toca una variable externa
  return precios.reduce((acc, p) => acc + p, 0);
}
```
- **Errores comunes**:
  - Mezclar logica con efectos: la funcion calcula algo Y graba en base de datos.
  - Asumir que un efecto colateral "no importa" porque es pequeño.
  - Dependencias ocultas: dos funciones que escriben en la misma variable global.
- **Buenas practicas**:
  - Separa: la funcion pura calcula, otra funcion aparte hace el efecto.
  - Si un efecto es inevitable, documentalo claramente.
  - Minimiza los efectos colaterales: menos sorpresas, mas facil de depurar.

---

## Inmutabilidad
- **Que es**: no modificar datos existentes, sino crear copias nuevas con los cambios. Es como fotocopiar un documento antes de escribirle: el original queda intocado y la copia tiene tus anotaciones.
- **Cuando usarla**: siempre que trabajes con objetos o arrays que otros partes del codigo tambien usan. Especialmente en React, donde mutar el estado cause bugs invisibles.
- **Sintaxis**:
```js
// arrays
const original = [1, 2, 3];
const copia = [...original, 4];       // [1, 2, 3, 4]
const sinElPrimero = original.slice(1); // [2, 3]

// objetos
const persona = { nombre: 'Ana', edad: 25 };
const mayor = { ...persona, edad: persona.edad + 1 }; // { nombre: 'Ana', edad: 26 }
```
- **Errores comunes**:
  - `push()` y `splice()` mutan el array original.
  - Asignar con `=` a propiedades de un objeto: `obj.nuevo = valor` muta el objeto.
  - Usar `sort()` sin copiar antes: muta el array.
- **Buenas practicas**:
  - Usa `map`, `filter`, `reduce` en vez de `for` con `push`.
  - Usa spread (`...`) para crear copias superficialmente.
  - `Object.freeze()` puede ayudar, pero solo es superficial.

---

## Closures
- **Que es**: una funcion que "recuerda" las variables del lugar donde fue creada, incluso despues de que esa funcion original termino. Es como una mochila: la funcion nacio con sus cosas adentro y las sigue viendo aunque se mueva de lugar.
- **Cuando usarla**: para crear estados privados (contadores, toggles), fabricas de funciones, y cualquier vez que necesites que una funcion "se acuerde" de algo sin usar variables globales.
- **Sintaxis**:
```js
function crearSaludo(saludo) {
  return function(nombre) {
    return `${saludo}, ${nombre}!`;
  };
}
const hola = crearSaludo('Hola');
const chau = crearSaludo('Chau');
console.log(hola('Ana'));  // Hola, Ana!
console.log(chau('Luis')); // Chau, Luis!
```
- **Errores comunes**:
  - La variable capturada es compartida entre llamadas si es un array u objeto (se modifica en todas).
  - Olvidar que el closure "vive" mientras exista la funcion devuelta: puede causar memory leaks.
  - Confundir closure con referencia: `for` con `var` captura la referencia, no el valor.
- **Buenas practicas**:
  - Usa `let` o `const` dentro del closure para capturar valores, no referencias.
  - Usa closures para encapsular estado en vez de variables globales.
  - Cada llamada a la factory crea un closure independiente.

---

## Higher-order functions
- **Que es**: una funcion que recibe OTRAS funciones como parametro, o que devuelve OTRAS funciones como resultado. Es como un gerente que reparte tareas: no hace el trabajo directamente, sino que le dice a otros que lo hagan.
- **Cuando usarla**: todo el tiempo. `map`, `filter`, `reduce`, `sort`, `forEach` son higher-order functions. Tambien las factories (funciones que devuelven funciones) y los callbacks.
- **Sintaxis**:
```js
// recibe una funcion
function aplicarDosVeces(fn, valor) {
  return fn(fn(valor));
}
const duplicar = x => x * 2;
console.log(aplicarDosVeces(duplicar, 5)); // 20

// devuelve una funcion
function crearMultiplicador(factor) {
  return (numero) => numero * factor;
}
const porTres = crearMultiplicador(3);
console.log(porTres(10)); // 30
```
- **Errores comunes**:
  - Pasar el resultado de una funcion en vez de la funcion misma: `aplicarDosVeces(duplicar(5))` en vez de `aplicarDosVeces(duplicar)`.
  - Crear funciones anonimas en loops sin closures, generando bugs con `var`.
- **Buenas practicas**:
  - Aprovecha los metodos de array: `map`, `filter`, `reduce` son mas expresivos que loops.
  - Nombrá las funciones callback si son complejas: mejora la legibilidad.
  - Las factories son utiles para configurar comportamiento una vez y reusarlo muchas veces.

---

## Currying
- **Que es**: transformar una funcion que recibe varios argumentos de golpe `f(a, b)` en una cadena de funciones que reciben UN argumento cada una `f(a)(b)`. Es como armar un sandwich por etapas: primero elegis el pan, despues el relleno, y asi sucesivamente.
- **Cuando usarla**: para crear funciones especializadas a partir de una general. Por ejemplo, una funcion que calcula IVA puede curriearse para crear una que aplique IVA del 21%, otra del 10%, etc.
- **Sintaxis**:
```js
// basica
const sumar = (a) => (b) => a + b;
console.log(sumar(2)(3)); // 5

// practica: IVA
const sumarIVA = (iva) => (precio) => precio * (1 + iva);
const iva21 = sumarIVA(0.21);
const iva10 = sumarIVA(0.10);
console.log(iva21(100)); // 121
console.log(iva10(100)); // 110
```
- **Errores comunes**:
  - Olvidar un parentesis: `(a) => (b) => a + b` no es lo mismo que `(a, b) => a + b`.
  - Llamar a la funcion curriada de golpe: `sumar(2, 3)` en vez de `sumar(2)(3)`.
- **Buenas practicas**:
  - Nombrá las versiones curriadas especializadas: `const iva21 = sumarIVA(0.21)`.
  - Es util para configuracion, validacion por partes, y pipelines de transformacion.
  - No fuerces el currying donde no aporta: si la funcion solo se llama una vez, con dos argumentos alcanza.

---

## Composicion
- **Que es**: combinar dos o mas funciones para crear una nueva que ejecuta todas en orden. Es como una cadena de montaje: cada estacion hace su parte y le pasa el resultado a la siguiente, hasta tener el producto final.
- **Cuando usarla**: cuando necesitas transformar datos en varios pasos y queres que el codigo sea legible y reutilizable.
- **Sintaxis**:
```js
const toUpperCase = (s) => s.toUpperCase();
const exclamar = (s) => `${s}!`;
const gritar = (s) => exclamar(toUpperCase(s));
console.log(gritar('hola')); // HOLA!

// composition manual (de derecha a izquierda, como matematica)
function componer(fn2, fn1) {
  return (x) => fn2(fn1(x));
}
const gritarCompuesto = componer(exclamar, toUpperCase);
console.log(gritarCompuesto('hola')); // HOLA!
```
- **Errores comunes**:
  - Orden incorrecto: `componer(fn1, fn2)` ejecuta `fn1(fn2(x))`, no `fn2(fn1(x))`.
  - Intentar componer funciones con aridad (cantidad de argumentos) distinta sin adaptarlas.
- **Buenas practicas**:
  - Empeza con composicion manual y despues podes explorar utilities como `pipe`.
  - Mantene las funciones chicas y con una sola responsabilidad.
  - La composicion es mas legible que anidar llamadas multiples.

---

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-funciones-puras.js` | funciones puras, efectos colaterales, inmutabilidad |
| `ejemplos/02-higher-order.js` | higher-order functions: map, filter, reduce, factories |
| `ejemplos/03-closures-currying.js` | closures, currying y composicion |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-contador.js` | contador privado con closure |
| `ejercicios/ej-02-multiplicador.js` | factory de multiplicadores (currying) |
| `ejercicios/ej-03-descuentos.js` | descuentos con funciones puras y composicion |
| `ejercicios/ej-04-once.js` | ejecutar una funcion una sola vez |
