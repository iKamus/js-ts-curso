# Módulo 03 — Funciones

# Módulo 03 — Funciones

## ¿Qué es una función?
Una función es una receta de cocina: le pasás ingredientes (los parámetros) y te devuelve el plato listo (el `return`). La declarás una vez y la podés usar (llamar) todas las veces que quieras, con distintos ingredientes.

## Declaración (function)
Pensá en una función como una receta de cocina: le pasás ingredientes (los parámetros) y te devuelve el plato listo (el `return`).
```js
function sumar(a, b) {
  return a + b;   // el return es el plato listo: lo que devuelve la receta
}
```
- **Hoisting**: las funciones declaradas se pueden usar antes de su definición, como si la receta ya estuviera pegada en la heladera antes de empezar a cocinar.
- Si no hay `return`, devuelven `undefined` (el plato sale vacío, no hay resultado).
- Pueden tener varios `return` para cortar temprano, como salir de la fila en cuanto conseguías lo que buscabas.
- Para llamarla: `sumar(2, 3)` — los valores entre paréntesis son los ingredientes que le pasás.
- Para llamarla: `sumar(2, 3)` — los valores entre paréntesis son los ingredientes que le pasás.
```js
function sumar(a, b) {
  return a + b;
}
```
- **Hoisting**: las funciones declaradas se pueden usar antes de su definición, como si la receta ya estuviera pegada en la heladera antes de empezar a cocinar.
- Si no hay `return`, devuelven `undefined` (el plato sale vacío, no hay resultado).
- Pueden tener varios `return` para cortar temprano, como salir de la fila en cuanto conseguís lo que buscabas.

## Arrow functions
Son las funciones escritas con la flecha `=>`, la versión cortita:
```js
const sumar = (a, b) => a + b;   // retorno implícito (sin escribir return)
const doble = x => x * 2;        // un solo parámetro sin paréntesis
const mayor = (a, b) => {        // con llaves: return explícito
  if (a > b) return a;
  return b;
};
```
Las arrows **no tienen su propio `this`** (lo heredan del contexto en el que viven) — lo vas a ver en clases y callbacks.

## Parámetros
Son los ingredientes que entran a la receta:
- **Por defecto**: `function saludo(nombre = 'Anónimo')` (si no te pasan nada, ya tenés un plan B)
- **Rest**: `function sumarTodos(...numeros)` junta los sobrantes en un array, como juntar todas las monedas que sobran en la bolsa
- `arguments` (solo en funciones clásicas) tiene todos los argumentos que te pasaron

## Scope (alcance)
Es hasta dónde llega a vivir una variable, como el radio de la mochila: lo que metés adentro se queda ahí.
- `let`/`const` viven dentro de su **bloque** `{ }`
- `var` escapa del bloque (otra razón para no usarlo)
- una variable local **tapa** a la global del mismo nombre (shadowing), como cuando el nombre de tu compañero de banco tapa al del registro

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-declaracion.js` | declaración, hoisting, return |
| `ejemplos/02-arrow.js` | arrow functions |
| `ejemplos/03-parametros.js` | defaults, rest, arguments |
| `ejemplos/04-scope.js` | scope y shadowing |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-operaciones.js` | La calculadora básica: sumar/restar/multiplicar/dividir |
| `ejercicios/ej-02-esPar.js` | esPar: decidir si un número es par |
| `ejercicios/ej-03-factorial.js` | factorial recursivo: la función que se llama a sí misma |
| `ejercicios/ej-04-maximo.js` | máximo con rest params: el más grande de todos |
| `ejercicios/ej-05-palindromo.js` | palíndromo: la palabra que se lee igual al derecho y al revés |