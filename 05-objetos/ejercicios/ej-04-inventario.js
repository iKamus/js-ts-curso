/*
Ejercicio 4 — Mini inventario

Tenés el stock del almacén (un objeto donde cada propiedad es un
producto y su cantidad):
  let inventario = { manzanas: 10, peras: 5, naranjas: 0 };

Para leer o cambiar una casilla cuyo nombre viene "en una variable", se usa
inventario[nombre] (con corchetes). Esa es la clave dinámica:
  inventario['manzanas'] → 10
  inventario[nombre]     → lo mismo, si nombre = 'manzanas'

Creá estas 4 funciones:
1) agregar(nombre, cantidad) → le suma cantidad al producto.
   Si el producto no existe todavía (la casilla da undefined),
   arrancalo en cantidad directamente.
   Pista: pensá en el operador || o ?? como plan B: si no existe,
   arrancá de cero y sumale cantidad.
2) quitar(nombre, cantidad) → le resta cantidad, pero SIN bajar de 0.
   No podés tener menos de cero manzanas, ¿no? Entonces si al restar
   daría negativo, dejalo en 0.
3) total() → suma de todas las cantidades del inventario.
   Las herramientas para "abrir" el objeto (sacar solo los valores)
   están en ejemplos/03-object-methods.js. Después reduce, como
   siempre.
4) listar() → devuelve un string "nombre: cantidad, ..." con todos
   los productos. Usá Object.entries para obtener los pares,
   transformalos con map y juntalos con join.

Después probá (en este orden):
agregar('manzanas', 3)
quitar('peras', 2)
agregar('kiwis', 4)
Y mostrá: el inventario, el total() y el listar().

Resultado esperado:
{ manzanas: 13, peras: 3, naranjas: 0, kiwis: 4 }
Total: 20
manzanas: 13, peras: 3, naranjas: 0, kiwis: 4
*/

let inventario = { manzanas: 10, peras: 5, naranjas: 0 };

// completa aquí
