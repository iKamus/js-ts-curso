// todo.ts — TODO list tipada (plantilla)
// Proyecto integrador del modulo 15: TypeScript
//
// Paso 1: Defini las interfaces y types
// Paso 2: Creá la clase ListaTareas
// Paso 3: Creá las funciones auxiliares
// Paso 4: Demostra todo en accion

// --- Tipos ---

// 1) Defini la interfaz Todo con: id (number, readonly), titulo (string),
//    completado (boolean), prioridad ('baja' | 'media' | 'alta')
//    Pista: usa type alias para Prioridad

// completá acá

// 2) Defini FiltroTodo como Partial<Pick<Todo, 'completado' | 'prioridad'>>
//    Pista: Pick elige propiedades, Partial las vuelve opcionales

// completá acá


// --- Clase generica ---

// 3) Crea la clase ListaTareas<T extends Todo> con:
//    - privada tareas: T[]
//    - privada siguienteId: number
//    - metodo agregar(titulo: string, prioridad?: Prioridad): Todo
//    - metodo completar(id: number): void
//    - metodo eliminar(id: number): void
//    - metodo filtrar(filtro: FiltroTodo): T[]
//    - metodo obtenerTodas(): T[]

// completá acá


// --- Funciones auxiliares ---

// 4) Crea mostrarTareas(tareas: Todo[]): void
//    Formato: "[x] Titulo (prioridad)" o "[ ] Titulo (prioridad)"

// completá acá

// 5) Crea la funcion generica contarPorEstado<T extends Todo>(tareas: T[], completado: boolean): number
//    Cuenta cuantas tareas tienen completado === el valor dado

// completá acá


// --- Demo ---

// 6) Demostra todo en accion (copiar el resultado esperado del README):
//    - Crear una ListaTareas
//    - Agregar 3 tareas
//    - Mostrar tareas iniciales
//    - Completar la tarea con id 2
//    - Mostrar despues de completar
//    - Filtrar por completadas y mostrar
//    - Filtrar por prioridad 'alta' y mostrar
//    - Contar total, completadas, pendientes
//    - Eliminar la tarea con id 3
//    - Mostrar despues de eliminar
//    - Contar de nuevo

console.log('=== TODO List tipada ===');
console.log('');

// completá acá
