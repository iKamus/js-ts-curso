/*
Ejercicio 2 — Interfaz Producto
Aca vas a definir el plano de lo que se vende en el almacen: cada
producto tiene nombre y precio, y el stock puede faltar (no pasa nada,
es opcional).

Paso a paso:
1) Define una interface Producto con las casillas que pide el
   ejercicio. Fijate la sintaxis en ejemplos/02-interfaces.ts:
   nombre y precio son obligatorias; stock es OPCIONAL (hay un
   simbolo para eso, el mismo que viste para los parametros
   opcionales).
2) Crea dos productos que cumplan el plano:
   - { nombre: 'Mouse', precio: 150, stock: 3 }   (con stock)
   - { nombre: 'Teclado', precio: 300 }            (sin stock, y esta bien)
   Podes declararlos con el tipo: const mouse: Producto = { ... }
3) Crea totalInventario(productos: Producto[]): number que:
   - reciba un array de productos (eso es Producto[])
   - sume, para cada producto, precio * stock
   - PERO si un producto NO tiene stock, cuenta como 1
     (si el stock es undefined, usa el plan B)
   - el : number al final dice que devuelve un numero
   Pista: usa reduce (como en el modulo 04): el acumulador arranca
   en 0 y en cada vuelta sumas el precio por el stock de ese producto.
4) Muestra el total con console.log.

Resultado esperado:
Total inventario: 750
*/

// completá acá
