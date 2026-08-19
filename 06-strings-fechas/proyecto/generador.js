// generador.js -- Generador de contrasenas

const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz';
const MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMEROS = '0123456789';
const SIMBOLOS = '!@#$%^&*';
const TODOS = MINUSCULAS + MAYUSCULAS + NUMEROS + SIMBOLOS;

// completa aca: funcion generarPassword(longitud)
// Debe devolver una contrasena aleatoria de la longitud pedida
// usando caracteres de TODOS.


// completa aca: funcion generarPasswordSegura(longitud)
// Debe devolver una contrasena que tenga al menos:
//   1 minuscula, 1 mayuscula, 1 numero y 1 simbolo.


// --- Mostrar resultados ---
console.log('=== Generador de contrasenas ===\n');

console.log('Contrasenas de 8 caracteres:');
for (let i = 0; i < 3; i++) {
  // completa aca: llamar a generarPassword(8) y mostrar con console.log
}

console.log('\nContrasenas de 12 caracteres:');
for (let i = 0; i < 3; i++) {
  // completa aca: llamar a generarPassword(12) y mostrar con console.log
}

console.log('\nContrasenas seguras de 16 caracteres:');
for (let i = 0; i < 3; i++) {
  // completa aca: llamar a generarPasswordSegura(16) y mostrar con console.log
}
