# Proyecto — API REST completa

## Que vas a hacer

Vas a crear una API REST completa para gestionar tareas: puedes
crear, leer, actualizar y eliminar tareas. La API respondera a
peticiones en formato JSON con los códigos de estado correctos.

Es como un sistema de tickets: cada tarea es un ticket, y puedes
crear, ver, actualizar o cerrar cada uno.

## Que practicas

- `http` para crear servidores
- `req.method` para validar metodos HTTP
- `req.url` y `new URL()` para parsear rutas y query params
- `JSON.stringify` y `JSON.parse` para intercambiar datos
- `req.on('data')` y `req.on('end')` para leer body de POST/PUT
- Códigos de estado: 200, 201, 400, 404, 405, 500
- Routing básico con if/else

## Requisitos

La API debe:

1. Tener una base de datos en memoria (array de objetos con tareas).
2. Crear endpoint GET /tareas que devuelva todas las tareas:
   - Devuelve el array con status 200.
3. Crear endpoint GET /tareas/:id que devuelva una tarea por ID:
   - Usa parsePath para obtener el id (ej: "1" o "5")
   - Si no encuentra, responde 404.
4. Crear endpoint POST /tareas que cree una nueva tarea:
   - Lee el body con req.on('data') y req.on('end')
   - Crea una tarea con id autoincremental (empezar en 1)
   - Devuelve la tarea creada con status 201.
5. Crear endpoint PUT /tareas/:id que actualice una tarea:
   - Lee el body y actualiza los campos existentes
   - Si no encuentra, responde 404.
6. Crear endpoint DELETE /tareas/:id que elimine una tarea:
   - Elimina la tarea del array
   - Si no encuentra, responde 404.
7. Responder 405 (Method Not Allowed) si se usa un metodo incorrecto.
8. Responder 404 para rutas que no existen.
9. Soportar query params opcionales:
   - ?completada=true devuelve solo tareas completadas
   - ?completada=false devuelve solo tareas pendientes

## Pasos sugeridos

1. Crear una funcion `parsePath(url)` que devuelva el id si la ruta
   coincide con `/tareas/:id`, o null si no.
2. Crear la funcion `buscarTarea(id)` que busque en el array por ID.
3. Crear las 5 rutas principales (GET, POST, PUT, DELETE, query params).
4. Implementar la lógica de query params:
   - Si req.url incluye `?completada=true`, filtrar el array.
   - Si `?completada=false`, filtrar el array.
5. Probar con curl:
   - `curl.exe http://localhost:3000/tareas` (GET)
   - `curl.exe -X POST -H "Content-Type: application/json" -d '{"titulo":"nueva"}' http://localhost:3000/tareas` (POST)
   - `curl.exe http://localhost:3000/tareas/1` (GET por id)
   - `curl.exe -X PUT -H "Content-Type: application/json" -d '{"titulo":"actualizada"}' http://localhost:3000/tareas/1` (PUT)
   - `curl.exe -X DELETE http://localhost:3000/tareas/1` (DELETE)

## Resultado esperado

```
# GET /tareas
$ curl.exe http://localhost:3000/tareas
[
  {"id":1,"titulo":"primera","texto":"hola","completada":false},
  {"id":2,"titulo":"segunda","texto":"mundo","completada":false}
]

# POST /tareas
$ curl.exe -X POST -H "Content-Type: application/json" -d '{"titulo":"tercera","texto":"adios"}' http://localhost:3000/tareas
{"id":3,"titulo":"tercera","texto":"adios","completada":false}

# GET /tareas/1
$ curl.exe http://localhost:3000/tareas/1
{"id":1,"titulo":"primera","texto":"hola","completada":false}

# PUT /tareas/1
$ curl.exe -X PUT -H "Content-Type: application/json" -d '{"completada":true}' http://localhost:3000/tareas/1
{"id":1,"titulo":"primera","texto":"hola","completada":true}

# DELETE /tareas/1
$ curl.exe -X DELETE http://localhost:3000/tareas/1
{"mensaje":"Tarea eliminada"}

# GET /tareas?completada=true
$ curl.exe http://localhost:3000/tareas?completada=true
[]

# Método incorrecto
$ curl.exe -X POST http://localhost:3000/tareas/1
{"error":"Metodo no permitido"}

# Ruta no encontrada
$ curl.exe http://localhost:3000/otra
{"error":"Ruta no encontrada"}
```

---

Si algo te da error, lee los mensajes de Node y de curl. El servidor
queda corriendo hasta que frenes con Ctrl+C.
