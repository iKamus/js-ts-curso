# Módulo 01 — Fundamentos de JavaScript

Bienvenido al primer módulo. Acá vas a aprender las piezas básicas con las que se arma TODO programa en JavaScript: guardar datos, saber de qué tipo son y hacer cuentas con ellos. No te preocupes si al principio parece mucho: es como aprender las letras antes de formar palabras.

## Cómo correr
Node ejecuta JS línea por línea, sin pasar por un compilador: directamente lee el archivo y lo corre, como cuando leés una receta y vas haciendo cada paso. Desde esta carpeta:
```
node ejemplos/01-variables.js
```
Ojo: el comando se corre SIEMPRE desde la carpeta del módulo (donde está este README), porque las rutas como `ejemplos/...` son relativas a esa carpeta.

## Variables
Pensá en una variable como una caja con etiqueta: adentro guardás un valor y la etiqueta es el nombre para encontrarla cuando la necesitás.
- `const` → la caja queda sellada: no podés cambiarle el contenido. Usala por defecto.
- `let` → la caja se puede abrir y reemplazar el contenido. Usala cuando el valor va a cambiar, como una tarjeta de saldo que se actualiza.
- `var` → es la caja vieja del almacén: evitarla, porque escapa del bloque en el que se declara y arma líos.

```js
const nombre = 'Ana';
let edad = 30;
edad = 31;          // ok
// nombre = 'Beto'; // ERROR: const no se reasigna
```

## Tipos de datos
Cada valor tiene un "material": como en la vida real, no es lo mismo una bolsa de harina que un cartón de leche.
- `number`: `10`, `3.14`, `Infinity`, `NaN` — los números y sus rarezas
- `string`: `'hola'`, `"hola"`, `` `hola` `` — el texto, siempre entre comillas o backticks. Es como escribir en un papel: las comillas le avisan a la computadora "esto es texto, no código"
- `boolean`: `true` / `false` — el sí o el no, como cuando respondés una pregunta de sí o no
- `undefined` (declarada sin valor, la caja está vacía) y `null` (vacío a propósito, la caja la vaciaste vos)
- `object`: arrays y objetos, para juntar varias cosas en un solo lugar
- `typeof x` te dice el tipo de `x` — como la etiqueta que dice qué contiene el frasco

¿Cómo saber si un valor es texto o número? Mirá si tiene comillas: `'123'` es texto (aunque parezca número), `123` es número. Esa diferencia importa muchísimo: los textos no se pueden sumar ni multiplicar.

## Operadores
- Aritméticos: `+ - * / % **` (el `%` es el resto, lo que sobra de la división; el `**` es la potencia)
- **Ojo con `^`**: en JavaScript `^` NO es potencia. Es el operador XOR, que trabaja a nivel de bits (compara los bits de dos números) y casi nunca lo vas a necesitar. Si querés elevar al cuadrado, usá `**`: `radio ** 2`. Es un clásico error que sale de la costumbre de anotar potencias con `^` en el cuaderno, pero la computadora no entiende esa notación.
- Comparación: `==` compara solo el valor (convierte los tipos en el camino); `===` compara el valor **y** el tipo → usá `===`, es el más confiable, como chequear que te dieron exactamente el vuelto y no un billete parecido
- Lógicos: `&&` (y), `||` (o), `!` (no)
- Asignación: `=`, `+=`, `-=`, ... (los "atajos" para sumar o restar sobre la misma variable)

## Template literals (backticks)
Son los string con comilla invertida que te permiten meter variables adentro, como armar un cartel con el nombre que ya tenés anotado:
```js
const nombre = 'Ana';
console.log(`Hola ${nombre}, son las ${9 + 1}`);
// Hola Ana, son las 10
```

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
| `ejercicios/ej-01-variables.js` | El área de un círculo: como calcular cuánta tela necesitás para una mesa redonda |
| `ejercicios/ej-02-tipos.js` | Conversión de tipos: pasar de un material a otro, de texto a número y de vuelta |
| `ejercicios/ej-03-operadores.js` | Operaciones y comparaciones: cuentas de la vida diaria y preguntas de sí o no |
| `ejercicios/ej-04-string.js` | Strings y plantillas: armar y medir texto, como redactar y contar palabras |

Resolvé los `ejercicios/`, corré `node ejercicios/ej-XX.js` y compará con el resultado esperado. Si algo no te da igual, leé el mensaje y fijate qué paso se te escapó: así se aprende. Cuando los tengas, avisá para revisar.