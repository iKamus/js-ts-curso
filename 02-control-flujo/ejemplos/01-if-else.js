// 01-if-else.js — Condicionales

const hora = 14;

// Elegimos el saludo según la hora, como decidir qué decir según la parte del día
if (hora < 12) {
  console.log('Buenos días');
} else if (hora < 18) {
  console.log('Buenas tardes');
} else {
  console.log('Buenas noches');
}
// Buenas tardes

// condicion simple: una sola pregunta de sí o no
const edad = 20;
if (edad >= 18) {
  console.log('Mayor de edad');
}

// condición con operadores lógicos: se tienen que cumplir las dos, como en el kiosco
const usuario = 'ana';
const pass = 'clave123';
if (usuario !== '' && pass.length >= 8) {
  console.log('Login válido');
}