// 01-servidor-basico.js — Primer servidor HTTP
// Tu servidor es el mozo del restaurante: escucha el pedido (request)
// y responde con la comida (response).
// Corré: node ejemplos/01-servidor-basico.js
// Probá: curl.exe http://localhost:3000  (o abrí el navegador)

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  // writeHead: qué vas a contestar y en qué "idioma" (texto plano)
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola desde Node!');
});

// listen: abrís la puerta del local y te quedás esperando clientes
server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});