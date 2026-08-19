# Modulo 06 -- Strings, fechas y Math

Un string es como un mensaje de WhatsApp: podes hacer un monton de cosas con el, pero cada metodo te devuelve un texto NUEVO, nunca cambia el original. Las fechas son un numero gigante disfrazado de calendario. Y Math es la calculadora de la clase: todo listo para usar.

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
- **Buenas practicas**: para comparar sin importar mayusculas, converti todo a minisculas antes: `str.toLowerCase().includes('algo')`. Para capitalizar, combina `[0].toUpperCase()` + `slice(1)`.

---

## Date

- **Que es**: un objeto que representa un punto en el tiempo. Internamente es un solo numero: la cantidad de milisegundos que pasaron desde el 1 de enero de 1970 (epoch). Pero con los metodos lo traducis a anno, mes, dia, hora, etc. Es como un cronometro que tambien sabe calendario.
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
- **Buenas practicas**: para dias entre dos fechas: `(fecha2 - fecha1) / (1000 * 60 * 60 * 24)`. Para obterner el tiempo actual sin crear un Date: `Date.now()`.

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
- **Errores comunes**: `toFixed` devuelve un **string**, no un numero. Si necesitas hacer cuentas despues, converti con `Number()` o `+`.
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

## Ejemplos

| Archivo | Tema |
|---|---|
| `ejemplos/01-strings.js` | metodos de string: trim, case, busqueda, split/join, replace, pad, repeat, inmutabilidad |
| `ejemplos/02-dates.js` | crear fechas, getters, meses desde 0, milisegundos, diferencia entre fechas |
| `ejemplos/03-math.js` | max, min, floor, ceil, round, abs, sqrt, pow, random, randomInt, spread con Math.max |

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-vocales.js` | contar vocales de una frase usando split, filter e includes |
| `ejercicios/ej-02-capitalizar.js` | capitalizar cada palabra de una frase con slice y toUpperCase |
| `ejercicios/ej-03-fecha.js` | formatear una fecha como "DD/MM/AAAA" con padStart |
| `ejercicios/ej-04-dias-ano.js` | calcular dias restantes hasta fin de ano con resta de fechas |
| `ejercicios/ej-05-password.js` | generar contraseñas aleatorias con Math.random, floor e indice |
