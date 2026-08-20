// Proyecto Modulo 01 -- Ticket del almacen
// Corre: node proyecto/ticket.js

/*
Arma el ticket de compra de un almacen.
Lee el README.md de esta carpeta para ver los requisitos, tips y el
resultado esperado.

Resumen de lo que tienes que hacer:
1. Declara los 3 productos con const (nombre, cantidad, precioUnitario):
   - Leche: cantidad 2, precio 350
   - Pan: cantidad 1, precio 250
   - Aceite: cantidad 1, precio 600
2. Calcula el subtotal (cantidad * precioUnitario de cada uno, sumados).
3. Calcula el descuento (10% del subtotal SOLO si el subtotal supera 1000).
   Recuerda: sin if. Usa el truco de (subtotal > 1000) que se comporta
   como 1 o 0 al multiplicar.
4. Calcula base imponible = subtotal - descuento, e IVA = base * 0.21.
5. Calcula total = base imponible + IVA.
6. Imprime el ticket con UN solo console.log y template literals.
*/

// completa aqui