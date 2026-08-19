# Módulo 01 — Fundamentos de JavaScript

Primer módulo: las piezas básicas con las que se arma TODO programa en JS. Guardar datos, saber de qué tipo son, hacer cuentas y armar texto. Piénsalo como aprender las letras antes de formar palabras.

## Cómo correr
Node ejecuta JS línea por línea, sin pasar por un compilador. Desde esta carpeta:
```
node ejemplos/01-variables.js
```
El comando se corre SIEMPRE desde la carpeta del módulo (donde está este README), porque las rutas como `ejemplos/...` son relativas a esa carpeta.

---

## const
- **Qué es**: una caja sellada. Creas la caja, le pones un contenido, y ese contenido no cambia más. Si intentas reasignarla, Node tira error.
- **Cuándo usarlo**: **por defecto en todo**. Casi todas las constantes se declaran con `const`. Solo usa `let` cuando el valor vaya a cambiar.
- **Sintaxis**: `const nombre = 'valor';`

```js
const PI = 3.14;
const nombre = 'Ana';
// PI = 3.1415;  // ERROR: Assignment to constant variable
```

- **Errores comunes**:
  - Olvidar el valor inicial: `const x;` tira `SyntaxError`. Siempre declara con valor.
  - Pensar que `const` no cambia: no cambia la *referencia* (la caja no se reemplaza), pero si el contenido es un objeto o array, sus *propiedades internas sí se pueden modificar* (lo ves en módulo 05).
- **Buenas prácticas**: usa `const` siempre. Solo cambia a `let` si sabes que el valor va a reasignarse.

---

## let
- **Qué es**: una caja que se puede abrir y reemplazar el contenido. Declaras la variable con un valor, y después le puedes poner otro.
- **Cuándo usarlo**: cuando el valor va a cambiar. Contadores, acumuladores, flags que se actualizan, variables que reciben distintos valores según la lógica.
- **Sintaxis**: `let edad = 30;`

```js
let saldo = 100;
saldo = saldo - 30;  // reasignar: válido
console.log(saldo);   // 70
```

- **Errores comunes**:
  - `let` sin valor inicial: funciona (`let x;` → `x` es `undefined`), pero confunde. Si puedes, inicializa siempre.
  - Declarar dos veces: `let x = 1; let x = 2;` en el mismo scope tira `SyntaxError`.
- **Buenas prácticas**: no reasignes más de lo necesario. Si algo puede ser `const`, que sea `const`.

---

## var
- **Qué es**: la variable vieja del JavaScript original (antes de 2015). Funciona parecido a `let` pero tiene trampas: se escapa del bloque `{ }` en el que se declara y genera bugs difíciles de encontrar.
- **Cuándo usarlo**: **casi nunca**. Solo en código heredado (que alguien escribió antes). En código nuevo, no la uses.
- **Sintaxis**: `var vieja = 'no la uses';`

```js
if (true) {
  var escapa = 'aquí';
}
console.log(escapa); // 'aquí' ← ¡oops! La variable se salió del if
// Con let pasaría: console.log(escapa); // ReferenceError
```

- **Errores comunes**: la trampa principal es que `var` ignora los bloques `{ }`. Si la declaras dentro de un `if` o un `for`, afuera sigue existiendo. `let` y `const` no: se quedan dentro del bloque.
- **Buenas prácticas**: bórrala de tu vocabulario. Usa `const` por defecto, `let` cuando necesites reasignar.

---

## Nombres de variables
- **Qué es**: la etiqueta que le pones a la caja para encontrarla después.
- **Reglas**:
  - Arrancan con letra, `$` o `_` (`nombre`, `$total`, `_contador`).
  - Pueden tener letras, números, `$` y `_` (`edad2`, `precio_final`).
  - **No pueden** arrancar con número (`2nombre` → error), ser palabras reservadas (`const`, `if`, `return` → error) ni tener espacios o guiones (`mi-nombre` → error).
  - JavaScript es **case-sensitive**: `nombre` y `Nombre` son dos variables distintas.
