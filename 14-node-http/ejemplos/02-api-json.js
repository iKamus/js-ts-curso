// 02-api-json.js — API JSON con routing
// Acá el servidor es como un mozo que conoce la carta entera: según la
// URL que le pidas, te trae un plato u otro. Es el "routing" (rutas).
// Corré: node ejemplos/02-api-json.js
// Probá:
//   curl.exe http://localhost:3000/tareas
//   curl.exe http://localhost:3000/ping
//   curl.exe "http://localhost:3000/saludo?nombre=Ana"
//   curl.exe "http://localhost:3000/saludo"
//   curl.exe http://localhost:3000/nada

const http = require('http');

const tareas = [
  { id: 1, titulo: 'Estudiar JS', done: false },
  { id: 2, titulo: 'Terminar módulo 14', done: true },
];

const server = http.createServer((req, res) => {
  const url = req.url;

  // query params: los datos que vienen en la URL después del ?
  // /saludo?nombre=Ana → el "camino" es /saludo y el dato es nombre=Ana.
  // new URL(url, base) convierte la URL en un objeto cómodo para leerlos,
  // y searchParams.get('clave') te da el valor de esa clave (o null si no viene).
  const urlCompleta = new URL(req.url, 'http://localhost');
  const nombre = urlCompleta.searchParams.get('nombre');
  if (urlCompleta.pathname === '/saludo') {
    res.writeHead(200);
    res.end(JSON.stringify({ saludo: nombre ? `Hola, ${nombre}!` : 'Hola, mundo!' }));
    return;
  }

  // decimos que la respuesta va en "idioma JSON"
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*'); // CORS: dejamos entrar a cualquiera

  // Según la URL, contestamos una cosa u otra. Si nada coincide,
  // avisamos que no está en la carta (404).
  if (url === '/tareas' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(tareas));
  } else if (url === '/ping') {
    res.writeHead(200);
    res.end(JSON.stringify({ ok: true, hora: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'No existe ' + url }));
  }
});

server.listen(3000, () => {
  console.log('API en http://localhost:3000');
});