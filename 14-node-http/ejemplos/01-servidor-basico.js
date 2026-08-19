// 01-servidor-basico.js — Primer servidor HTTP
// Este servidor es como un kiosco con un solo producto: siempre responde
// lo mismo sin importar que le pidas.
//
// Corre: node ejemplos/01-servidor-basico.js
// Proba: curl.exe http://localhost:3000

const http = require('http');

const server = http.createServer((req, res) => {
  // req.method: el "verbo" del pedido (GET, POST, etc.)
  // req.url: la direccion que pidieron (("/", "/hora", "/tareas", etc.)
  console.log(`${req.method} ${req.url}`);

  // writeHead: define el codigo de estado (200 = OK) y las cabeceras
  // Content-Type le dice al cliente que tipo de datos le mandas
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // end: manda la respuesta y cierra la conexion
  // Sin end, el cliente se queda colgado esperando
  res.end('Hola desde Node!');
});

// listen: abre el servidor en el puerto 3000
// Es como abrir la puerta del kiosco y quedarse esperando clientes
server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
  console.log('Presiona Ctrl+C para detenerlo');
});
