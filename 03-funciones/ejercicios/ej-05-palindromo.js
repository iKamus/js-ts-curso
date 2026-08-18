/*
Ejercicio 5 — Palíndromo
Un palíndromo es una palabra que se lee igual al derecho y al revés, como
"neuquen" o "ana": mirala desde donde la mires, es la misma.

Paso a paso:
1) Creá esPalindromo(palabra) que devuelva true si la palabra se lee
   igual al derecho y al revés, y false si no.
2) Antes de comparar, tenés que "limpiar" la palabra:
   - pasá todo a minúsculas (para que "Ana" y "ana" sean iguales)
   - sacale los espacios (para que frases como "amo la paloma" funcionen)
   Las herramientas de texto están en 06-strings-fechas/ejemplos/01-strings.js:
   buscá la que pasa a minúsculas y la que reemplaza caracteres.
3) Para darla vuelta y comparar, pensá en tres pasos:
   - separar el texto en letras sueltas (un array de letras)
   - dar vuelta el array (la última pasa a ser la primera)
   - volver a juntar las letras en un texto
   En 04-arrays/ejemplos/01-metodos-basicos.js hay una parte que hace
   exactamente esto (el truco de split + reverse + join): fijate cómo
   combina las tres herramientas.
   Si la versión limpia es igual a su versión dada vuelta → es palíndromo.
4) Mostrá el resultado de cada palabra con el formato "palabra → true/false"
   (una línea por palabra).

Probá: 'ana', 'reconocer', 'hola', 'neuquen', 'Amo la paloma'

Resultado esperado:
ana → true
reconocer → true
hola → false
neuquen → true
Amo la paloma → true
*/

// completá acá