/*
Ejercicio 4 -- Contar palabras (reduce a objeto)
Tenés estas frases:
  const frases = ['hola mundo', 'hola de nuevo', 'mundo mundo'];
Cuenta cuantas veces aparece cada palabra y devuelve un objeto con ese
conteo. Es como contar votos: cada palabra es un candidato y sumas
uno cada vez que aparece.

Paso a paso:
1) Primero tenes que pasar de "frases" a "palabras sueltas". Pensalo en
   dos pasos con los metodos de string que ya conoces: juntar todas las
   frases en un solo texto, y despues cortarlo por espacios. Te queda
   un array con todas las palabras.
2) Despues usa reduce para ir contando. El acumulador ahi NO es un
   numero: es un OBJETO vacio {}. En cada vuelta:
   - si la palabra todavia no esta en el objeto, agregala con valor 1
   - si ya esta, sumale 1 al valor que tenia
   Ojo: al final del reduce tenes que devolver el acumulador, sino
   el objeto se pierde.
3) Muestra el objeto con console.log.

Pista: para unir las frases usa join(' '). Para cortar, split(' ').
Y para verificar si una clave ya existe en el objeto, puedes usar
hasOwnProperty o simplemente verificar si es undefined.

Resultado esperado:
{ hola: 2, mundo: 3, de: 1, nuevo: 1 }
*/

const frases = ['hola mundo', 'hola de nuevo', 'mundo mundo'];

// completa aqui