- **Convenciones** (no son reglas de JS, pero todo el mundo las usa):
  - `camelCase` para variables y funciones: `precioFinal`, `calcularTotal()`.
  - `PascalCase` para clases (lo ves en módulo 08): `class Persona`.
  - `SCREAMING_SNAKE_CASE` para constantes globales reales: `const API_URL = '...'`.

---

## typeof
- **Qué es**: operador que te dice el tipo de un valor. Es como la etiqueta que dice qué contiene el frasco.
- **Cuándo usarlo**: cuando necesitas saber si algo es un número, un texto, un booleano, etc. Muy útil para validar entradas.
- **Sintaxis**: `typeof valor` (retorna un string)

```js
typeof 42;          // 'number'
typeof 'hola';      // 'string'
typeof true;        // 'boolean'
typeof undefined;   // 'undefined'
typeof null;        // 'object'  ← ¡BUG HISTÓRICO de JS! null no es un objeto
typeof [1, 2];      // 'object'  (los arrays son objetos en JS)
typeof {};           // 'object'
```

- **Errores comunes**:
  - `typeof null === 'object'` es un bug de 1995 que nunca se arregló por compatibilidad. No te confundas: `null` no es un objeto.
  - Para saber si algo es un array, usa `Array.isArray(valor)` en vez de `typeof`.
- **Buenas prácticas**: `typeof` retorna un string, así que compara con strings: `typeof x === 'number'`.

---

## number
- **Qué es**: el tipo numérico. En JS hay UN solo tipo para enteros y decimales (no hay `int` y `float` separados).
- **Cuándo usarlo**: para cualquier cuenta matemática, índices, cantidades, precios, edades, etc.
- **Sintaxis**: `const edad = 30; const pi = 3.14; const neg = -7;`

```js
const entero = 42;
const decimal = 3.14;
const negativo = -7;
const infinito = Infinity;  // el resultado de dividir entre 0
const noEsNum = NaN;        // resultado de operaciones inválidas como 'hola' * 2
```

### Métodos y propiedades de number

| Método / Propiedad | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `.toFixed(n)` | redondea a `n` decimales y devuelve un **string** | `(3.1416).toFixed(2)` | `'3.14'` |
| `.toString()` | convierte el número a string | `(25).toString()` | `'25'` |
| `.toString(base)` | convierte a la base indicada (2=binary, 16=hex) | `(255).toString(16)` | `'ff'` |
| `Number.isInteger(x)` | ¿es entero? | `Number.isInteger(4.5)` | `false` |
| `Number.isNaN(x)` | ¿es NaN de verdad? (más estricto que `isNaN()`) | `Number.isNaN(NaN)` | `true` |
| `parseInt(s, base)` | extrae el número entero de un string | `parseInt('42px')` | `42` |
| `parseFloat(s)` | extrae el número decimal de un string | `parseFloat('3.14cm')` | `3.14` |
| `Number(s)` | convierte un string a número (si no puede, da `NaN`) | `Number('123')` | `123` |
| `+s` | atajo para convertir string a número | `+'42'` | `42` |
| `Math.PI` | la constante π | `Math.PI` | `3.14159265...` |
| `Infinity` | infinito positivo | `10 / 0` | `Infinity` |
| `-Infinity` | infinito negativo | `-10 / 0` | `-Infinity` |
| `NaN` | "Not a Number" | `'hola' * 2` | `NaN` |

- **Errores comunes**:
  - `0.1 + 0.2` no da `0.3` exacto: da `0.30000000000000004`. Es un problema de precisión de punto flotante de todos los lenguajes. Para comparar decimales, redondea antes o usa una tolerancia: `Math.abs((0.1 + 0.2) - 0.3) < 0.0001`.
  - `parseInt('hola')` da `NaN`. Siempre valida con `Number.isNaN()` antes de usar el resultado.
  - `toFixed()` devuelve un **string**, no un number. Si necesitas un número después, convierte: `Number(num.toFixed(2))`.
