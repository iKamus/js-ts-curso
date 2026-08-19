/*
Proyecto: API de tareas (REST)
==============================

Objetivo: Armar una API REST completa para gestionar tareas, todo en memoria.
Esto es el ejercicio integrador del modulo: usa http, routing, JSON,
query params, body de POST, PUT y DELETE, y codigos de estado.

Rutas:
- GET    /tareas           -> lista todas las tareas
- GET    /tareas/:id       -> una tarea por id
- POST   /tareas           -> crea una tarea nueva
- PUT    /tareas/:id       -> actualiza una tarea existente
- DELETE /tareas/:id       -> borra una tarea

Estructura de una tarea:
  { id: 1, titulo: "Aprender HTTP", completada: false }

Requisitos:
1) Todas las respuestas en JSON (Content-Type: application/json).
2) Usar los codigos de estado correctos (200, 201, 204, 400, 404).
3) Manejar errores de JSON invalido en POST y PUT.
4) La API es en memoria: se reinicia al cortar el servidor.

Pasos sugeridos:
1) Lee este README completo.
2) Abre el archivo api-tareas.js y completa el codigo donde dice
   "// completá acá".
3) Fijate en los ejemplos del modulo como se arma el servidor,
   como se parsea la URL, como se lee el body y como se responde.
4) Proba cada ruta con curl.exe (ver abajo).
5) Cuando todo funcione, tu API esta lista.

Proba con curl (abri otra terminal para cada comando):

# Ver todas las tareas (al inicio, devuelve [])
curl.exe http://localhost:3000/tareas

# Crear una tarea
curl.exe -X POST http://localhost:3000/tareas -H "Content-Type: application/json" -d "{\"titulo\":\"Aprender HTTP\"}"

# Crear otra tarea
curl.exe -X POST http://localhost:3000/tareas -H "Content-Type: application/json" -d "{\"titulo\":\"Hacer ejercicios\"}"

# Ver todas (ahora hay 2)
curl.exe http://localhost:3000/tareas

# Ver una tarea por id
curl.exe http://localhost:3000/tareas/1

# Marcar como completada
curl.exe -X PUT http://localhost:3000/tareas/1 -H "Content-Type: application/json" -d "{\"completada\":true}"

# Verificar que se actualizo
curl.exe http://localhost:3000/tareas/1

# Borrar una tarea
curl.exe -X DELETE http://localhost:3000/tareas/1

# Verificar que se borro
curl.exe http://localhost:3000/tareas

# Intentar ver una tarea que no existe
curl.exe http://localhost:3000/tareas/999

Resultado esperado:
- GET  /tareas       -> JSON array de tareas, status 200
- GET  /tareas/:id   -> JSON de la tarea, status 200 (o 404 si no existe)
- POST /tareas       -> JSON de la tarea creada, status 201
- PUT  /tareas/:id   -> JSON de la tarea actualizada, status 200 (o 404 si no existe)
- DELETE /tareas/:id -> sin body, status 204 (o 404 si no existe)
- POST /tareas con JSON invalido -> status 400
*/

// completá acá
