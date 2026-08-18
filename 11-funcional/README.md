# Módulo 11 — Programación funcional

En este módulo vas a ver una forma de pensar el código como si armaras recetas: funciones claras que combinás para conseguir algo más grande. Es un estilo que se usa muchísimo en JavaScript de verdad, así que dale que vale la pena.

## Funciones puras
Misma entrada → misma salida, y **sin efectos colaterales** (no tocan nada externo). Es como la receta de la torta: si ponés los mismos ingredientes, sale siempre la misma torta, y no ensuciás la cocina mientras tanto.
```js
function pura(a, b) { return a + b; }        // pura
let total = 0;                               // impura: modifica una variable externa
function impura(n) { total += n; }
```
Una función impura sería como ese amigo que al llegar te cambia los apuntes del cuaderno: cada vez que la llamás, deja el mundo de afuera distinto. No es que esté mal, pero es más difícil de controlar.

## Inmutabilidad
No modificar datos: creá copias nuevas (`...array`, `{ ...obj }`, `map`, `filter`) en vez de mutar. Es como fotocopiar la hoja en vez de escribir sobre la original: la original queda igual para siempre y la copia la podés usar tranquilo.

## Closures
Una función que **recuerda** el entorno donde fue creada. Es como una mochila que te acompaña: la función nació con sus cosas adentro y las sigue viendo aunque se mueva de lugar.
```js
function crearContador() {
  let cuenta = 0;
  return { incrementar() { cuenta++; return cuenta; } };
}
```
La variable `cuenta` queda "capturada" y es privada. Cada llamada crea un entorno independiente, como si cada compañero tuviera su propia mochila con su propio contenido.

## Higher-order functions
Funciones que **reciben funciones** (`map`, `filter`, `reduce`, callbacks) o **devuelven funciones** (factories). Es como delegar: le pasás la tarea a alguien que sabe repartir trabajo, y él la distribuye entre los demás.

## Currying
Transformar `f(a, b)` en `f(a)(b)`. Útil para reutilizar config: es como preparar la salsa una vez y usarla para varios platos sin tener que mezclarla de nuevo.
```js
const sumarIVA = iva => precio => precio * (1 + iva);
const iva21 = sumarIVA(0.21);
iva21(100); // 121
```

## Composición
Encadenar funciones: `gritar = (s) => exclamar(toUpperCase(s))`. Es como una cadena de producción: cada estación hace su parte y le pasa el resultado a la siguiente, hasta tener el producto final.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-closures.js` | closures y estado privado |
| `ejemplos/02-high-order.js` | higher-order functions y callbacks |
| `ejemplos/03-currying.js` | currying, composición, funciones puras |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-contador.js` | contador con closure |
| `ejercicios/ej-02-multiplicador.js` | factory de multiplicadores |
| `ejercicios/ej-03-descuentos.js` | descuentos con funciones puras |
| `ejercicios/ej-04-once.js` | ejecutar una sola vez |