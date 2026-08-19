// 01-declaracion.js — Declaracion de funciones

// Declaracion clasica: la receta de cocina, con ingredientes y plato final
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar('Ana')); // Hola, Ana

// Hoisting: se puede llamar antes de definirla (la receta ya esta en la heladera)
console.log(duplicar(4)); // 8
function duplicar(x) {
  return x * 2;
}

// Varios return para cortar temprano (como irse de la fila cuando ya conseguiste)
function clasificar(edad) {
  if (edad < 18) return 'menor';
  if (edad < 65) return 'adulto';
  return 'jubilado';
}
console.log(clasificar(20));  // adulto
console.log(clasificar(70));  // jubilado

// Sin return -> undefined (el plato sale sin nada, no hay resultado)
function sinReturn() {}
console.log(sinReturn()); // undefined
