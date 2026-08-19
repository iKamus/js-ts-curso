/*
Ejercicio 5 — Palindromo
Un palindromo es una palabra que se lee igual al derecho y al reves, como
"neuquen" o "ana": mirala desde donde la mires, es la misma.

Paso a paso:
1) Crea esPalindromo(palabra) que devuelva true si la palabra se lee
   igual al derecho y al reves, y false si no.
2) Antes de comparar, "limpia" la palabra:
   - pasa todo a minusculas (para que "Ana" y "ana" sean iguales)
   - sacale los espacios (para que frases como "amo la paloma" funcionen)
   Para pasar a minusculas usa `.toLowerCase()` y para sacar espacios
   usa `.replaceAll(" ", "")`.
3) Para darla vuelta y comparar, usa el truco de string:
   - `.split("")` separa el texto en letras sueltas (un array de letras)
   - `.reverse()` da vuelta el array (la ultima pasa a ser la primera)
   - `.join("")` vuelve a juntar las letras en un texto
   Si la version limpia es igual a su version dada vuelta -> es palindromo.
4) Muestra el resultado de cada palabra con el formato "palabra -> true/false"
   (una linea por palabra).

Pista: encadena los tres metodos en una sola linea, asi:
   palabra.split("").reverse().join("")

Probá: 'ana', 'reconocer', 'hola', 'neuquen', 'Amo la paloma'

Resultado esperado:
ana -> true
reconocer -> true
hola -> false
neuquen -> true
Amo la paloma -> true
*/

// completa aqui
