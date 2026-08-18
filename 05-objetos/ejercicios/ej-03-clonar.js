/*
Ejercicio 3 — Clonar sin mutar
Che, esta es la parte de las referencias, y es importante entenderla bien:
cuando hacés const copia = pedido, NO copiás el objeto. Los dos nombres
apuntan al MISMO cuaderno. Si escribís en uno, se escribe en los dos.

Para tener un cuaderno aparte, tenés que copiarlo de verdad.

Partís de:
  const pedido = { id: 1, items: ['hamburguesa'], cliente: 'Ana' };
Fijate que adentro tiene un ARRAY (items). Eso importa: un objeto con
cosas adentro se copia con structuredClone, que copia todo, hasta lo
más profundo. (El spread {...pedido} solo copiaría el primer nivel
y el array quedaría compartido. Por eso acá usamos structuredClone.)

Paso a paso:
1) Creá una copia profunda de pedido con structuredClone(pedido).
   Guardala en una variable nueva, por ejemplo copia.
2) Modificá SOLO la copia:
   - agregale 'papas' a copia.items (con .push)
   - cambiá copia.cliente a 'Luis'
3) Mostrá pedido y copia con console.log.
   Fijate que pedido tiene que quedar tal cual estaba: ese es el objetivo,
   demostrar que la copia es un cuaderno aparte.

Resultado esperado:
pedido: { id: 1, items: [ 'hamburguesa' ], cliente: 'Ana' }
copia:  { id: 1, items: [ 'hamburguesa', 'papas' ], cliente: 'Luis' }
*/

const pedido = { id: 1, items: ['hamburguesa'], cliente: 'Ana' };

// completá acá