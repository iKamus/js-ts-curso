// 04-fetch.js — fetch (nativo en Node 18+)
// NOTA: necesita internet. Si no tenés conexión, corré los otros ejemplos.
// fetch es como ir a buscar la lista de precios del almacén: vas a buscar,
// esperás la respuesta y después la revisás con calma.

async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (err) {
    console.log('Error de red:', err.message);
  }
}

obtenerDatos();