/*
Ejercicio 3 -- Operadores y logica del cine

Un cine calcula el precio de la entrada segun la edad y el dia.
Vas a usar operadores aritmeticos, de comparacion, logicos,
de asignacion acumulativa y ternario para calcular el precio.

Datos base:
*/

const precioBase = 1000;
const edad = 17;
const esJueves = true;

/*
Reglas de precio:
- Menores de 12: entrada gratis (precio = 0)
- De 12 a 17 (incluidos): precio con 50% de descuento
- De 18 a 59: precio base
- De 60 en adelante: precio con 30% de descuento

Ademas:
- Si es jueves, se aplica un 10% extra de descuento sobre el precio
  que ya se calculo (se aplica DESPUES del descuento por edad).

Pasos:
1) Con operadores de comparacion y un if/else o ternarios,
   calcula el precio segun la edad.
   Guárdalo en la variable precioSegunEdad.

2) Si es jueves, aplica un 10% extra de descuento.
   Usa el operador && (si es jueves, haz algo).

3) Redondea el resultado a 2 decimales con toFixed(2).

4) Imprime con template literal:
   "Edad: 17 | Jueves: true | Precio final: $XXX.XX"

Tips:
- Primero calcula el precio por edad, DESPUES aplica el descuento
  del jueves si corresponde.
- Un ternario basico: condicion ? valorSiTrue : valorSiFalse
- Para el descuento del jueves: precioSegunEdad *= 0.90 (o
  precioSegunEdad = precioSegunEdad - precioSegunEdad * 0.10)
- toFixed(2) devuelve un string, eso esta bien para el precio.

Resultado esperado:
Edad: 17 | Jueves: true | Precio final: $450.00
*/

// completa aqui