- **Buenas prácticas**: para comparar decimales, redondea con `toFixed()` antes de comparar. Para validaciones, usa `Number.isNaN()` en vez de `isNaN()`.

---

## string
- **Qué es**: texto. Cualquier cosa entre comillas simples `'...'`, comillas dobles `"..."` o backticks `` `...` ``.
- **Cuándo usarlo**: nombres, mensajes, rutas, direcciones, cualquier contenido de texto.
- **Sintaxis**: `const nombre = 'Ana';` o `const msg = "Hola";`

```js
const saludo = 'Hola mundo';
console.log(saludo.length);  // 10
```

**Los strings son INMUTABLES**: ningún método modifica el original. Todos devuelven un string nuevo. Es como escribir con lápiz: sacas una fotocopia, escribes en la copia, el original queda igual.

### Métodos de string

| Método | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `.length` | cantidad de caracteres | `'hola'.length` | `4` |
| `.toUpperCase()` | todo a mayúsculas | `'hola'.toUpperCase()` | `'HOLA'` |
| `.toLowerCase()` | todo a minúsculas | `'HOLA'.toLowerCase()` | `'hola'` |
| `.trim()` | saca espacios de los extremos | `'  hola  '.trim()` | `'hola'` |
| `.trimStart()` | saca espacios del inicio | `'  hola'.trimStart()` | `'hola'` |
| `.trimEnd()` | saca espacios del final | `'hola  '.trimEnd()` | `'hola'` |
| `.includes(sub)` | ¿contiene el substring? | `'hola'.includes('ol')` | `true` |
| `.startsWith(sub)` | ¿empieza con? | `'hola'.startsWith('ho')` | `true` |
| `.endsWith(sub)` | ¿termina con? | `'hola'.endsWith('la')` | `true` |
| `.indexOf(sub)` | posición del substring (o `-1`) | `'hola'.indexOf('ol')` | `1` |
| `.lastIndexOf(sub)` | última posición del substring | `'hola ola'.lastIndexOf('ola')` | `6` |
| `.slice(inicio, fin)` | recorta el string (fin no incluido) | `'hola'.slice(1, 3)` | `'ol'` |
| `.slice(inicio)` | recorta desde inicio hasta el final | `'hola'.slice(1)` | `'ola'` |
| `.slice(-n)` | recorta los últimos `n` caracteres | `'hola'.slice(-2)` | `'la'` |
| `.split(sep)` | divide el string en un array | `'a,b,c'.split(',')` | `['a','b','c']` |
| `.split('')` | separa cada carácter | `'hola'.split('')` | `['h','o','l','a']` |
| `.replace viejo, nuevo)` | reemplaza la **primera** aparición | `'hola hola'.replace('hola', 'chau')` | `'chau hola'` |
| `.replaceAll(viejo, nuevo)` | reemplaza **todas** las apariciones | `'hola hola'.replaceAll('hola', 'chau')` | `'chau chau'` |
| `.charAt(i)` | carácter en la posición `i` | `'hola'.charAt(1)` | `'o'` |
| `[i]` | carácter en la posición `i` (atajo) | `'hola'[1]` | `'o'` |
| `.padStart(n, char)` | rellena por la izquierda hasta `n` chars | `'7'.padStart(3, '0')` | `'007'` |
| `.padEnd(n, char)` | rellena por la derecha hasta `n` chars | `'12'.padEnd(4, '.')` | `'12..'` |
| `.repeat(n)` | repite el string `n` veces | `'ha'.repeat(3)` | `'hahaha'` |
| `.concat(otro)` | une dos strings | `'hola'.concat(' mundo')` | `'hola mundo'` |
| `+` | une dos strings (más común que concat) | `'hola' + ' mundo'` | `'hola mundo'` |
| `String(x)` | convierte cualquier valor a string | `String(42)` | `'42'` |
| `` `${x}` `` | convierte a string (template literal) | `` `${42}` `` | `'42'` |

