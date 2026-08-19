/*
Ejercicio 3 -- Operadores y logica del cine

Un cine calcula el precio de la entrada segun la edad y el dia.
Vas a usar operadores aritmeticos, de comparacion, logicos
y de asignacion acumulativa para calcular el precio.

Las reglas por rango de edad (menor a 12, entre 12 y 17, etc.)
las vas a resolver recien en el modulo 02 con if/else.
Aca el foco es PRACTICAR OPERADORES.

Datos base:
*/

const precioBase = 1000;
const edad = 17;
const esJueves = true;

/*
Pasos:
1) Crea una variable "tieneDescuento" que guarde true o false
   segun si la edad esta entre 12 y 17 (incluidos).
   Necesitas dos comparaciones y un && para unir ambas.

2) Crea una variable "precio" que sea:
   - precioBase dividido 2 (osea 500) si tieneDescuento es true
   - precioBase completa (1000) si tieneDescuento es false
   Usa operadores logicos para lograrlo sin if/else.

3) Si es jueves, al precio hay que quitarle un 10% extra.
   Es decir: precio = precio - (precio * 0.10).
   Usa && para que esto solo pase cuando esJueves sea true.
   Pista: && puede "ejecutar" una operacion solo si lo de la izquierda es true.

4) Redondea el resultado a 2 decimales con toFixed(2).

5) Imprime con template literal:
   "Edad: 17 | Jueves: true | Precio final: $450.00"
   "Tiene descuento por edad: true"

Tips:
- && y || pueden devolver valores, no solo true/false.
  Por ejemplo: false || 100 te da 100. Y true && 500 te da 500.
- toFixed(2) devuelve un string, esta bien para mostrar el precio.

Resultado esperado:
Edad: 17 | Jueves: true | Precio final: $450.00
Tiene descuento por edad: true
*/

// completa aqui
