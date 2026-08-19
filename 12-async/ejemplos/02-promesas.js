// 02-promesas.js — Promesas
// Correr con: node 02-promesas.js

// Una promesa es como un pedido por delivery: lo encargas, seguis con
// otra cosa, y cuando llega te avisan (o te avisan si algo salio mal).

function esperar(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error('ms no puede ser negativo'));
      return;
    }
    setTimeout(() => resolve(`espere ${ms}ms`), ms);
  });
}

// --- then / catch / finally ---
// then es "cuando se cumple", catch es "si falla" y finally es
// "pase lo que pase, esto se hace igual".

esperar(300)
  .then((mensaje) => {
    console.log(mensaje);
    return esperar(100);       // encadenar devuelve otra promesa
  })
  .then((mensaje2) => console.log(mensaje2))
  .catch((err) => console.log('Error:', err.message))
  .finally(() => console.log('siempre al final'));

// --- reject ---
// Rechazamos a proposito: un tiempo negativo no tiene sentido.
esperar(-1).catch((err) => console.log('Error:', err.message));

// --- Promise.all: espera TODAS (si una falla, falla todo) ---
// Es como esperar a que salgan todos los pedidos juntos: si uno se cae,
// se cae todo el combo.
Promise.all([esperar(100), esperar(200)]).then((valores) => {
  console.log('all:', valores);
});

// --- Promise.allSettled: estado de cada una, aunque falle ---
// Te enteras que paso con cada una por separado: aunque una falle,
// las demas igual te cuentan como les fue.
Promise.allSettled([esperar(100), esperar(-1)]).then((resultados) => {
  console.log('allSettled:', resultados.map((r) => r.status));
});

// --- Promise.race: la primera que termine ---
// Es como una carrera: el que cruza la linea primero gana.
Promise.race([esperar(300), esperar(50)]).then((valor) => {
  console.log('race ganador:', valor);
});

// --- Promise.race como timeout ---
// Si queres que algo falle si tarda demasiado, combinas con un timeout.
const conTimeout = Promise.race([
  esperar(1000),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 200)
  ),
]);
conTimeout.catch((err) => console.log('race timeout:', err.message));