- **Errores comunes**:
  - `string.length` es una propiedad, no un método: no pongas paréntesis (`length()` → error).
  - `'hola'[99]` no tira error, da `undefined`. Cuidado con índices fuera de rango.
  - `replace` sin `replaceAll` solo cambia la primera aparición. Si necesitas cambiar todas, usa `replaceAll`.
  - `'123'` es un string, no un número. Para operar como número, convierte: `Number('123')` o `+'123'`.
  - `trim()` saca espacios, tabs (`\t`) y saltos de línea (`\n`, `\r`) de los extremos, no solo espacios.
- **Buenas prácticas**: usa template literals para armar textos con variables (ver keyword más abajo). Para medir texto, usa `.length`. Para cortar, `.slice()` (no `.substring()` que es más viejo y confuso).

---

## boolean
- **Qué es**: el tipo `true` (verdadero) o `false` (falso). El sí o el no, como responder una pregunta.
- **Cuándo usarlo**: resultados de comparaciones, flags, condiciones en `if`.
- **Sintaxis**: `const activo = true;`

```js
const esMayor = 18 >= 18;  // true
const tieneDescuento = false;
```

### Métodos/funciones para boolean

| Función | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `Boolean(x)` | convierte a boolean | `Boolean('hola')` | `true` |
| `!!x` | atajo para convertir a boolean | `!!42` | `true` |
| `Boolean(0)` | 0 se comporta como falso | `Boolean(0)` | `false` |
| `Boolean('')` | string vacío se comporta como falso | `Boolean('')` | `false` |
| `Boolean(null)` | null se comporta como falso | `Boolean(null)` | `false` |
| `Boolean(undefined)` | undefined se comporta como falso | `Boolean(undefined)` | `false` |
| `Boolean(NaN)` | NaN se comporta como falso | `Boolean(NaN)` | `false` |
| `Boolean([])` | array vacío se comporta como verdadero | `Boolean([])` | `true` |
| `Boolean({}`) | objeto vacío se comporta como verdadero | `Boolean({})` | `true` |

- **Errores comunes**: `Boolean([])` y `Boolean({})` dan `true` aunque estén vacíos. Un array vacío y un objeto vacío se consideran "algo" (no son "nada").
- **Buenas prácticas**: no seas redundante. En vez de `if (activo === true)`, escribe `if (activo)`. En vez de `if (nombre !== '')`, escribe `if (nombre)`.

---

## undefined
- **Qué es**: una variable declarada sin valor. La caja existe pero está vacía.
- **Cuándo ocurre**: cuando declaras `let x;` sin asignarle nada, o cuando una función no devuelve nada explícitamente.

```js
let nombre;
console.log(nombre); // undefined

function saludar() { console.log('hola'); }
const resultado = saludar();
console.log(resultado); // undefined (no retornó nada)
```

- **Buenas prácticas**: si declaras algo, asígnale un valor. No dejar `undefined` a propósito confunde.

---

## null
- **Qué es**: "vacío a propósito". A diferencia de `undefined` (la caja se olvidó de llenarla), `null` es vaciar la caja deliberadamente.
- **Cuándo usarlo**: cuando quieres indicar que un valor es intencionalmente "nada". Por ejemplo: buscar algo y no encontrarlo → devolver `null`.

```js
const usuario = null;  // existe pero no tiene datos
const precio = 0;      // tiene un valor (cero no es null)
```

- **Errores comunes**: `null` no es `undefined`. `null` es "vacío a propósito"; `undefined` es "no se asignó". Son valores distintos (`null === undefined` → `false`).
- **Buenas prácticas**: para comparar, usa `===` (nunca `==`): `valor === null` en vez de `valor == null` (que también matchea `undefined`).

---

