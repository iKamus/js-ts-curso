/*
Ejercicio 1 — Servidor con rutas
Tu servidor es como un kiosco con varias cosas en el mostrador: segun
lo que te pidan (la URL), respondes algo distinto.

Paso a paso:
1) Crea el servidor. Fijate como se arma en ejemplos/01-servidor-basico.js:
   http.createServer recibe una funcion con dos parametros:
   - req es lo que pide el cliente (nos importa req.url, la direccion)
   - res es lo que le respondes vos
2) Adentro, fijate que URL te piden (req.url) con if / else if.
   El patron de responder segun la URL esta en ejemplos/02-api-json.js:
   - '/'          -> responde con TEXTO: "Bienvenido a mi servidor"
     (Content-Type: 'text/plain; charset=utf-8')
   - '/hora'      -> responde con JSON: { hora: new Date().toISOString() }
     (Content-Type: 'application/json; charset=utf-8' y JSON.stringify)
   - cualquier otra -> responde 404 con JSON: { error: 'no encontrado' }
     (res.writeHead(404, ...) avisa que no existe esa pagina)
3) Al final: server.listen(3000, ...) para arrancar (el 3000 es el
   "telefono" donde va a atender; el puerto). Fijate el patron en
   ejemplos/01-servidor-basico.js.

Tip: usa URL exacta para '/'. Si el cliente pide '//' o algo raro,
puede no coincidir.

Lo probas con curl (el servidor queda corriendo hasta que frenes con Ctrl+C):
$ curl.exe http://localhost:3000/
Bienvenido a mi servidor
$ curl.exe http://localhost:3000/hora
{"hora":"2026-08-15T..."}
$ curl.exe http://localhost:3000/x
{"error":"no encontrado"}

Resultado esperado:
- GET /       -> texto "Bienvenido a mi servidor"
- GET /hora   -> JSON { "hora": "<ISO date>" }
- Cualquier otra ruta -> JSON { "error": "no encontrado" } con status 404
*/

const http = require('http');

// completá acá
