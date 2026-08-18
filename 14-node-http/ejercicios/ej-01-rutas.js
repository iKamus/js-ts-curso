/*
Ejercicio 1 — Servidor con rutas
Tu servidor es como un kiosco con varias cosas en el mostrador: según
lo que te pidan (la URL), respondés algo distinto.

Paso a paso:
1) Creá el servidor. Fijate cómo se arma en ejemplos/01-servidor-basico.js:
   http.createServer recibe una función con dos parámetros:
   - req es lo que pide el cliente (acá nos importa req.url, la dirección)
   - res es lo que le respondés vos
2) Adentro, fijate qué URL te piden (req.url) con if / else if.
   El patrón de responder según la URL está en ejemplos/02-api-json.js:
   - '/'          → respondé con TEXTO: "Bienvenido a mi servidor"
     (Content-Type: 'text/plain; charset=utf-8')
   - '/hora'      → respondé con JSON: { hora: new Date().toISOString() }
     (Content-Type: 'application/json; charset=utf-8' y JSON.stringify)
   - cualquier otra → respondé 404 con JSON: { error: 'no encontrado' }
     (res.writeHead(404, ...) avisa que no existe esa página)
3) Al final: server.listen(3000, ...) para arrancar (el 3000 es el
   "teléfono" donde va a atender; el puerto). Fijate el patrón en
   ejemplos/01-servidor-basico.js.

Lo probás con curl (el servidor queda corriendo hasta que frenes con Ctrl+C):
$ curl.exe http://localhost:3000/
Bienvenido a mi servidor
$ curl.exe http://localhost:3000/hora
{"hora":"2026-08-15T..."}
$ curl.exe http://localhost:3000/x
{"error":"no encontrado"}
*/

const http = require('http');

// completá acá