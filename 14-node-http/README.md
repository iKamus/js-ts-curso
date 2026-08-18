# Módulo 14 — Node: servidor HTTP

Imaginá un restaurante: vos (el cliente) hacés un pedido, y el mozo lo lleva a la cocina y te trae la comida. Acá el servidor HTTP es ese mozo: recibe el pedido (la *request*) y responde con la comida (la *response*). Tu programa se queda "parado en el mostrador" esperando que le lleguen pedidos.

## Primer servidor
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola desde Node!');
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
```
- `req` = la petición (`req.method`, `req.url`) — lo que te pide el cliente
- `res` = la respuesta (`res.writeHead`, `res.end`) — lo que le contestás
- `listen(puerto)` pone el servidor a escuchar, como abrir la puerta del local

## Probá con curl (PowerShell)
En PowerShell, `curl` es un alias de Invoke-WebRequest. Usá **`curl.exe`** para el curl real:
```
curl.exe http://localhost:3000/tareas
curl.exe -X POST http://localhost:3000/notas -H "Content-Type: application/json" -d "{\"titulo\":\"x\"}"
```
O abrí el navegador en `http://localhost:3000`. Mirá, es como llamar por teléfono al local: `curl` es tu llamada.

## JSON
El JSON es el lenguaje común que usan las computadoras para pasarse datos, como un formulario lleno de forma ordenada.
```js
res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
res.end(JSON.stringify({ ok: true }));
```

## Leer el body de un POST
Cuando el cliente manda algo en el pedido (el *body*), lo recibís por partes, como cuando llega un paquete en varios bultos. Los vas juntando hasta que llega todo y recién ahí lo abrís.
```js
let cuerpo = '';
req.on('data', (chunk) => { cuerpo += chunk; });
req.on('end', () => {
  const datos = JSON.parse(cuerpo);
  // ...
});
```

## Códigos de estado útiles
Pensalos como la respuesta del mozo: `200` OK · `201` creado · `400` petición inválida · `404` no encontrado · `500` error interno

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-servidor-basico.js` | primer servidor |
| `ejemplos/02-api-json.js` | API JSON con routing |

## Ejercicios (todos en puerto 3000; probalos con curl)
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-rutas.js` | servidor con rutas |
| `ejercicios/ej-02-saludo.js` | saludo con query param |
| `ejercicios/ej-03-notas.js` | API de notas (GET/POST) |
| `ejercicios/ej-04-html.js` | servir un archivo HTML |

Para frenar un servidor: `Ctrl+C` en la terminal donde corre. Y tranqui si al principio algo no responde como esperás: fijate qué URL estás pidiendo, que la mayoría de las veces la respuesta te lo cuenta.