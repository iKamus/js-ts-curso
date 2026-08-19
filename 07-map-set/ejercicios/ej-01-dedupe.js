/*
Ejercicio 1 -- Deduplicar con Set
Tenes esta lista de nombres:
  const nombres = ['Ana', 'Luis', 'Ana', 'Caro', 'Luis', 'Ana'];
Devolve el array sin repetidos, respetando el orden de aparicion.

Que es un Set? Es una bolsa que NO deja entrar duplicados:
si un valor ya esta adentro, el segundo intento simplemente no entra.
Y ademas respeta el orden en que le fueron entrando los valores.
Fijate como se usa en ejemplos/01-set.js.

Paso a paso:
1) Mete el array adentro de un Set. El Set se queda solo con un
   ejemplar de cada nombre.
2) Volve a convertirlo en un array. En ejemplos/01-set.js hay
   una parte que dice "deduplicar un array": fijate como pasa del
   Set al array (con el spread [...], como vaciar la bolsa sobre la mesa).
3) Muestra el resultado con console.log.

Resultado esperado:
[ 'Ana', 'Luis', 'Caro' ]
*/

const nombres = ['Ana', 'Luis', 'Ana', 'Caro', 'Luis', 'Ana'];

// completar aca
