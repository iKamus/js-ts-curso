# Modulo 06 -- Strings, fechas y Math

Un string es como un mensaje de WhatsApp: puedes hacer un monton de cosas con el, pero cada metodo te devuelve un texto NUEVO, nunca cambia el original. Las fechas son un numero gigante disfrazado de calendario. Y Math es la calculadora de la clase: todo listo para usar.

---

## string

- **Que es**: una cadena de texto. Es como una fila de letras numeradas (el indice arranca en 0): la primera letra esta en la posicion 0, la segunda en la 1, y asi. Los strings son **inmutables**: ningun metodo toca el original; todos devuelven un string nuevo.
- **Cuando usarlo**: siempre que trabajes con texto: nombres, frases, passwords, formateo de datos, busquedas dentro de un string, etc.
- **Sintaxis**:
  ```js
  const saludo = 'Hola Mundo';
  const nombre = "Ana";
  const frase = `Hola ${nombre}`;   // template literal
  ```
- **Metodos/funciones internos**:
  | Metodo | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `.length` | cantidad de caracteres | `'hola'.length` | `4` |
  | `[i]` | caracter en la posicion i | `'hola'[1]` | `'o'` |
  | `.charAt(i)` | caracter en la posicion i | `'hola'.charAt(0)` | `'h'` |
  | `.trim()` | saca espacios de los extremos | `'  hola  '.trim()` | `'hola'` |
  | `.toUpperCase()` | todo a mayusculas | `'hola'.toUpperCase()` | `'HOLA'` |
  | `.toLowerCase()` | todo a minusculas | `'HOLA'.toLowerCase()` | `'hola'` |
  | `.includes(sub)` | contiene el texto? | `'hola'.includes('ol')` | `true` |
  | `.startsWith(sub)` | empieza con? | `'hola'.startsWith('ho')` | `true` |
  | `.endsWith(sub)` | termina con? | `'hola'.endsWith('la')` | `true` |
  | `.indexOf(sub)` | posicion de la primera aparicion | `'hola'.indexOf('l')` | `2` |
  | `.slice(ini, fin)` | recorta desde `ini` hasta `fin` (sin incluir) | `'hola'.slice(1, 3)` | `'ol'` |
  | `.split(sep)` | string a array, separando por `sep` | `'a,b'.split(',')` | `['a','b']` |
  | `.replace(old, new)` | reemplaza la primera aparicion | `'hola hola'.replace('hola','chau')` | `'chau hola'` |
  | `.replaceAll(old, new)` | reemplaza todas las apariciones | `'hola hola'.replaceAll('hola','chau')` | `'chau chau'` |
  | `.padStart(n, c)` | rellena por izquierda hasta n caracteres | `'7'.padStart(3, '0')` | `'007'` |
  | `.padEnd(n, c)` | rellena por derecha hasta n caracteres | `'hi'.padEnd(5, '.')` | `'hi...'` |
  | `.repeat(n)` | repite el string n veces | `'ha'.repeat(3)` | `'hahaha'` |
  | `.toUpperCase()` + `slice` | capitalizar una palabra | `'java'[0].toUpperCase() + 'java'.slice(1)` | `'Java'` |
- **Errores comunes**: olvidar que los strings son inmutables: `'hola'[0] = 'H'` no tira error pero tampoco hace nada. Tambien confundir `replace` (cambia solo la primera) con `replaceAll` (cambia todas).
- **Buenas practicas**: para comparar sin importar mayusculas, convierte todo a minusculas antes: `str.toLowerCase().includes('algo')`. Para capitalizar, combina `[0].toUpperCase()` + `slice(1)`.

---

## Date

- **Que es**: un objeto que representa un punto en el tiempo. Internamente es un solo numero: la cantidad de milisegundos que pasaron desde el 1 de enero de 1970 (epoch). Pero con los metodos lo traduces a anno, mes, dia, hora, etc. Es como un cronometro que tambien sabe calendario.
- **Cuando usarlo**: cuando necesites mostrar fechas, calcular diferencias de tiempo, obtener la fecha actual, o formatear fechas para mostrar.
- **Sintaxis**:
  ```js
  const ahora = new Date();                         // ahora mismo
  const fecha = new Date(2026, 7, 15);              // 15 de agosto de 2026
  const iso = new Date('2026-08-15T10:30:00');      // desde string ISO
  ```
