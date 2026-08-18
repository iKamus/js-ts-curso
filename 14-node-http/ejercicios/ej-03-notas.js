/*
Ejercicio 3 — Mini API de notas (en memoria)
Tu servidor va a llevar el control de las notas, como la libreta de
pendientes del almacén, pero guardada en memoria (se reinicia al
cortar el servidor, no te preocupes).

Vas a manejar un array de notas, cada una con id y titulo:
  const notas = [];   // arranca vacío

Rutas:
- GET  /notas       → todas las notas (como array JSON)
- GET  /notas/1     → la nota con id 1 (o 404 si no existe)
- POST /notas       → agrega una nota nueva { titulo } → 201

Paso a paso:
1) Creá el servidor en el puerto 3000 (como en el ejercicio 1).
2) Fijate qué método es (req.method) y qué URL (req.url):
   - POST y url === '/notas': hay que LEER EL BODY (los datos que
     manda el cliente). El body llega por partes, como un paquete en
     varios bultos. La respuesta (res) tiene eventos para escuchar
     partes ("data") y el aviso de que llegó todo ("end"). En los
     callbacks vas juntando los pedazos en un string y cuando llega
     "end" ya tenés todo el body.
     Después convertís el body a objeto con JSON.parse(cuerpo),
     le das un id nuevo a la nota (podés usar notas.length + 1),
     la agregás con notas.push(...) y respondés 201 con la nota.
   - GET y url === '/notas': respondé todo el array con JSON.stringify(notas).
   - GET y url empieza con '/notas/': agarrá el id de la parte de
     atrás (pensá en el split que ya conocés, o en cómo partir una
     URL), convertilo a número con Number(...), buscá la nota con
     .find (lo viste en el módulo 04), y si no existe → 404.
3) Ojo con los Content-Type: 'application/json; charset=utf-8'.

Probá (cada comando en una terminal aparte mientras el servidor corre):
$ curl.exe http://localhost:3000/notas
[]
$ curl.exe -X POST http://localhost:3000/notas -H "Content-Type: application/json" -d "{\"titulo\":\"comprar pan\"}"
{"id":1,"titulo":"comprar pan"}
$ curl.exe http://localhost:3000/notas/1
{"id":1,"titulo":"comprar pan"}
*/

const http = require('http');

// completá acá