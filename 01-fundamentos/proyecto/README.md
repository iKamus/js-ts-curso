# Proyecto Modulo 01 -- Ticket del almacen

## Contexto
Armaste las bases: variables, tipos, operadores, template literals y métodos de string. Ahora es momento de juntar TODO en algo practico: simular el ticket de compra de un almacen.

## Que vas a hacer
Vas a crear un programa que calcule el ticket de compra de 3 productos, aplique un descuento si el total supera cierto monto, calcule el IVA, y imprima un ticket formateado como el que te dan en el super.

## Requisitos funcionales
1. Declara 3 productos con const: nombre, cantidad y precio unitario.
   Usa estos valores:
   - Leche: cantidad 2, precio 350
   - Pan: cantidad 1, precio 250
   - Aceite: cantidad 1, precio 600

2. Calcula el subtotal (suma del precio total de cada producto).
   precio total de cada producto = cantidad * precio unitario.

3. Si el subtotal supera los 1000, aplica un 10% de descuento.
   Si es 1000 o menos, no hay descuento (descuento = 0).
   IMPORTANTE: no uses if (eso es del módulo 02). Puedes lograr el mismo
   resultado con operadores: en JS, `true` se comporta como 1 y `false`
   como 0 al multiplicar. Entonces (subtotal > 1000) te da true o false,
   y al multiplicarlo por el subtotal y por 0.10 obtienes el descuento
   (0 si no supera los 1000).

4. Calcula el IVA (21% del subtotal - descuento).
   base imponible = subtotal - descuento
   IVA = base imponible * 0.21

5. Calcula el total final = base imponible + IVA.

6. Redondea todos los valores a 2 decimales con toFixed(2).

7. Imprime el ticket con un solo console.log usando template literal.
   Debe verse EXACTAMENTE asi:

=== TICKET DEL ALMACEN ===
Leche x2 ............. $700.00
Pan x1 ............... $250.00
Aceite x1 ............ $600.00
---------------------------
Subtotal: $1550.00
Descuento (10%): -$155.00
Base imponible: $1395.00
IVA (21%): $292.95
---------------------------
TOTAL: $1687.95
===========================
Gracias por su compra!

## Tips
- Primero declara las constantes de los 3 productos (nombre, cantidad, precio).
- Después calcula el precio total de cada uno (cantidad * precio unitario).
- Usa const para los valores que no cambian y let para los calculos.
- Para alinear los puntos del ticket, usa padEnd en el nombre del producto:
  "Leche".padEnd(20, '.') te da "Leche...............".
- Recuerda que toFixed(2) devuelve un string, pero para hacer cuentas
  necesitas numeros. Convierte con Number() o +.
- El IVA se calcula sobre la base imponible (subtotal - descuento),
  NO sobre el subtotal directo.
- Usa template literals para armar el ticket: backticks con ${}.

## Criterios de evaluacion
- El ticket se imprime con el formato exacto del ejemplo.
- Los valores numericos son correctos (subtotales, descuento, IVA, total).
- Se usan const y let correctamente (const para cosas fijas, let para calculos).
- Se usa toFixed(2) para mostrar 2 decimales.
- El descuento solo se aplica si el subtotal supera 1000.

## Resultado esperado
=== TICKET DEL ALMACEN ===
Leche x2 ............. $700.00
Pan x1 ............... $250.00
Aceite x1 ............ $600.00
---------------------------
Subtotal: $1550.00
Descuento (10%): -$155.00
Base imponible: $1395.00
IVA (21%): $292.95
---------------------------
TOTAL: $1687.95
===========================
Gracias por su compra!
