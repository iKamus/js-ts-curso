/*
Ejercicio 2 — Capitalizar palabras
Tenés esta frase:
  const frase = 'el lenguaje javascript es genial';
Devolvé la frase con cada palabra empezando con mayúscula, como los
títulos de una canción.

Capitalizar una palabra = primera letra en mayúscula + el resto igual:
  'javascript' → 'Javascript'
  (pensalo como dos pedazos: la primera letra y el resto. En
  ejemplos/01-strings.js tenés las herramientas para agarrar cada
  pedazo: la que te da un caracter en cierta posición y la que corta
  un pedazo del texto. También la que pone en mayúscula.)

Paso a paso:
1) Separá la frase en palabras. Te queda un array con cada palabra
   suelta (la herramienta de partir está en el mismo ejemplo).
2) Usá .map() para capitalizar cada palabra. En cada vuelta tenés que:
   - agarrar la primera letra y ponerla en mayúscula
   - juntarla con el resto de la palabra
   - devolver el resultado
3) Volvé a juntar las palabras en una sola frase (el método que
   vuelve a pegar pedazos está en el mismo ejemplo).
4) Mostrá la frase final con console.log.

Resultado esperado:
El Lenguaje Javascript Es Genial
*/

const frase = 'el lenguaje javascript es genial';

// completá acá