## object
- **Qué es**: una colección de pares clave-valor. Es como una ficha con casillas: `{ nombre: 'Ana', edad: 30 }`. Los arrays también caen en esta categoría.
- **Cuándo usarlo**: cuando necesitas agrupar datos relacionados.
- **Sintaxis**: `const persona = { nombre: 'Ana', edad: 30 };`

```js
const persona = { nombre: 'Ana', edad: 30 };
console.log(persona.nombre);   // 'Ana'
console.log(persona['edad']);  // 30

const frutas = ['manzana', 'pera'];
console.log(frutas[0]);        // 'manzana'
```

Los detalles de objetos y arrays los ves en los módulos 04 y 05.

---

## Operadores aritméticos
- **Qué es**: las cuentas de la vida diaria.
- **Cuándo usarlo**: para cualquier cálculo matemático.

| Operador | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `+` | sumar | `5 + 3` | `8` |
| `-` | restar | `5 - 3` | `2` |
| `*` | multiplicar | `5 * 3` | `15` |
| `/` | dividir | `5 / 2` | `2.5` |
| `%` | resto (lo que sobra de la división) | `5 % 2` | `1` |
| `**` | potencia | `2 ** 10` | `1024` |

```js
console.log(5 + 3);    // 8
console.log(10 / 3);   // 3.33333...
console.log(10 % 3);   // 1
console.log(2 ** 10);  // 1024
```

**¡Cuidado! `^` NO es potencia en JS**. `^` es XOR (operador de bits). La potencia SIEMPRE es `**`.

```js
console.log(5 ** 2);  // 25 (cinco al cuadrado)
console.log(5 ^ 2);   // 7  (¡NO es 25! XOR de bits: 101 ^ 010 = 111)
```

### Precedencia de operadores (de mayor a menor)
1. `**` (potencia)
2. `*`, `/`, `%` (multiplicación, división, resto)
3. `+`, `-` (suma, resta)
4. `<`, `>`, `<=`, `>=` (comparación)
5. `==`, `===` (igualdad)
6. `&&` (y lógico)
7. `||` (o lógico)
8. `=` (asignación)

Cuando tengas dudas, usa paréntesis: `(a + b) * c`. Más claro y menos propenso a errores.

---

## Operadores de comparación
- **Qué es**: comparan dos valores y devuelven `true` o `false`.

| Operador | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `==` | igualdad de **valor** (convierte tipos) | `5 == '5'` | `true` |
| `===` | igualdad de **valor y tipo** (estricta) | `5 === '5'` | `false` |
| `!=` | distinto de valor | `5 != '5'` | `false` |
| `!==` | distinto de valor y tipo | `5 !== '5'` | `true` |
| `>` | mayor que | `10 > 5` | `true` |
| `<` | menor que | `10 < 5` | `false` |
| `>=` | mayor o igual | `10 >= 10` | `true` |
| `<=` | menor o igual | `10 <= 10` | `true` |

```js
console.log(5 == '5');    // true  (convierte '5' a número)
console.log(5 === '5');   // false (uno es number, otro es string)
console.log(5 === 5);     // true
console.log(null == undefined);  // true  (¡trampa!)
console.log(null === undefined); // false (son tipos distintos)
```

- **Errores comunes**: `==` hace conversiones automáticas que generan sorpresas. `null == undefined` es `true`, `0 == ''` es `true`, `false == 'false'` es `false`.
- **Buenas prácticas**: **usa SIEMPRE `===` y `!==`**. Nunca `==` ni `!=`. Así evitas sorpresas de coerción.

---

## Operadores lógicos
- **Qué es**: combinan condiciones (booleanos) con y/or/no.

| Operador | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `&&` | Y (ambas deben ser true) | `true && false` | `false` |
| `\|\|` | O (al menos una true) | `true \|\| false` | `true` |
| `!` | NO (da vuelta el valor) | `!true` | `false` |

