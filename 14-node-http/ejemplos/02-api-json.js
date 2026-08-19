// 02-api-json.js — API JSON con routing y query params
// Este servidor reconoce varias rutas y responde distinto segun
// lo que le pidas. Es como un mozo que conoce la carta entera.
//
// Corre: node ejemplos/02-api-json.js
// Proba:
//   curl.exe http://localhost:3000/tareas
//   curl.exe http://localhost:3000/ping
//   curl.exe "http://localhost:3000/saludo?nombre=Ana"
//   curl.exe "http://localhost:3000/saludo"
//   curl.exe http://localhost:3000/nada

const http = require('http');

const tareas = [
  { id: 1, titulo: 'Estudiar JS', done: false },
  { id: 2, titulo: 'Terminar modulo 14', done: true },
];

const server = http.createServer((req, res) => {
  // new URL: convierte el string de la URL en un objeto comodo
  // El segundo argumento es la "base" (obligatoria, no importa cual sea)
  const url = new URL(req.url, 'http://localhost');
  const ruta = url.pathname; // el "camino": /saludo, /tareas, /ping, etc.

  // --- Routing: segun la ruta y el metodo, hacemos una cosa u otra ---

  // Ruta /saludo con query param ?nombre=...
  // searchParams.get('nombre') busca el valor del param "nombre" en la URL
  if (ruta === '/saludo') {
    const nombre = url.searchParams.get('nombre');
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ saludo: nombre ? `Hola, ${nombre}!` : 'Hola, mundo!' }));
    return; // frenamos aca para que no siga evaluando las demas rutas
  }

  // Ruta /tareas: devuelve la lista de tareas
  if (ruta === '/tareas' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(tareas));
    return;
  }

  // Ruta /ping: responde con ok y la hora actual
  if (ruta === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: true, hora: new Date().toISOString() }));
    return;
  }

  // Si nada coincide: 404 (No Found)
  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: `No existe la ruta ${ruta}` }));
});

server.listen(3000, () => {
  console.log('API en http://localhost:3000');
});
