// 04-fetch.js — fetch (nativo en Node 18+)
// NOTA: necesita internet. Si no hay conexion, correr los otros ejemplos.
// Correr con: node 04-fetch.js

// fetch es como ir a buscar datos a otro lugar: le decis "traeme esto",
// esperas la respuesta y despues la revisas con calma.

async function obtenerPost() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log('Post:', datos.title);
  } catch (err) {
    console.log('Error de red:', err.message);
  }
}

obtenerPost();

// --- fetch con POST ---
// Para enviar datos, pasas un segundo parametro con method, headers y body.

async function crearPost() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Nuevo post',
        body: 'Contenido del post',
        userId: 1,
      }),
    });
    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log('Post creado, id:', datos.id);
  } catch (err) {
    console.log('Error al crear:', err.message);
  }
}

crearPost();