- **Trampa clasica**: los meses van de 0 a 11. Enero es 0, febrero es 1, ..., diciembre es 11. `new Date(2026, 7, 15)` es agosto, no julio. Siempre suma 1 al mes al mostrar.
- **Metodos/funciones internos**:
  | Metodo | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `new Date()` | fecha y hora actuales | `new Date()` | (ahora) |
  | `new Date(a, m, d)` | crea fecha (mes empieza en 0) | `new Date(2026, 7, 15)` | 15/ago/2026 |
  | `.getFullYear()` | el anno | `fecha.getFullYear()` | `2026` |
  | `.getMonth()` | el mes (0-11) | `fecha.getMonth()` | `7` |
  | `.getDate()` | el dia del mes (1-31) | `fecha.getDate()` | `15` |
  | `.getDay()` | dia de la semana (0=dom) | `fecha.getDay()` | `6` |
  | `.toISOString()` | formato ISO completo | `fecha.toISOString()` | `'2026-08-15T...'` |
  | `.getTime()` | milisegundos desde 1970 | `fecha.getTime()` | `1755216000000` |
  | `.toLocaleDateString()` | formato local | `fecha.toLocaleDateString()` | `'15/8/2026'` |
- **Errores comunes**: el mes empieza en 0, no en 1. `new Date(2026, 7, 15)` es agosto, no julio. Tambien olvidar que restar dos fechas da milisegundos, no dias: hay que dividir por `1000 * 60 * 60 * 24`.
- **Buenas practicas**: para dias entre dos fechas: `(fecha2 - fecha1) / (1000 * 60 * 60 * 24)`. Para obtener el tiempo actual sin crear un Date: `Date.now()`.

---

## Math

- **Que es**: un objeto con metodos estaticos para operaciones matematicas. Es como la calculadora de la clase: no se crea con `new`, todo esta listo para usar directamente con `Math.metodo()`.
- **Cuando usarlo**: siempre que necesites redondear, sacar raiz, elevar a una potencia, sacar valor absoluto, o generar numeros aleatorios.
- **Sintaxis**: todo con `Math.` delante (es estatico, no se instancia).
- **Metodos/funciones internos**:
  | Metodo | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `Math.max(a, b, ...)` | el mas grande | `Math.max(4, 9, 2)` | `9` |
  | `Math.min(a, b, ...)` | el mas chico | `Math.min(4, 9, 2)` | `2` |
  | `Math.floor(x)` | redondea hacia abajo | `Math.floor(3.9)` | `3` |
  | `Math.ceil(x)` | redondea hacia arriba | `Math.ceil(3.1)` | `4` |
  | `Math.round(x)` | redondea al mas cercano | `Math.round(3.5)` | `4` |
  | `Math.abs(x)` | valor sin signo | `Math.abs(-7)` | `7` |
  | `Math.sqrt(x)` | raiz cuadrada | `Math.sqrt(81)` | `9` |
  | `Math.pow(x, y)` | x elevado a y | `Math.pow(2, 3)` | `8` |
  | `Math.random()` | decimal al azar entre 0 (incl.) y 1 (excl.) | `Math.random()` | `0.374...` |
- **Formula classica -- entero aleatorio entre min y max (inclusive)**:
  ```js
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  ```
  `Math.random()` te da un decimal entre 0 y 1. Lo multiplicas por la cantidad de numeros posibles y le sumas el minimo: asi te queda un numero al azar dentro de tu rango, como tirar un dado pero con el tamaño que elijas.
- **Errores comunes**: olvidar el `Math.floor` y quedarse con un decimal. Usar `Math.round` en vez de `Math.floor` para indices de arrays (puede pasarse del largo). Confundir `Math.pow(x, y)` con `Math.pow(y, x)`.
- **Buenas practicas**: para aplicar `Math.max` o `Math.min` sobre un array, usa spread: `Math.max(...miArray)`. Para enteros aleatorios, siempre usa la formula con `Math.floor`.

---

## Number.prototype.toFixed

