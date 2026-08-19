// 03-operadores.js — Operadores

// Aritméticos: las cuentas de todos los días
console.log(5 + 3);   // 8 (sumar, como juntar dos pilas de cuadernos)
console.log(5 - 3);   // 2 (restar, como devolver lo que sobra del vuelto)
console.log(5 * 3);   // 15 (multiplicar, como calcular 3 bandejas de 5 medialunas)
console.log(5 / 2);   // 2.5 (dividir, como repartir en partes iguales)
console.log(5 % 2);   // 1  (resto: lo que queda sin repartir de la división)
console.log(2 ** 10); // 1024 (potencia: el número multiplicado por sí mismo varias veces)

// Cuidado: ^ no es potencia en JS. Es XOR, un operador de bits.
// La potencia SIEMPRE es **. Si pones ^, el resultado no tiene sentido:
console.log(5 ** 2);  // 25  (cinco al cuadrado, como el área de un cuadrado de lado 5)
console.log(5 ^ 2);   // 7   (¡NO es 25! XOR de bits: 101 ^ 010 = 111)

// Comparación: == vs ===
console.log(5 == '5');   // true  (compara solo el valor, convierte el tipo "en el aire")
console.log(5 === '5');  // false (compara valor Y tipo) → USA ESTE, el más exigente
console.log(5 === 5);    // true

console.log(10 > 5);     // true
console.log(10 <= 10);   // true

// Lógicos: las preguntas de sí o no encadenadas
console.log(true && false);   // false (y: se cumplen las dos, si una falla, nada)
console.log(true || false);   // true  (o: con que se cumpla una, alcanza)
console.log(!true);           // false (negación: da vuelta el sí o el no)

// Asignación acumulativa: atajos para actualizar la misma variable
let x = 10;
x += 5;   // x = x + 5 (subir de a 5, como sumar vueltas en la calesita)
console.log(x);   // 15
x *= 2;
console.log(x);   // 30
