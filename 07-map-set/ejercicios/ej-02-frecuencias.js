/*
Ejercicio 2 -- Frecuencias con Map
Tenes esta lista de palabras:
  const palabras = ['hola', 'chau', 'hola', 'hola', 'adios'];
Cuenta con un Map cuantas veces aparece cada palabra y muestra cada
entrada como "palabra: cantidad".

Que es un Map? Es como un diccionario: guardas pares clave -> valor.
Aca la clave va a ser la palabra y el valor la cantidad de veces que aparece.
Es como contar votos: cada palabra es un candidato y sumas uno
cada vez que aparece. Observa como se usa en el README del modulo
(seccion Map).

Paso a paso:
1) Crea un Map vacio.
2) Recorre el array de palabras con for...of. Para cada palabra:
   - pregunta cuantas veces aparece (lee del Map)
   - si todavia no existe, te da undefined. Usa el "plan B"
     con || (como en el modulo 05): undefined || 0 es 0.
   Escribe la linea con las operaciones del Map (get y set).
3) Despues de recorrer todo, muestra cada entrada. Observa como se
   recorre un Map en el README del modulo (seccion Map; te da cada par
   clave -> valor, que puedes "abrir" con la coma, como en el
   destructuring del modulo 04). Muestra `${palabra}: ${cantidad}`
   (una linea por entrada).

Resultado esperado:
hola: 3
chau: 1
adios: 1
*/

const palabras = ['hola', 'chau', 'hola', 'hola', 'adios'];

// completa aqui
