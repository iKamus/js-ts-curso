/*
Ejercicio 4 — Contar palabras (reduce a objeto)
Tenés estas frases:
  const frases = ['hola mundo', 'hola de nuevo', 'mundo mundo'];
Contá cuántas veces aparece cada palabra y devolvé un objeto con ese
conteo. Es como contar votos: cada palabra es un candidato y sumás
uno cada vez que aparece.

Paso a paso:
1) Primero tenés que pasar de "frases" a "palabras sueltas". Pensalo en
   dos pasos con los métodos de string que ya conocés: juntar todas las
   frases en un solo texto, y después cortarlo por espacios. Te queda
   un array con todas las palabras.
2) Después usás reduce para ir contando. El acumulador acá NO es un
   número: es un OBJETO vacío {}. En cada vuelta:
   - si la palabra todavía no está en el objeto, agregala con valor 1
   - si ya está, sumale 1 al valor que tenía
   Ojo: al final del reduce tenés que devolver el acumulador, sino
   el objeto se pierde.
3) Mostrá el objeto con console.log.

Resultado esperado:
{ hola: 2, mundo: 3, de: 1, nuevo: 1 }
*/

const frases = ['hola mundo', 'hola de nuevo', 'mundo mundo'];

// completá acá