# Mini Proyecto -- Lista de compras

## Objetivo

Poner en practica todo lo que aprendiste en el modulo de arrays: crear, agregar, quitar, buscar, recorrer, transformar, filtrar, resumir y combinar. Todo a traves de un caso real: administrar una lista de compras.

## Consigna

Crear un programa que gestione una lista de compras con las siguientes operaciones:

1. **Agregar** productos a la lista (con nombre y precio).
2. **Eliminar** un producto por nombre.
3. **Buscar** un producto por nombre (parcial o total).
4. **Ordenar** la lista por precio (de menor a mayor o de mayor a menor).
5. **Mostrar** la lista formateada (nombre - precio).
6. **Filtrar** productos por precio maximo.
7. **Calcular** el total de la lista.
8. **Combinar** dos listas de compras en una sola.

## Requisitos

- Usar **arrays de objetos** para representar los productos.
- Usar **push** para agregar productos.
- Usar **filter** para eliminar y para filtrar por precio.
- Usar **find** o **some** para buscar productos.
- Usar **map** para mostrar la lista formateada.
- Usar **reduce** para calcular el total.
- Usar **sort** para ordenar por precio (con funcion comparadora).
- Usar **spread** para combinar listas.
- Usar **for...of** o **forEach** para recorrer la lista.
- Usar **destructuring** al menos una vez.
- Todo el codigo debe correr con `node compras.js` y mostrar los resultados por consola.

## Pasos sugeridos

1. Crea el array inicial con al menos 4 productos (objeto con `nombre` y `precio`).
2. Agrega 2 productos mas con `push`.
3. Elimina un producto por nombre usando `filter`.
4. Ordena por precio de menor a mayor con `sort`.
5. Muestra la lista formateada con `map` (algo como `"manzana: $120"`).
6. Filtra productos con precio menor a 200.
7. Calcula el total con `reduce`.
8. Crea una segunda lista y combinala con la primera usando spread.
9. Muestra el total de la lista combinada.

## Tips

- Para buscar un producto por nombre, podes usar `find` con `toLowerCase()` para que no importen mayusculas/minusculas.
- `sort` muta el array: si no queres modificar el original, copia con spread antes de ordenar.
- El acumulador de `reduce` para el total arranca en `0`.
- Para combinar listas: `const listaCompleta = [...lista1, ...lista2]`.
- Para formatear precios: `"${producto.nombre}: $${producto.precio}"`.

## Resultado esperado

Al correr `node compras.js`, la salida deberia verse similar a:

```
--- Lista original ---
manzana: $120
pan: $80
leche: $90
queso: $350
carne: $500
arroz: $75

--- Ordenada por precio (menor a mayor) ---
arroz: $75
pan: $80
leche: $90
manzana: $120
queso: $350
carne: $500

--- Menores a $200 ---
arroz: $75
pan: $80
leche: $90
manzana: $120

--- Total ---
$1215

--- Lista 2 ---
tomate: $200
aceite: $450

--- Lista combinada (total) ---
$1865
```
