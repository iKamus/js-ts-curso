# Modulo 14 — Node: servidor HTTP

Un servidor HTTP es como un mozo en un restaurante: recibe el pedido del cliente (la *request*) y le trae lo que pidio (la *response*). Tu programa se queda "parado en el mostrador" escuchando peticiones las 24 horas.

---

## http.createServer

- **Que es**: Funcion de Node que levanta un servidor HTTP. Es como abrir la puerta del restaurante y ponerse a atender.
- **Cuando usarlo**: Siempre que necesites que tu programa responda peticiones de la web (navegadores, curl, apps, etc.).
- **Sintaxis**:
  ```js
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.end('Hola');
  });
  server.listen(3000);
  ```
- **Errores comunes**:
  - Olvidar `server.listen()` — el servidor nunca arranca y no pasa nada.
  - No cerrar `res.end()` — el cliente queda colgado esperando respuesta para siempre.
- **Buenas practicas**:
  - Siempre usar `res.end()` al final de cada ruta, sino el cliente se cuelga.
  - El puerto 3000 esta bien para desarrollo; en produccion se usa otro.

---

## req (request)

- **Que es**: Objeto que representa lo que el cliente te pide. Es como el papelito con el pedido del mozo: dice que URL pidio, que metodo usa (GET, POST, etc.) y que datos trae.
- **Cuando usarlo**: Siempre que necesites saber *que* pidio el cliente.
- **Propiedades principales**:
  | Propiedad | Que es | Ejemplo |
  |---|---|---|
  | `req.method` | Metodo HTTP (GET, POST, PUT, DELETE) | `"GET"` |
  | `req.url` | URL completa como texto | `"/tareas?orden=fecha"` |
  | `req.headers` | Cabeceras HTTP (objeto) | `{ "content-type": "..." }` |
- **Errores comunes**:
  - `req.url` es un string crudo, no un objeto. Para leer query params hay que parsearla con `new URL(req.url, 'http://localhost')`.
- **Buenas practicas**:
  - Siempre parsear la URL antes de usarla: `const url = new URL(req.url, 'http://localhost')`.

---

## res (response)

- **Que es**: Objeto que usas para contestar al cliente. Es como el plato que le devolves al mozo para que se lo lleve al cliente.
- **Cuando usarlo**: Siempre que necesites enviar algo al cliente (texto, JSON, HTML, errores, etc.).
- **Metodos principales**:
  | Metodo | Que hace | Ejemplo |
  |---|---|---|
  | `res.writeHead(codigo, headers)` | Define el codigo de estado y las cabeceras | `res.writeHead(200, { 'Content-Type': 'text/plain' })` |
  | `res.setHeader(nombre, valor)` | Setea una cabecera individual | `res.setHeader('Content-Type', 'application/json')` |
  | `res.end(dato)` | Envia la respuesta y cierra la conexion | `res.end(JSON.stringify({ok: true}))` |
- **Errores comunes**:
  - Llamar a `res.end()` mas de una vez por request — tira error "headers already sent".
  - Olvidar el `Content-Type` — el cliente no sabe que tipo de datos le llegan.
- **Buenas practicas**:
  - Siempre definir `Content-Type` antes de enviar datos.
  - Siempre cerrar con `res.end()`.

---

## Metodos HTTP

- **Que es**: Cada peticion trae un "verbo" que dice que quiere hacer el cliente. Es como si en el restaurante pudieras pedir "ver el menu" (GET), "hacer un pedido nuevo" (POST), "cambiar un pedido" (PUT) o "cancelar un pedido" (DELETE).
- **Cuando usarlo**: Para decidir que hacer segun la accion del cliente.
- **Tabla de metodos**:
  | Metodo | Que hace | Ejemplo de uso |
  |---|---|---|
  | `GET` | Pide datos (lee) | Ver todas las tareas |
  | `POST` | Crea un recurso nuevo | Agregar una tarea |
  | `PUT` | Actualiza un recurso existente | Marcar una tarea como hecha |
  | `DELETE` | Borra un recurso | Eliminar una tarea |
- **Errores comunes**:
  - No validar `req.method` — alguien puede hacer GET a una ruta que espera POST, y el servidor se rompe.
- **Buenas practicas**:
  - Siempre validar el metodo antes de procesar la peticion.
  - Responder con 405 (Method Not Allowed) si el metodo no es el correcto.

---

## URL y query params

- **Que es**: La URL es la direccion del pedido. Los query params son datos extra que vienen despues del `?` en la URL. Es como pedir "un sandwich" (la ruta) "con tomate sin cebolla" (los query params).
- **Cuando usarlo**: Cuando necesitas enviar datos al servidor por la URL (filtros, opciones, busquedas).
- **Sintaxis**:
  ```js
  // URL: /saludo?nombre=Ana&edad=25
  const url = new URL(req.url, 'http://localhost');
  const nombre = url.searchParams.get('nombre');  // "Ana"
  const edad = url.searchParams.get('edad');      // "25"
  const ruta = url.pathname;                      // "/saludo"
  ```
- **Errores comunes**:
  - Olvidar el segundo argumento a `new URL()` (la base) — tira error.
  - Los query params siempre son strings. Para tener un numero hay que convertirlo: `Number(valor)`.
