/*
Ejercicio 5 — Aeropuertos (verificacion explicita)

Tienes una lista de viajes:
  const viajes = [
    { destino: 'Bariloche', aeropuerto: { nombre: 'Bari' } },
    { destino: 'Madryn' },
  ];
Observa: el primer viaje tiene aeropuerto (con su nombre adentro),
pero el segundo NO tiene la propiedad aeropuerto. Si hicieras
viaje.aeropuerto.nombre en el segundo, el programa se rompe,
porque no puedes leer 'nombre' de algo que no existe.

Para eso existe un truco simple: preguntar PRIMERO si el aeropuerto
existe. Si existe, lees el nombre; si no existe, usas el plan B.
Es como mirar si la casilla esta vacia antes de leerla: si no hay
nada adentro, no la abres y pasas a la siguiente.

Paso a paso:
1) Recorre el array de viajes con for...of (o forEach).
2) Para cada viaje, verifica si viaje.aeropuerto existe (un if o la
   condicion de un ternario: condicion ? valorSi : valorSiNo).
   - Si existe, toma viaje.aeropuerto.nombre ('Bari').
   - Si no existe, el resultado es 'sin aeropuerto'.
3) Muestra por cada viaje:
   "El viaje a <destino> usa el aeropuerto <nombre o 'sin aeropuerto'>"

Pista: tambien puedes usar el operador || como plan B: si el lado
izquierdo es falsy, toma el plan B. Pero la verificacion explicita
con if o ternario es la mas clara.

Resultado esperado:
El viaje a Bariloche usa el aeropuerto Bari
El viaje a Madryn usa el aeropuerto sin aeropuerto
*/

const viajes = [
  { destino: 'Bariloche', aeropuerto: { nombre: 'Bari' } },
  { destino: 'Madryn' },
];

// completa aqui