```js
const edad = 25;
const tienePermiso = true;
if (edad >= 18 && tienePermiso) { /* entra */ }

const llueve = false;
const tieneParaguas = true;
if (llueve || tieneParaguas) { /* sales tranquilo */ }

const estaActivo = false;
if (!estaActivo) { /* no está activo */ }
```

### Short-circuit (circuitos cortos)
JavaScript no evalúa todo si ya tiene la respuesta:
- `&&`: si el primero es `false`, **no evalúa el segundo** (ya sabe que el resultado es `false`).
- `||`: si el primero es `true`, **no evalúa el segundo** (ya sabe que el resultado es `true`).

```js
const nombre = 'Ana' || 'Desconocido';  // 'Ana' (ya es verdadero, no llega al segundo)
const texto = '' || 'valor por defecto'; // 'valor por defecto' (string vacío se comporta como falso)
```

Esto se usa mucho para poner valores por defecto.

---

## Operadores de asignación
- **Qué es**: atajos para reasignar variables.

| Operador | Equivalente | Ejemplo |
|---|---|---|
| `=` | asignar | `x = 5` |
| `+=` | sumar y guardar | `x += 3` → `x = x + 3` |
| `-=` | restar y guardar | `x -= 2` → `x = x - 2` |
| `*=` | multiplicar y guardar | `x *= 4` → `x = x * 4` |
| `/=` | dividir y guardar | `x /= 2` → `x = x / 2` |
| `%=` | resto y guardar | `x %= 3` → `x = x % 3` |

```js
let total = 0;
total += 10;   // 10
total += 5;    // 15
total *= 2;    // 30
console.log(total); // 30
```

---

## Template literals (backticks)
- **Qué es**: strings especiales que usan backticks `` ` `` en vez de comillas. Permiten **interpolación** (meter variables adentro con `${}`) y **multilínea** sin `\n`.
- **Cuándo usarlo**: siempre que armes un texto con variables. Mucho más legible que concatenar con `+`.
- **Sintaxis**: `` `texto ${expresión} más texto` ``

```js
const nombre = 'Ana';
const edad = 30;

// Interpolación: ${expresión} reemplaza por el valor
console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
// Hola, soy Ana y tengo 30 años.

// Se pueden poner expresiones dentro de {}
console.log(`Tengo ${edad + 5} años.`);
// Tengo 35 años.

