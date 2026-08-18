// 01-process.js — process
// Este ejemplo te muestra la "ficha de identidad" del programa.
// Corrélo así: node ejemplos/01-process.js hola 42

// process.argv: argumentos de la línea de comandos.
// Es como cuando pedís un sándwich y decís "con tomate": lo que pasás
// al correr el comando llega hasta acá.
// node 01-process.js hola 42
//   argv[0] = node
//   argv[1] = ruta del archivo
//   argv[2..] = tus argumentos
console.log('argumentos:', process.argv.slice(2));

console.log('carpeta actual:', process.cwd());
console.log('archivo actual:', __filename);
console.log('carpeta del archivo:', __dirname);

// variables de entorno: datos que vienen del sistema, como las
// preferencias del barrio donde vive el programa.
console.log('HOME:', process.env.HOME || process.env.USERPROFILE);