/*
Ejercicio 3 — Clonar sin mutar

Cuando haces const copia = pedido, NO copias el objeto. Los dos nombres
apuntan al MISMO cuaderno. Si escribes en uno, se escribe en los dos.

Para tener un cuaderno aparte, tienes que copiarlo de verdad.

Partes de:
  const pedido = { id: 1, items: ['hamburguesa'], cliente: 'Ana' };
Observa que adentro tiene un ARRAY (items). Eso importa: un objeto con
cosas adentro se copia con structuredClone, que copia todo, hasta lo
más profundo. (El spread {...pedido} solo copiaría el primer nivel
y el array quedaría compartido.)

Paso a paso:
1) Crea una copia profunda de pedido con structuredClone(pedido).
   Guárdala en una variable nueva, por ejemplo copia.
2) Modifica SOLO la copia:
   - agrégale 'papas' a copia.items (con .push)
   - cambia copia.cliente a 'Luis'
3) Muestra pedido y copia con console.log.
   Observa que pedido tiene que quedar tal cual estaba.

Resultado esperado:
pedido: { id: 1, items: [ 'hamburguesa' ], cliente: 'Ana' }
copia:  { id: 1, items: [ 'hamburguesa', 'papas' ], cliente: 'Luis' }
*/

const pedido = { id: 1, items: ['hamburguesa'], cliente: 'Ana' };

// completa aqui
