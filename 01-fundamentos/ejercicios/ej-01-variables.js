/*
Ejercicio 1 -- Variables y tipos en accion

En este ejercicio vas a armar la "ficha" de un producto del almacen,
usando TODO lo que aprendiste: const/let, numeros, strings, template
literals, toFixed y typeof.

Paso a paso:
1) Declara con const estas variables (ya te doy los valores):
   - marca = 'La Serenisisima'
   - producto = 'Leche'
   - precio = 850   (precio en pesos, sin decimales)
   - litros = 1
   - tieneDescuento = false

2) Declara con let:
   - descuento = 15  (porcentaje de descuento que se puede aplicar)

3) Calcula el precio con descuento:
   - precioConDescuento = precio - (precio * descuento / 100)
   (Usa operadores aritmeticos y de asignacion acumulativa si quieres)

4) Redondea precioConDescuento a 2 decimales con toFixed(2).
   Cuidado: toFixed devuelve un string. Si necesitas un numero,
   envuelve el resultado con Number() o conviértelo con +.

5) Imprime la ficha completa con console.log usando template
   literal o concatenacion. Debe verse asi:

Marca: La Serenisisima
Producto: Leche
Precio original: $850.00
Descuento: 15%
Precio final: $722.50
Tipo del precio final: number

Tips:
- Para formatear el precio usa toFixed(2), que siempre muestra 2 decimales.
- Para ver el tipo de un valor, usa typeof (recuerda que retorna un string).
- toFixed() devuelve un string, pero como el precioFinal lo pasas por
  Number() antes de guardarlo, el tipo final es number.

Resultado esperado:
Marca: La Serenisisima
Producto: Leche
Precio original: $850.00
Descuento: 15%
Precio final: $722.50
Tipo del precio final: number
*/

// completa aqui
