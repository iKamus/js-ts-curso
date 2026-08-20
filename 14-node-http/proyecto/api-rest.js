// PROYECTO — API REST completa
// Correr con: node api-rest.js
// Probar con: curl.exe <comandos>

const http = require('http');

// completa aqui

// base de datos en memoria
let tareas = [
  { id: 1, titulo: 'primera', texto: 'hola', completada: false },
  { id: 2, titulo: 'segunda', texto: 'mundo', completada: false }
];

// funciones auxiliares
function parsePath(url) {
  // completa aqui
}

function buscarTarea(id) {
  // completa aqui
}

// completa aqui: crear servidor en puerto 3000