- **Buenas practicas**:
  - Usar `new URL()` en vez de parsear el string a mano.
  - Usar `searchParams.get()` para acceder a cada param.

---

## JSON

- **Que es**: Formato de texto para intercambiar datos entre servidor y cliente. Es como un formulario ordenado: todo tiene nombre y valor. Es el "idioma" que hablan las APIs web.
- **Cuando usarlo**: Siempre que necesites enviar o recibir datos estructurados (objetos, arrays).
- **Sintaxis**:
  ```js
  // Enviar JSON al cliente:
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ mensaje: 'Hola' }));

  // Recibir JSON del cliente (dentro de eventos 'end'):
  const datos = JSON.parse(cuerpo);
  ```
- **Errores comunes**:
  - Olvidar `JSON.stringify()` — el cliente recibe "[object Object]".
  - Olvidar `JSON.parse()` — intentas usar datos que siguen siendo un string.
  - No setear `Content-Type: application/json` — el navegador no sabe que es JSON.
- **Buenas practicas**:
  - Siempre setear el Content-Type correcto.
  - Siempre envolver `JSON.parse()` en un try/catch por si el body viene mal formado.

---

## Leer body de POST

- **Que es**: Cuando el cliente manda datos (un POST o PUT), el body no llega de una — llega por pedazos, como un paquete en varios bultos. Los vas juntando hasta que llega todo.
- **Cuando usarlo**: Siempre que necesites leer los datos que manda el cliente en un POST o PUT.
- **Sintaxis**:
  ```js
  let body = '';
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', () => {
    const datos = JSON.parse(body);
    // acá ya tenés los datos como objeto
  });
  ```
- **Errores comunes**:
  - Olvidar `req.on('end')` — nunca terminas de armar el body.
  - No hacer `JSON.parse()` dentro de `on('end')` — el body todavia no esta completo.
  - No validar que el JSON sea valido — si el cliente manda basura, `JSON.parse()` tira error.
- **Buenas practicas**:
  - Siempre envolver `JSON.parse()` en try/catch.
  - Limitar el tamano del body en produccion para evitar abusos.

---

## Codigo de estado

- **Que es**: Numero de tres digitos que accompany la respuesta. Le dice al cliente si todo salio bien o que salio mal. Es como el semaforo del mozo: verde (todo bien), amarillo (algo raro), rojo (no puede).
- **Cuando usarlo**: Siempre. Cada respuesta debe traer un codigo claro.
- **Tabla de codigos**:
  | Codigo | Significado | Cuando usar |
  |---|---|---|
  | `200` | OK | Todo salio bien (lectura, respuesta normal) |
  | `201` | Created | Se creo un recurso nuevo (POST exitoso) |
  | `400` | Bad Request | El cliente mando datos invalidos |
  | `404` | Not Found | La ruta no existe |
  | `405` | Method Not Allowed | El metodo HTTP no es el correcto |
  | `500` | Internal Server Error | Algo se rompio en el servidor |
- **Errores comunes**:
  - Responder siempre con 200 aunque haya errores — el cliente no puede distinguir que paso.
  - Olvidar `writeHead()` — Node usa 200 por defecto, que puede no ser el caso correcto.
- **Buenas practicas**:
  - Usar el codigo correcto para cada situacion.
  - Enviar un JSON con la descripcion del error junto con el codigo.

---

## Routing

- **Que es**: Decidir que hacer segun la URL y el metodo que pide el cliente. Es como el mozo que segun lo que le pidas, va a la barra, a la cocina o a la caja.
- **Cuando usarlo**: Siempre que tu servidor tenga mas de una ruta.
- **Sintaxis basica**:
  ```js
  if (url === '/tareas' && req.method === 'GET') {
    // devolver tareas
  } else if (url === '/tareas' && req.method === 'POST') {
    // crear tarea
  } else {
    res.writeHead(404);
    res.end('No encontrado');
  }
  ```
- **Errores comunes**:
  - No validar el metodo HTTP — cualquiera puede hacer GET a una ruta de POST.
  - No poner un caso "por defecto" (404) — las rutas inexistentes quedan sin respuesta.
- **Buenas practicas**:
  - Siempre validar URL + metodo juntos.
  - Siempre tener un 404 para rutas que no existen.
  - En servidores grandes, usar un router (como express) en vez de if/else anidados.

---

## Ejemplos

| Archivo | Tema |
|---|---|
| `ejemplos/01-servidor-basico.js` | Primer servidor HTTP, req y res |
| `ejemplos/02-api-json.js` | API JSON con routing, query params, metodos |

## Ejercicios (todos en puerto 3000; se prueban con curl)

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-rutas.js` | Servidor con rutas basicas |
| `ejercicios/ej-02-saludo.js` | Saludo con query param |
| `ejercicios/ej-03-notas.js` | API de notas (GET/POST) |
| `ejercicios/ej-04-html.js` | Servir un archivo HTML |

Para frenar un servidor: `Ctrl+C` en la terminal donde corre. Si algo no responde, revisa que URL estas pidiendo y que metodo estas usando.
