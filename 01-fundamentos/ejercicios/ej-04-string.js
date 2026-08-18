/*
Ejercicio 4 — Strings y template literals
Acá trabajás con texto: armar frases, medirlas y contar palabras.
Un string (texto) es como una soga de letras: podés cortarla, medirla
y contarle cosas, pero cada letra está en su lugar.

Ya te dejé tres variables listas:
  const nombre = 'mundo';         // un texto
  const lenguaje = 'JavaScript';  // otro texto
  const texto = 'hola hola hola'; // otro texto

Paso a paso:
1) Imprimí: "Hola Mundo, estás aprendiendo JavaScript"
   Fijate que "mundo" aparece con M mayúscula, pero la variable nombre
   tiene "mundo" con minúscula. Eso se llama CAPITALIZAR: pasás la primera
   letra a mayúscula y dejás el resto igual, como escribir tu nombre con
   mayúscula inicial en la tapa del cuaderno.
   Pensalo como dos pedazos: la primera letra y el resto. En
   ejemplos/04-template-literals.js (la parte de "Métodos básicos")
   tenés las herramientas para agarrar cada pedazo. Después juntá los
   pedazos y completá la frase con un template literal.

2) Imprimí la longitud (cuántos caracteres tiene) del texto
   "aprendiendo JavaScript". La herramienta está en el mismo ejemplo
   que en el paso 1. Cuidado: el espacio entre las dos palabras
   también cuenta como caracter.

3) Tomá la variable texto ('hola hola hola') y mostrá cuántas veces
   aparece la palabra 'hola' dentro de ella.
   Pensá en la soga de letras: ¿qué pasaría si la cortás justo por cada
   aparición de 'hola'? La cantidad de pedazos que quedan te da la
   pista. Buscá el método que corta texto en pedazos: no está en los
   ejemplos, así que te toca encontrarlo (empezá por "split", que en
   inglés significa "partir").

Resultado esperado:
Hola Mundo, estás aprendiendo JavaScript
22
3
*/

const nombre = 'mundo';
const lenguaje = 'JavaScript';
const texto = 'hola hola hola';

// completá acá
