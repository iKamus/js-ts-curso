// 03-async-await.js — async / await

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async/await: código que parece síncrono
// await "pausa" y espera, como decirle a quien te atiende:
// "mirá, mientras espero me tomo un mate y cuando esté listo me avisás".
async function main() {
  console.log('arranco');
  await esperar(500);
  console.log('pasó medio segundo');
  await esperar(500);
  console.log('pasó un segundo');
}
main();

// con try/catch
// El try/catch es tu plan B: si algo sale mal, lo atrapás acá
// y el programa sigue andando en vez de romperse.
async function puedeFallar() {
  throw new Error('boom');
}

async function ejecutar() {
  try {
    await puedeFallar();
  } catch (err) {
    console.log('Atrapado:', err.message);
  }
}
ejecutar();