// 02-promesas.js — Promesas

// Una promesa es como un pedido por delivery: lo encargás, seguís con
// otra cosa, y cuando llega te avisan (o te avisan si algo salió mal).
function esperar(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error('ms no puede ser negativo'));
      return;
    }
    setTimeout(() => resolve(`esperé ${ms}ms`), ms);
  });
}

// then / catch / finally
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

// reject
// Acá rechazamos a propósito: un tiempo negativo no tiene sentido.
esperar(-1).catch((err) => console.log('Error:', err.message));

// Promise.all: espera TODAS (si una falla, falla todo)
// Es como esperar a que salgan todos los pedidos juntos: si uno se cae,
// se cae todo el combo.
Promise.all([esperar(100), esperar(200)]).then((valores) => {
  console.log('all:', valores);
});

// Promise.allSettled: estado de cada una, aunque falle
// Acá te enterás qué pasó con cada una por separado: aunque una falle,
// las demás igual te cuentan cómo les fue.
Promise.allSettled([esperar(100), esperar(-1)]).then((resultados) => {
  console.log('allSettled:', resultados.map((r) => r.status));
});