# Módulo 06 — Strings, fechas y Math

En este módulo vas a manipular textos, fechas y números. Ojo: un string es inmutable, o sea que cada método te devuelve un texto nuevo; es como escribir con lápiz en lugar de borrar todo el tiempo.

## Strings (métodos principales)
| Método | Qué hace | Ejemplo |
|---|---|---|
| `trim()` | saca espacios de los extremos | `'  hola  '.trim()` → `'hola'` |
| `toUpperCase()` / `toLowerCase()` | mayúsculas / minúsculas | |
| `includes(sub)` | ¿contiene? → true/false | |
| `startsWith/endsWith(sub)` | empieza/termina con | |
| `indexOf(sub)` | posición o `-1` | |
| `slice(inicio, fin)` | recorta | `'hola'.slice(1,3)` → `'ol'` |
| `split(sep)` | string → array | `'a,b'.split(',')` → `['a','b']` |
| `join(sep)` | array → string | |
| `replace` / `replaceAll` | reemplazar | `replaceAll` cambia todas |
| `padStart(n, c)` | rellena a la izquierda | `'7'.padStart(3,'0')` → `'007'` |
| `repeat(n)` | repite | |
| `charAt(i)` / `[i]` | carácter en posición | |
| `.length` | cantidad de caracteres | |

Los strings son **inmutables**: los métodos devuelven un string nuevo, no modifican el original.

## Date
¿Qué es una fecha para la computadora? Un número gigante: la cantidad de milisegundos que pasaron desde el 1 de enero de 1970. Pero vos no querés leer eso, querés leer "15 de agosto de 2026". Para eso están los métodos que te traducen el número a calendario:
```js
const fecha = new Date();          // ahora mismo
const f = new Date(2026, 7, 15);   // ¡meses van de 0 a 11! agosto = 7
f.getFullYear()   // 2026 (el año)
f.getMonth()      // 7 (el mes, en "idioma computadora": enero es 0)
f.getDate()       // 15 (el día del mes)
f.getDay()        // día de la semana (domingo = 0, lunes = 1...)
f.toISOString()   // formato estándar tipo "2026-08-15T00:00:00.000Z"
f.getTime()       // milisegundos desde 1970 (el número gigante)
```
Restando dos fechas (en ms) podés calcular diferencias de tiempo.

> Che, acordate: los meses arrancan en 0, igual que los índices de los arrays. Enero es 0 y diciembre es 11.

## Math
`Math` es como la calculadora de la clase: un montón de funciones listas para usar, sin que las escribas vos.
- `Math.max(...)` / `Math.min(...)` → el más grande / el más chico
- `Math.floor(x)` → redondea hacia ABAJO (3.9 → 3, como tirar la parte decimal)
- `Math.ceil(x)` → redondea hacia ARRIBA (3.1 → 4)
- `Math.round(x)` → redondea al más cercano (3.5 → 4, 3.4 → 3)
- `Math.abs(x)` → el valor sin el signo (-7 → 7)
- `Math.sqrt(x)` → raíz cuadrada (81 → 9)
- `Math.pow(x, y)` → x elevado a y (igual que `**`)
- `Math.random()` → un decimal al azar entre 0 y 1 (el 1 no entra nunca)

Entero aleatorio entre min y max (inclusive):
```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```
¿Cómo funciona? Math.random() te da un decimal entre 0 y 1. Lo multiplicás por la cantidad de números posibles y le sumás el mínimo: así te queda un número al azar dentro de tu rango, como tirar un dado pero con el tamaño que vos elijas.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-strings.js` | los métodos de string en acción |
| `ejemplos/02-dates.js` | trabajar con fechas |
| `ejemplos/03-math.js` | Math y números al azar |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-vocales.js` | contar vocales de una frase |
| `ejercicios/ej-02-capitalizar.js` | que cada palabra arranque con mayúscula |
| `ejercicios/ej-03-fecha.js` | formatear una fecha bien prolija |
| `ejercicios/ej-04-dias-ano.js` | cuántos días faltan para fin de año |
| `ejercicios/ej-05-password.js` | tu propio generador de contraseñas |