// 01-process.js — process, __dirname, __filename
// Process es la "ficha de identidad" del programa: quién es, dónde está,
// qué le pasaron cuando lo arrancaste.
// Corrélo así: node ejemplos/01-process.js hola 42

// --- process.argv ---
// Los argumentos que le pasaste al programa al correrlo.
// Los primeros dos son siempre Node y la ruta del archivo, los tuyos
// empiezan en el indice 2.
// node 01-process.js hola 42
//   [0] = node, [1] = ruta, [2] = "hola", [3] = "42"
console.log('argumentos:', process.argv.slice(2));

// --- process.cwd() ---
// Carpeta desde donde se ejecuto el comando (no es la del archivo).
// Es como la direccion de donde estás parado ahora mismo.
console.log('carpeta actual:', process.cwd());

// --- __dirname y __filename ---
// __dirname = carpeta donde está este archivo
// __filename = ruta completa de este archivo
// En CommonJS se usan directamente (sin require).
// IMPORTANTE: en ES Modules (import) no existen; hay que usar import.meta.url
console.log('carpeta del archivo:', __dirname);
console.log('archivo actual:', __filename);

// --- process.env ---
// Variables de entorno del sistema: datos que vienen del sistema operativo,
// como las preferencias del barrio donde vive el programa.
console.log('HOME:', process.env.HOME || process.env.USERPROFILE);

// --- process.version y process.platform ---
console.log('Node:', process.version);
console.log('Plataforma:', process.platform);
