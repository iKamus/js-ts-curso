/*
Ejercicio 3 — Mini API de notas (en memoria)
Tu servidor va a llevar el control de las notas, como la libreta de
pendientes del almacen, pero guardada en memoria (se reinicia al
cortar el servidor, no te preocupes).

Vas a manejar un array de notas, cada una con id y titulo:
  const notas = [];   // arranca vacio

Rutas:
- GET  /notas       -> todas las notas (como array JSON)
- GET  /notas/1     -> la nota con id 1 (o 404 si no existe)
- POST /notas       -> agrega una nota nueva { titulo } -> 201

Paso a paso:
1) Crea el servidor en el puerto 3000 (como en el ejercicio 1).
2) Fijate que metodo es (req.method) y que URL (req.url):
   - POST y url === '/notas': hay que LEER EL BODY (los datos que
     manda el cliente). El body llega por partes, como un paquete en
     varios bultos. La respuesta (res) tiene eventos para escuchar
     partes ("data") y el aviso de que llego todo ("end"). En los
     callbacks vas juntando los pedazos en un string y cuando llega
     "end" ya tenes todo el body.
     Despues convertis el body a objeto con JSON.parse(cuerpo),
     le das un id nuevo a la nota (podes usar notas.length + 1),
     la agregas con notas.push(...) y respondes 201 con la nota.
   - GET y url === '/notas': responde todo el array con JSON.stringify(notas).
   - GET y url empieza con '/notas/': agarra el id de la parte de
     atras (pensa en el split que ya conocias, o en como partir una
     URL), convertilo a numero con Number(...), busca la nota con
     .find (lo viste en el modulo 04), y si no existe -> 404.
3) Ojo con los Content-Type: 'application/json; charset=utf-8'.

Tip: para sacar el id de una URL como "/notas/3", podes usar:
  const partes = url.split('/');
  const id = Number(partes[partes.length - 1]);

Proba (cada comando en una terminal aparte mientras el servidor corre):
$ curl.exe http://localhost:3000/notas
[]
$ curl.exe -X POST http://localhost:3000/notas -H "Content-Type: application/json" -d "{\"titulo\":\"comprar pan\"}"
{"id":1,"titulo":"comprar pan"}
$ curl.exe http://localhost:3000/notas/1
{"id":1,"titulo":"comprar pan"}

Resultado esperado:
- GET  /notas       -> JSON [] (array vacio al inicio)
- POST /notas       -> JSON { "id": 1, "titulo": "comprar pan" } con status 201
- GET  /notas/1     -> JSON { "id": 1, "titulo": "comprar pan" }
- GET  /notas/999   -> JSON { "error": "No encontrada" } con status 404
*/

const http = require('http');

// completá acá
