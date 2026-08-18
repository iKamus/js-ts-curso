/*
Ejercicio 2 — Interfaz Producto
Acá vas a definir el plano de lo que se vende en el almacén: cada
producto tiene nombre y precio, y el stock puede faltar (no pasa nada,
es opcional).

¿Qué es una interface? Es el PLANO de un objeto: le dice a TS qué
casillas tiene que tener. Es como la ficha de un alumno: sabés que
tiene nombre y edad, y si le falta una casilla, TS te avisa.

Paso a paso:
1) Definí una interface Producto con las casillas que pide el
   ejercicio. Fijate la sintaxis en ejemplos/02-interfaces.ts:
   nombre y precio son obligatorias; stock es OPCIONAL (hay un
   símbolo para eso, el mismo que viste para los parámetros
   opcionales).
2) Creá dos productos que cumplan el plano:
   - { nombre: 'Mouse', precio: 150, stock: 3 }   (con stock)
   - { nombre: 'Teclado', precio: 300 }            (sin stock, y está bien)
   Podés declararlos con el tipo: const mouse: Producto = { ... }
   (TS se fija que tengan nombre y precio; el stock puede faltar.)
3) Creá totalInventario(productos: Producto[]): number que:
   - reciba un array de productos (eso es Producto[])
   - sume, para cada producto, precio * stock
   - PERO si un producto NO tiene stock, contá como 1
     (pensá en el optional chaining y el || que viste en el módulo 05:
     si el stock es undefined, usá el plan B)
   - el : number al final dice que devuelve un número
   Pista: usá reduce (como en el módulo 04): el acumulador arranca
   en 0 y en cada vuelta sumás el precio por el stock de ese producto.
4) Mostrá el total con console.log.

Probá con: { nombre: 'Mouse', precio: 150, stock: 3 } y { nombre: 'Teclado', precio: 300 }
(Cuenta: 150*3 + 300*1 = 450 + 300 = 750)

Resultado esperado:
Total inventario: 750
*/

// completá acá