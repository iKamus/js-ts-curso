/*
Ejercicio 1 — Deduplicar con Set
Tenés esta lista de nombres:
  const nombres = ['Ana', 'Luis', 'Ana', 'Caro', 'Luis', 'Ana'];
Devolvé el array sin repetidos, respetando el orden de aparición.
O sea, como cuando pasás la lista del aula y querés nombrar a cada pibe
una sola vez, pero en el mismo orden en que están sentados.

¿Qué es un Set? Es una bolsa especial que NO deja entrar duplicados:
si un valor ya está adentro, el segundo intento simplemente no entra.
Y además respeta el orden en que le fueron entrando los valores.
Fijate cómo se usa en ejemplos/01-set.js.

Paso a paso:
1) Meté el array adentro de un Set. El Set se queda solo con un
   ejemplar de cada nombre.
2) Volvé a convertirlo en un array. En el ejemplo de 01-set.js hay
   una parte que dice "deduplicar un array": fijate cómo pasa del
   Set al array (con el spread, como vaciar la bolsa sobre la mesa).
3) Mostrá el resultado con console.log.

Resultado esperado:
[ 'Ana', 'Luis', 'Caro' ]
*/

const nombres = ['Ana', 'Luis', 'Ana', 'Caro', 'Luis', 'Ana'];

// completá acá