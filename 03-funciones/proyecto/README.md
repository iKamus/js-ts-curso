# Proyecto: Calculadora de descuentos

## Consigna

Armar una calculadora de descuentos usando funciones. El programa debe calcular el precio final de productos aplicando distintos tipos de descuento. Vas a practicar declaraciones de funcion, arrow functions, parametros por defecto, rest parameters, return, scope y shadowing.

## Requisitos

1. **Funciones de descuento** (declaradas con `function`):
   - `descuentoPorcentaje(precio, porcentaje)` -> devuelve el precio con el descuento aplicado. Ejemplo: 100 con 20% -> 80.
   - `descuentoFijo(precio, monto)` -> devuelve el precio menos el monto fijo. Ejemplo: 100 - 15 -> 85. Si el monto es mayor al precio, devuelve 0 (no puede ser negativo).

2. **Funcion con parametros por defecto**:
   - `calcularEnvio(precio, costoEnvio = 500)` -> si el precio supera 5000, el envio es gratis (devuelve 0). Si no, devuelve el costoEnvio.

3. **Funcion con rest parameters**:
   - `sumarItems(...precios)` -> suma todos los precios y devuelve el total.

4. **Arrow functions**:
   - `aplicarImpuesto = (precio, tasa = 21) => ...` -> devuelve el precio con el impuesto incluido (multiplica por 1 + tasa/100).

5. **Scope y shadowing**:
   - Dentro de una funcion, usa una variable local `total` que haga shadowing sobre una variable global `total` (la global debe tener un valor distinto).

6. **Flujo principal**:
   - Crear un array de productos con precios.
   - Usar `sumarItems` para obtener el subtotal.
   - Aplicar un descuento porcentaje al subtotal.
   - Calcular el impuesto sobre el precio con descuento.
   - Calcular el envio.
   - Mostrar el desglose final con `console.log`.

## Tips

- Para el impuesto, piensa en que 21% sobre 100 es 21, y el precio final seria 121. O sea: `precio * 1.21`.
- Para la variable global `total`, define `let total = 0` al inicio del archivo y dentro de la funcion creala de nuevo con `let total = ...` para que haga shadowing.
- El envio gratis se activa cuando el subtotal es mayor a 5000 (usar un `if` o un operador ternario).

## Resultado esperado

```
--- Carrito ---
Camisa: 3500
Pantalon: 4200
Zapatillas: 7800
Subtotal (sumarItems): 15500
Descuento 15%: 13175
Impuesto 21%: 15941.75
Envio: 0
Total final: 15941.75
```
