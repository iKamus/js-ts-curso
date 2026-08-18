# Módulo 02 — Control de flujo

## Condicionales: if / else if / else
Son las decisiones del programa, como cuando elegís qué hacer según el clima: si llueve llevás paraguas, si hace calor llevás agua, si no, salís nomás.
```js
if (condicion) {
  // ...
} else if (otra) {
  // ...
} else {
  // ...
}
```
Siempre usá llaves, aunque sea de una línea. Mejor de más que de menos, así el programa no interpreta mal lo que querés decir.

## switch
Cuando comparás siempre el mismo valor, como fijarte qué día es para saber si hay que ir a la escuela, el `switch` es más prolijo que una ristra de `else if`. Ojo con el `break`: sin él, el flujo "se cae" al siguiente `case` y hace cosas que no querías, como si al elegir "martes" te sirvieran también la comida de miércoles.

## Ternario
Es un `if` exprimido en una línea, como decidir entre dos opciones con una moneda:
```js
const estado = nota >= 7 ? 'aprobado' : 'desaprobado';
```
Si la condición se cumple, toma la primera opción; si no, la segunda.

## Valores truthy y falsy
Son **falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`. **Todo lo demás es truthy** (incluidos `[]` y `{}`). Pensalo así: en la vida real "no hay nada" son esos valores, y cualquier otra cosa cuenta como "hay algo". Esto se aprovecha con `||` (primer valor truthy, como un plan B) y `&&`.

## Bucles
Repetir acciones como una playlist en modo repetición:
- `for` → cuando sabés cuántas veces, como dar 10 vueltas a la manzana
- `while` → cuando la condición define el final, como seguir comiendo hasta que se acaba la empanada
- `do...while` → ejecuta al menos una vez, como probar la sopa antes de decidir si seguís
- `break` corta (frenás de golpe) y `continue` salta a la siguiente vuelta (te saltás una canción)

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-if-else.js` | condicionales |
| `ejemplos/02-switch.js` | switch |
| `ejemplos/03-ternario.js` | ternario |
| `ejemplos/04-truthy-falsy.js` | truthy/falsy y `\|\|`/`&&` |
| `ejemplos/05-bucles.js` | for / while / do-while |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-nota.js` | De la nota a un concepto, como la libreta del cole |
| `ejercicios/ej-02-fizzbuzz.js` | FizzBuzz, el clásico de las entrevistas |
| `ejercicios/ej-03-switch-dias.js` | Días de la semana y sus planes |
| `ejercicios/ej-04-edad.js` | Clasificar por edad, como elegir la entrada según la edad |
| `ejercicios/ej-05-login.js` | Validación compuesta, como revisar varias condiciones antes de abrir la puerta |