- **Que es**: formatea un numero con una cantidad fija de decimales y lo devuelve como string. Es como pedirle al numero que se ponga prolijo con la cantidad de cifras despues de la coma.
- **Cuando usarlo**: cuando necesites mostrar un numero con exactamente N decimales: precios, porcentajes, calculos financieros.
- **Sintaxis**:
  ```js
  const pi = 3.14159;
  pi.toFixed(2);      // '3.14' (string)
  pi.toFixed(0);      // '3' (redondea)
  ```
- **Metodos/funciones internos**:
  | Llamada | Que hace | Resultado |
  |---|---|---|
  | `num.toFixed(2)` | 2 decimales, redondea | `'3.14'` |
  | `num.toFixed(0)` | sin decimales, redondea | `'3'` |
  | `num.toFixed(5)` | 5 decimales, rellena con ceros | `'3.14159'` |
- **Errores comunes**: `toFixed` devuelve un **string**, no un numero. Si necesitas hacer cuentas despues, convierte con `Number()` o `+`.
- **Buenas practicas**: usa `toFixed` para mostrar, no para calcular. Si necesitas redondear para operar, usa `Math.round`.

---

## parseInt / parseFloat

- **Que es**: dos funciones que extraen un numero de un string. `parseInt` saca un entero (sin decimales), `parseFloat` saca un decimal. Es como leer un precio escrito en la pizarra y quedarte solo con los numeros.
- **Cuando usarlo**: cuando recibes datos que vienen como string (por ejemplo, de un input o de un archivo) y necesitas convertirlos a numero.
- **Sintaxis**:
  ```js
  parseInt('42px');        // 42 (ignora lo que viene despues)
  parseFloat('3.14cm');    // 3.14
  parseInt('hola');        // NaN (no es numero)
  ```
- **Metodos/funciones internos**:
  | Funcion | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `parseInt(str)` | entero desde string | `parseInt('42abc')` | `42` |
  | `parseInt(str, base)` | entero en base especifica | `parseInt('FF', 16)` | `255` |
  | `parseFloat(str)` | decimal desde string | `parseFloat('3.14')` | `3.14` |
- **Errores comunes**: `parseInt` no tira error con texto no numerico, devuelve `NaN`. Siempre verifica con `isNaN()` despues. `parseInt` tambien trunca decimales: `parseInt('3.9')` es `3`, no `4`.
- **Buenas practicas**: siempre pasa la base a `parseInt` cuando trabajes con bases distintas a 10: `parseInt('10', 2)` es 2 (binario). Para convertir strings simples a numero, `Number('42')` es mas directo que `parseInt('42')`.

---

## Ejemplos integrados

Todo lo que necesitas para los ejercicios, en un solo lugar. Podes copiar y correr cada bloque para ver la salida.

### 01 -- Metodos de string

```js
const texto = '  Hola Mundo JavaScript  ';

// trim: le corta los espacios de los bordes, como recortar los margenes de la hoja.
console.log(texto.trim());             // 'Hola Mundo JavaScript'
console.log(texto.trim().length);      // 21
console.log('Hola Mundo'.toUpperCase());  // HOLA MUNDO
console.log('Hola Mundo'.toLowerCase());  // hola mundo

const email = 'ana@gmail.com';
// includes, startsWith y endsWith te contestan con si o no.
console.log(email.includes('@'));         // true
console.log(email.startsWith('ana'));     // true
console.log(email.endsWith('.com'));      // true
console.log(email.indexOf('@'));          // 3
console.log(email.slice(0, 3));           // ana

// split rompe el texto en pedazos y join vuelve a pegarlos.
console.log('a,b,c'.split(','));          // ['a','b','c']
console.log(['a','b','c'].join('-'));     // a-b-c

// OJO con el separador vacio: split('') separa el texto en CADA caracter.
// Es como cortar la soga con tijera en cada letra: te queda un array de letras.
console.log('hola'.split(''));            // ['h','o','l','a']

// replace cambia solo la primera aparicion; replaceAll cambia todas, como buscar y reemplazar en Word.
console.log('hola hola'.replace('hola', 'chau'));     // chau hola (solo la 1a)
console.log('hola hola'.replaceAll('hola', 'chau'));  // chau chau

// Capitalizar: primera letra en mayuscula + el resto igual
// Se arma en TRES pasos:
//   1) agarras la primera letra (con [0] o con charAt)
//   2) la pones en mayuscula con toUpperCase
//   3) le sumas el resto con slice(1) (de la letra 1 en adelante)
// El + junta los dos pedazos como un texto nuevo.
const palabra = 'javascript';
const capitalizada = palabra[0].toUpperCase() + palabra.slice(1);
console.log(capitalizada);                // Javascript

// padStart rellena por izquierda y padEnd por derecha, como completar con ceros un legajo.
console.log('7'.padStart(3, '0'));    // 007
console.log('12'.padEnd(4, '.'));     // 12..
console.log('hi'.repeat(3));          // hihihi
console.log('Hola'[1]);               // o
console.log('Hola'.charAt(0));        // H

// Los strings son inmutables.
// Observa: base no cambio. toUpperCase devolvio otro texto, pero el original quedo intacto.
const base = 'hola';
const modificado = base.toUpperCase();
console.log(base, modificado); // hola HOLA
```

