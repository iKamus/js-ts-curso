// 02-switch.js — switch

const dia = 'martes';
let actividad;

// Como mirar el calendario y elegir el plan de cada dia
switch (dia) {
  case 'lunes':
    actividad = 'Arrancar la semana';
    break;
  case 'martes':
  case 'jueves':
    actividad = 'Entrenar';      // martes y jueves comparten case (mismo plan para los dos)
    break;
  case 'viernes':
    actividad = 'Salir';
    break;
  default:
    actividad = 'Descansar';
}

console.log(actividad); // Entrenar

// Sin break: se "cae" al siguiente case
let mensaje;
switch ('a') {
  case 'a':
    mensaje = 'primero';
  case 'b':
    mensaje += ' y segundo'; // se ejecuto sin break (el flujo siguio de largo)
}
console.log(mensaje); // primero y segundo
