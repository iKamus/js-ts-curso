// 01-if-else.js — Condicionales

const hora = 14;

// Elegimos el saludo segun la hora, como decidir que decir segun la parte del dia
if (hora < 12) {
  console.log('Buenos dias');
} else if (hora < 18) {
  console.log('Buenas tardes');
} else {
  console.log('Buenas noches');
}
// Buenas tardes

// condicion simple: una sola pregunta de si o no
const edad = 20;
if (edad >= 18) {
  console.log('Mayor de edad');
}

// condicion con operadores logicos: se tienen que cumplir las dos, como en el kiosco
const usuario = 'ana';
const pass = 'clave123';
if (usuario !== '' && pass.length >= 8) {
  console.log('Login valido');
}