### 02 -- Date

```js
// Las fechas en JS se guardan como un numero gigante (milisegundos), pero las lees como calendario.
const ahora = new Date();
console.log('ahora:', ahora);

// Meses van de 0 a 11: agosto = 7.
// Este es el clasico error: enero es 0 y diciembre es 11, como los indices de los arrays.
const fecha = new Date(2026, 7, 15);
console.log('anno:', fecha.getFullYear());   // 2026
console.log('mes:', fecha.getMonth());      // 7 (agosto)
console.log('dia:', fecha.getDate());       // 15
console.log('dia semana:', fecha.getDay()); // 6 (sabado; domingo = 0)

// Desde un string ISO
// El formato estandar tipo "2026-08-15T10:30:00" tambien se entiende perfecto.
const iso = new Date('2026-08-15T10:30:00');
console.log(iso.toISOString());         // 2026-08-15T10:30:00.000Z
console.log(iso.toLocaleDateString());  // formato local (15/8/2026)
console.log(iso.getTime());             // milisegundos desde 1970

// Diferencia de tiempo en ms
// Para medir cuanto tardo algo, agarras el tiempo antes y despues, como con un cronometro.
const inicio = Date.now();
// ...algo que tarde un poco...
const fin = Date.now();
console.log('pasaron', fin - inicio, 'ms');

// Dias entre dos fechas
// Si restas dos fechas te da milisegundos; divides por los ms que tiene un dia y listo.
const d1 = new Date(2026, 0, 1);
const d2 = new Date(2026, 11, 31);
const dias = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log('dias entre:', dias); // 364
```

### 03 -- Math y aleatorios

```js
// Math es como la calculadora de la clase: un monton de funciones listas para usar.
console.log(Math.max(4, 9, 2));   // 9
console.log(Math.min(4, 9, 2));   // 2
console.log(Math.floor(3.9));     // 3  (hacia abajo)
console.log(Math.ceil(3.1));      // 4  (hacia arriba)
console.log(Math.round(3.5));     // 4
console.log(Math.round(3.4));     // 3
console.log(Math.abs(-7));        // 7
console.log(Math.pow(2, 3));      // 8
console.log(Math.sqrt(81));       // 9

// Aleatorio entre min y max (inclusive)
// Math.random() te da un numero entre 0 y 1; con esta receta lo conviertes en un entero de tu rango,
// como tirar un dado pero con el tamaño que elijas.
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('aleatorio 1-10:', randomInt(1, 10));
console.log('aleatorio 1-10:', randomInt(1, 10));
console.log('aleatorio 1-10:', randomInt(1, 10));

// Math.max sobre un array con spread
// El spread "desparrama" el array y Math.max agarra todos los numeros de una.
const nums = [3, 7, 2, 9];
console.log(Math.max(...nums)); // 9
```

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-vocales.js` | contar vocales de una frase usando split, filter e includes |
| `ejercicios/ej-02-capitalizar.js` | capitalizar cada palabra de una frase con slice y toUpperCase |
| `ejercicios/ej-03-fecha.js` | formatear una fecha como "DD/MM/AAAA" con padStart |
| `ejercicios/ej-04-dias-ano.js` | calcular dias restantes hasta fin de ano con resta de fechas |
| `ejercicios/ej-05-password.js` | generar contraseñas aleatorias con Math.random, floor e indice |
