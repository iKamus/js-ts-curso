# Mini Proyecto — Pipeline de transformacion de datos

## Objetivo

Poner en practica todos los conceptos del modulo de programacion funcional: funciones puras, closures, higher-order functions, currying y composicion. Todo a traves de un caso real: procesar una lista de notas de alumnos.

## Consigna

Crear un programa que procese un listado de notas de alumnos usando tecnicas de programacion funcional. El programa debe:

1. **Filtrar** las notas de alumnos que aprobaron (nota >= 6).
2. **Curvar** las notas con una funcion pura: sumar un punto a cada nota (sin pasar de 10).
3. **Componer** las transformaciones en un pipeline: primero filtrar, despues curvar.
4. **Usar un closure** para contar cuantos alumnos aprobaron.
5. **Curar una funcion** de descuento para calcular la nota final con bonificacion.

## Requisitos

- Usar **funciones puras** para todas las transformaciones (sin efectos colaterales dentro de las funciones).
- Usar **map, filter, reduce** (higher-order functions).
- Usar un **closure** para el contador de alumnos aprobados.
- Usar **currying** para la funcion de bonificacion.
- Usar **composicion** para encadenar las transformaciones.
- Usar **inmutabilidad**: no mutar el array original, crear copias con spread.
- Todo el codigo debe correr con `node pipeline.js` y mostrar los resultados por consola.

## Datos de entrada

```js
const alumnos = [
  { nombre: 'Ana',    nota: 8 },
  { nombre: 'Bruno',  nota: 5 },
  { nombre: 'Carla',  nota: 7 },
  { nombre: 'Diego',  nota: 4 },
  { nombre: 'Elena',  nota: 9 },
  { nombre: 'Federico', nota: 6 },
];
```

## Pasos sugeridos

1. Crear la funcion pura `esAprobada(nota)` que devuelva `true` si la nota es >= 6.
2. Crear la funcion pura `curvarNota(nota)` que sume 1 punto, sin pasar de 10.
3. Crear el closure `crearContador()` que devuelva una funcion que cuente aprobados.
4. Crear la funcion curried `bonificar(porcentaje)(nota)` que aplique un porcentaje de bonificacion a la nota.
5. Usar `filter` con `esAprobada` para quedarse solo con los aprobados.
6. Usar `map` con `curvarNota` para curvar las notas.
7. Usar `reduce` para calcular el promedio de las notas curvadas.
8. Usar el closure para contar cuantos aprobaron.
9. Usar la funcion curried para calcular la nota final de un alumno con 5% de bonificacion.
10. Mostrar los resultados con los formatos de abajo.

## Tips

- Las funciones puras no tocan el array original: `filter` y `map` devuelven arrays nuevos.
- El closure para el contador es igual al ejercicio 1: una variable privada dentro de una funcion.
- Currying: `bonificar(5)(8)` aplica 5% sobre 8, o sea `8 * 1.05 = 8.4`.
- Para componer: puedes crear una funcion `pipeline` que ejecute filter y despues map en orden.
- `Math.min(nota + 1, 10)` evita que la nota pase de 10 al curvar.

## Resultado esperado

Al correr `node pipeline.js`, la salida deberia verse similar a:

```
--- Alumnos aprobados (antes de curvar) ---
Ana: 8
Carla: 7
Elena: 9
Federico: 6

--- Notas curvadas (+1 punto, max 10) ---
Ana: 9
Carla: 8
Elena: 10
Federico: 7

--- Cantidad de aprobados ---
4

--- Promedio de notas curvadas ---
8.5

--- Nota final con 5% de bonificacion (Ana) ---
9.45
```