// Multilínea: no necesitas \n
const recibo = `Nombre: ${nombre}
Edad: ${edad}
Estado: ${edad >= 18 ? 'mayor' : 'menor'}`;
```

- **Errores comunes**:
  - Olvidar los backticks: `'Hola ${nombre}'` no interpola, es texto literal. Necesitas `` `Hola ${nombre}` ``.
  - Usar `${}` para todo: no es necesario para concatenar strings simples. `${}` es para expresiones.
- **Buenas prácticas**: usa template literals en vez de concatenar con `+`. Es más legible y menos propenso a errores de comillas.

---

## Console (mostrar resultados)
- **Qué es**: `console` es la salida del programa. Es como el monitor de la compu: lo que pones ahí se ve en la terminal.

| Método | Qué hace | Ejemplo |
|---|---|---|
| `console.log(valor)` | muestra un valor (el más usado) | `console.log('Hola')` |
| `console.log(a, b, c)` | muestra varios valores separados por espacio | `console.log('edad:', 30)` |
| `console.error(msg)` | muestra un error (en rojo en la terminal) | `console.error('Algo falló')` |
| `console.warn(msg)` | muestra una advertencia (en amarillo) | `console.warn('Cuidado')` |
| `console.table(arr)` | muestra un array u objeto como tabla prolija | `console.table([1,2,3])` |
| `console.dir(obj)` | muestra un objeto con todas sus propiedades | `console.dir({a:1})` |
| `console.clear()` | limpia la terminal | `console.clear()` |
| `console.time(label)` | inicia un cronómetro | `console.time('loop')` |
| `console.timeEnd(label)` | muestra cuánto tardó | `console.timeEnd('loop')` |

```js
console.log('Hola', 'mundo', 42);  // Hola mundo 42
console.table([{ nombre: 'Ana', edad: 30 }, { nombre: 'Beto', edad: 25 }]);
```

---

## Conversiones de tipos (coerción)
- **Qué es**: pasar un valor de un tipo a otro. Es como cambiar el material de una bolsa: el contenido es el mismo, pero el formato cambia.

| De → A | Cómo | Ejemplo | Resultado |
|---|---|---|---|
| string → number | `Number(s)` | `Number('42')` | `42` |
| string → number | `+'42'` | `+'42'` | `42` |
| string → entero | `parseInt(s)` | `parseInt('42px')` | `42` |
| string → decimal | `parseFloat(s)` | `parseFloat('3.14cm')` | `3.14` |
| number → string | `String(n)` | `String(42)` | `'42'` |
| number → string | `n.toString()` | `(42).toString()` | `'42'` |
| any → boolean | `Boolean(x)` | `Boolean(0)` | `false` |
| any → boolean | `!!x` | `!!''` | `false` |

```js
// Coerción implícita (JS lo hace solo)
console.log('5' + 3);   // '53'  (string + number → concatena)
console.log('5' - 3);   // 2     (string - number → convierte a número)
console.log('5' * 2);   // 10    (string * number → convierte a número)
console.log(true + 1);  // 2     (boolean → number: true=1)
```

- **Errores comunes**:
  - `'5' + 3` da `'53'` (concatena), pero `'5' - 3` da `2` (resta). `+` es el único operador que cambia de comportamiento.
  - `Number('')` da `0`, pero `Number('hola')` da `NaN`. Siempre valida.
  - `Boolean(0)`, `Boolean('')`, `Boolean(null)`, `Boolean(undefined)`, `Boolean(NaN)` dan `false`. Todo lo demás es `true`.
- **Buenas prácticas**: cuando no estés seguro de un tipo, convierte explícitamente con `Number()`, `String()` o `Boolean()`. No confíes en la coerción implícita.

---

## Buenas prácticas del módulo
1. **`const` por defecto**, `let` cuando necesites reasignar, `var` nunca.
2. **Nombres claros en `camelCase`**: `precioFinal`, no `pf` ni `precio_final`.
3. **`===` siempre**, `==` nunca.
4. **Template literals** para armar textos con variables, no concatenar con `+`.
5. **Valida antes de convertir**: `Number.isNaN(Number(texto))` antes de usarlo como número.
6. **No confíes en la coerción**: convierte explícitamente.
7. **Usa paréntesis** cuando la precedencia de operadores no sea obvia.

---

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-variables.js` | const/let/var, tipos de números |
| `ejemplos/02-tipos.js` | tipos y `typeof`, conversiones |
| `ejemplos/03-operadores.js` | aritmética, comparación, lógicos |
| `ejemplos/04-template-literals.js` | backticks, interpolación, métodos de string |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-variables.js` | El área de un círculo: como calcular cuánta tela necesitas para una mesa redonda |
| `ejercicios/ej-02-tipos.js` | Conversión de tipos: pasar de un material a otro, de texto a número y de vuelta |
| `ejercicios/ej-03-operadores.js` | Operaciones y comparaciones: cuentas de la vida diaria y preguntas de sí o no |
| `ejercicios/ej-04-string.js` | Strings y plantillas: armar y medir texto, como redactar y contar palabras |

## Proyecto
| Archivo | Consigna |
|---|---|
| `proyecto/` | **Ticket del almacén**: simula la compra de 3 productos con subtotal, IVA, descuento y ticket final |

Resuelve los ejercicios, corre `node ejercicios/ej-XX.js` y compara con el resultado esperado. Cuando los tengas, enfrenta el proyecto del módulo para asentar todo. Si algo no te da igual, lee el mensaje y fíjate qué paso se te escapó: así se aprende. Cuando los tengas, avisa para revisar.
