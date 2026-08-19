// 03-async-await.js — async / await
// Correr con: node 03-async-await.js

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async/await: codigo que parece sincrono.
// await "pausa" y espera, como decirle a quien te atiende:
// "mientras espero me tomo un mate y cuando este listo me avisas".

async function main() {
  console.log('arranco');
  await esperar(500);
  console.log('paso medio segundo');
  await esperar(500);
  console.log('paso un segundo');
}
main();

// --- con try/catch ---
// El try/catch es tu plan B: si algo sale mal, lo atrapas ahi
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

// --- encadenar con await ---
// Cada await espera a que la promesa resuelva, como hacer una receta
// paso a paso: primero lavas, despues picas, despues cocinas.

async function prepararComida() {
  try {
    const paso1 = await esperar(100);
    console.log('1. lavar verduras');
    const paso2 = await esperar(100);
    console.log('2. picar verduras');
    const paso3 = await esperar(100);
    console.log('3. cocinar');
  } catch (err) {
    console.log('Error:', err.message);
  }
}
prepararComida();
