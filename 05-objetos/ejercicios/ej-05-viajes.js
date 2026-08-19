/*
Ejercicio 5 — Optional chaining

Tenés una lista de viajes:
  const viajes = [
    { destino: 'Bariloche', aeropuerto: { nombre: 'Bari' } },
    { destino: 'Madryn' },
  ];
Fijate: el primer viaje tiene aeropuerto (con su nombre adentro),
pero el segundo NO tiene la propiedad aeropuerto. Si hicieras
viaje.aeropuerto.nombre en el segundo, el programa se rompe,
porque no podés leer 'nombre' de algo que no existe.

Para eso existe el optional chaining (?.). Es como preguntar sin que
te corten el teléfono: si lo que buscás no existe, en vez de romperte
el programa te devuelve undefined y seguís de largo. Fijate cómo se
escribe en ejemplos/04-referencias.js (la parte de optional chaining).

Paso a paso:
1) Recorré el array de viajes con for...of (o forEach).
2) Para cada viaje, leé el nombre del aeropuerto con el optional
   chaining: si el aeropuerto existe te da 'Bari'; si no existe te da
   undefined (sin romper).
3) Si da undefined, mostrá 'sin aeropuerto'. Si no, mostrá el nombre.
   Pista: podés usar el operador || o ?? como plan B: si el lado
   izquierdo es undefined, toma el plan B.
4) Imprimí por cada viaje:
   "El viaje a <destino> usa el aeropuerto <nombre o 'sin aeropuerto'>"

Resultado esperado:
El viaje a Bariloche usa el aeropuerto Bari
El viaje a Madryn usa el aeropuerto sin aeropuerto
*/

const viajes = [
  { destino: 'Bariloche', aeropuerto: { nombre: 'Bari' } },
  { destino: 'Madryn' },
];

// completa aquí
