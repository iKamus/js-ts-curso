# Proyecto — TODO list tipada

Mini proyecto integrador del modulo 15 (TypeScript).

## Consigna
Armar una lista de tareas (TODO list) completamente tipada usando los conceptos del modulo: interfaces, type aliases, genericos, funciones con tipos, y utility types (Pick, Partial).

## Requisitos
1. Definir una interfaz `Todo` con campos: `id` (number, readonly), `titulo` (string), `completado` (boolean), `prioridad` (literal type: 'baja' | 'media' | 'alta').
2. Definir un type alias `FiltroTodo` como `Partial<Pick<Todo, 'completado' | 'prioridad'>>`.
3. Crear una clase generica `ListaTareas<T extends Todo>` que guarde un array de tareas.
4. Implementar metodos tipados:
   - `agregar(titulo: string, prioridad?: Prioridad): Todo` — crea y devuelve la tarea nueva.
   - `completar(id: number): void` — marca una tarea como completada.
   - `eliminar(id: number): void` — elimina una tarea por id.
   - `filtrar(filtro: FiltroTodo): Todo[]` — devuelve tareas que coincidan con el filtro (usa Pick/Partial).
   - `obtenerTodas(): Todo[]` — devuelve todas las tareas.
5. Crear una funcion `mostrarTareas(tareas: Todo[]): void` que imprima cada tarea con formato: `[x] Titulo (prioridad)` si esta completada, o `[ ] Titulo (prioridad)` si no.
6. Crear una funcion generica `contarPorEstado<T extends Todo>(tareas: T[], completado: boolean): number` que cuente tareas por estado.
7. Demostrar todo en accion: crear tareas, completar algunas, filtrar, contar, y mostrar.

## Estructura del proyecto
```
proyecto/
├── README.md         ← este archivo
└── todo.ts           ← plantilla base (completar)
```

## Pasos
1. Leer este README y entender los requisitos.
2. Abrir `todo.ts` y completar donde dice `// completá acá`.
3. Correr con: `npm run build; node dist/proyecto/todo.js`
4. Comparar la salida con el resultado esperado de abajo.

## Tips
- Primero define las interfaces y types antes de la clase.
- Usá `Partial<Pick<Todo, ...>>` para el tipo FiltroTodo.
- El metodo `filtrar` puede usar `Object.keys()` y comparar propiedades.
- `prioridad` tiene valor por defecto `'media'` si no se pasa.

## Resultado esperado
```
=== TODO List tipada ===

--- Tareas iniciales ---
[ ] Comprar pan (baja)
[ ] Estudiar TypeScript (alta)
[ ] Llamar al medico (media)

--- Despues de completar ---
[ ] Comprar pan (baja)
[x] Estudiar TypeScript (alta)
[ ] Llamar al medico (media)

--- Filtrar por completadas ---
[x] Estudiar TypeScript (alta)

--- Filtrar por prioridad alta ---
[ ] Comprar pan (baja)
[x] Estudiar TypeScript (alta)

--- Conteo ---
Total: 3
Completadas: 1
Pendientes: 2

--- Despues de eliminar ---
[ ] Comprar pan (baja)
[ ] Llamar al medico (media)

--- Conteo final ---
Total: 2
Completadas: 0
Pendientes: 2
```
