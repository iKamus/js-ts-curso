/*
Ejercicio 3 — Descuentos con funciones puras

Vamos a simular una liquidacion en un local: todos los precios con 10% off.
Una funcion pura es una receta: mismos ingredientes -> mismo plato, y no
ensucia nada de afuera (no toca variables externas, solo recibe
parametros y devuelve un resultado). Aca vas a usar las tres grandes
juntas: map, reduce y filter.

Tienes los precios:
  const precios = [100, 200, 150, 80];

Paso a paso:
1) Crear aplicarDescuento(precio, porcentaje) que devuelva el precio
   con el descuento aplicado. Pensalo asi: un 10% de descuento es
   pagar el 90%, o sea multiplicar por (1 - porcentaje/100). Escribe
   la cuenta tu mismo.
2) Aplicar el 10% a CADA precio con map: le pasas cada precio a
   aplicarDescuento (la flecha de map puede llamar a tu funcion).
   El map transforma cada elemento.
3) Mostrar el total con reduce: sumar todos los precios con descuento.
4) Filtrar con filter los que quedaron menores o iguales a 135 despues
   del descuento: la condicion es comparar cada precio con 135.
5) Mostrar los tres resultados con los formatos de abajo.

Tip: la funcion aplicarDescuento debe ser PURA: solo recibe precio y
porcentaje, y devuelve un numero nuevo. No toca el array original.

Resultado esperado:
Con 10%: [ 90, 180, 135, 72 ]
Total: 477
Menores o iguales a 135: [ 90, 135, 72 ]
*/

const precios = [100, 200, 150, 80];

// completa aqui
