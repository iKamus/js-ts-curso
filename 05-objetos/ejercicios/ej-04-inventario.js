/*
Ejercicio 4 — Mini inventario

Tienes el stock del almacén (un objeto donde cada propiedad es un
producto y su cantidad):
  let inventario = { manzanas: 10, peras: 5, naranjas: 0 };

Para leer o cambiar una casilla cuyo nombre viene "en una variable", se usa
inventario[nombre] (con corchetes). Esa es la clave dinámica:
  inventario['manzanas'] → 10
  inventario[nombre]     → lo mismo, si nombre = 'manzanas'

Crea estas 4 funciones:
1) agregar(nombre, cantidad) → le suma cantidad al producto.
   Si el producto no existe todavía (la casilla da undefined),
   arráncalo en cantidad directamente.
   Pista: piensa en el operador || o ?? como plan B: si no existe,
   arranca de cero y súmale cantidad.
2) quitar(nombre, cantidad) → le resta cantidad, pero SIN bajar de 0.
   No puedes tener menos de cero manzanas, ¿no? Entonces si al restar
   daría negativo, déjalo en 0.
3) total() → suma de todas las cantidades del inventario.
   Las herramientas para "abrir" el objeto (sacar solo los valores)
   están en el README del modulo (seccion "Object.keys / values / entries").
   Después reduce, como siempre.
4) listar() → devuelve un string "nombre: cantidad, ..." con todos
   los productos. Usa Object.entries para obtener los pares,
   transfórmalos con map y júntalos con join.

Después prueba (en este orden):
agregar('manzanas', 3)
quitar('peras', 2)
agregar('kiwis', 4)
Y muestra: el inventario, el total() y el listar().

Resultado esperado:
{ manzanas: 13, peras: 3, naranjas: 0, kiwis: 4 }
Total: 20
manzanas: 13, peras: 3, naranjas: 0, kiwis: 4
*/

let inventario = { manzanas: 10, peras: 5, naranjas: 0 };

// completa aqui
