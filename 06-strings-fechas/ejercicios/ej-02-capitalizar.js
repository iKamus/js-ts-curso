/*
Ejercicio 2 -- Capitalizar palabras
Tienes esta frase:
  const frase = 'el lenguaje javascript es genial';
Devuelve la frase con cada palabra empezando con mayuscula, como los
titulos de una cancion.

Conceptos que vas a usar: split, map, toUpperCase, slice, join.

Capitalizar una palabra = primera letra en mayuscula + el resto igual:
  'javascript' -> 'Javascript'
  (pensalo como dos pedazos: la primera letra y el resto. En el
  README del modulo (seccion string) tienes las herramientas para
  agarrar cada pedazo: la que te da un caracter en cierta posicion y
  la que corta un pedazo del texto. Tambien la que pone en mayuscula.)

Paso a paso:
1) Separala en palabras. Te queda un array con cada palabra
   suelta (la herramienta de partir esta en la misma seccion).
2) Usa .map() para capitalizar cada palabra. En cada vuelta tienes que:
   - agarrar la primera letra y ponerla en mayuscula
   - juntarla con el resto de la palabra
   - devolver el resultado
3) Vuelve a juntar las palabras en una sola frase (el metodo que
   vuelve a pegar pedazos esta en la misma seccion).
4) Muestra la frase final con console.log.

Resultado esperado:
El Lenguaje Javascript Es Genial
*/

const frase = 'el lenguaje javascript es genial';

// completa aqui
