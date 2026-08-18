/*
Ejercicio 3 — Descuentos con funciones puras

Vamos a simular una liquidación en un local: todos los precios con 10% off.
Una función pura es una receta: mismos ingredientes → mismo plato, y no
ensucia nada de afuera (no toca variables externas, solo recibe
parámetros y devuelve un resultado). Acá vas a usar las tres grandes
juntas: map, reduce y filter.

Tenés los precios:
  const precios = [100, 200, 150, 80];

Paso a paso:
1) Creá aplicarDescuento(precio, porcentaje) que devuelva el precio
   con el descuento aplicado. Pensalo así: un 10% de descuento es
   pagar el 90%, o sea multiplicar por 0.9. Escribí la cuenta vos:
   al precio le restás la parte que se descuenta (porcentaje sobre 100).
2) Aplicá el 10% a CADA precio con map: le pasás cada precio a
   aplicarDescuento (la flecha de map puede llamar a tu función).
   El map transforma cada elemento (le pasa la plancha a cada uno).
3) Mostrá el total con reduce: sumá todos los precios con descuento.
4) Filtrá con filter los que quedaron menores o iguales a 135 después
   del descuento: la condición es comparar cada precio con 135.
5) Mostrá los tres resultados con los formatos de abajo.

Resultado esperado:
Con 10%: [ 90, 180, 135, 72 ]
Total: 477
Menores o iguales a 135: [ 90, 135, 72 ]
*/

const precios = [100, 200, 150, 80];

// completá acá