# Módulo 15 — TypeScript

Pensá en TypeScript como tener un profe que te corrige la tarea ANTES de entregarla: JavaScript te deja hacer lo que quieras, pero TS se fija que los tipos cierren y te avisa si metiste la pata, sin esperar a que explote en tiempo de ejecución.

TypeScript = JavaScript + **tipos**. El código se escribe en `.ts` y se **compila** a `.js` con `tsc` (el compilador oficial). Los tipos ayudan a detectar errores ANTES de correr.

## Setup (hacelo UNA vez)
```bash
npm install        # instala TypeScript como devDependency
```
Ya hay un `package.json` y un `tsconfig.json` listos. No te asustes, no tenés que configurar nada.

## Compilar y correr
```bash
npm run build                          # compila todo a dist/
node dist/ejemplos/01-tipos-basicos.js # corre un ejemplo compilado
```
Ojo: en PowerShell de Windows el `&&` no funciona. Corré los dos comandos por separado
(o encadenalos con `;`). El `tsconfig.json` tiene `strict: true` (máximo rigor).
Los errores de tipos aparecen al compilar — esa es la gracia: el profe te corrige
la tarea antes de que la presentes.

## Tipos básicos
Es como ponerle una etiqueta a cada caja: sabés exactamente qué va adentro, sin sorpresas.
```ts
const nombre: string = 'Ana';
const edad: number = 30;
const activo: boolean = true;
const tags: string[] = ['js', 'ts'];
```
Con `strict`, si le asignás un tipo equivocado, **no compila**.

## Inferencia
TS deduce el tipo solo: `let x = 42;` → `x` es `number`. No hace falta anotar todo. Es como que el profe ya sabe de qué va tu código con solo mirarlo.

## Union types y otros
Un *union type* es como una caja que acepta dos formatos: uno u otro, sin vueltas.
```ts
let id: number | string = 'abc';   // uno u otro
type Estado = 'activo' | 'inactivo';
let algo: any;                     // desactiva el chequeo (evitar)
let nada: void;                    // funciones que no devuelven
```

## Interfaces y types
Una `interface` es el plano de un objeto: te dice qué campos tiene que tener, como la ficha de un alumno en la escuela.
```ts
interface Persona {
  nombre: string;
  edad: number;
  email?: string;       // opcional
  readonly id: number;  // no se reasigna
}
type Coordenada = { x: number; y: number };
```

## Funciones tipadas
Las funciones también avisan qué reciben y qué devuelven, como una receta que dice los ingredientes y el plato final.
```ts
function sumar(a: number, b: number): number { return a + b; }
```

## Generics (tipos parametrizados)
Los *genéricos* son como una caja que sirve para cualquier contenido: la misma función funciona con números, strings u objetos, y TS se da cuenta solo de cuál estás usando.
```ts
function primero<T>(lista: T[]): T | undefined { return lista[0]; }
```

## tsconfig clave
`strict: true` activa todas las verificaciones estrictas (recomendado en proyectos nuevos). Es el profe más exigente, y eso te hace mejor.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-tipos-basicos.ts` | anotaciones, inferencia, union, any |
| `ejemplos/02-interfaces.ts` | interfaces, opcionales, readonly, type |
| `ejemplos/03-funciones.ts` | funciones tipadas, void, rest |
| `ejemplos/04-generics.ts` | genéricos y utility types |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-tipos.ts` | tipos básicos |
| `ejercicios/ej-02-interfaz.ts` | interfaz Producto + inventario |
| `ejercicios/ej-03-funciones.ts` | funciones tipadas |
| `ejercicios/ej-04-generics.ts` | genéricos |
| `ejercicios/ej-05-conversion.ts` | migrar Rectángulo de JS a TS |

Corré cada ejercicio con:
```
npm run build
node dist/ejercicios/ej-XX-tipos.js
```
(En PowerShell no se puede encadenar con `&&`; corré los dos comandos por separado.)

Y si el compilador te marca un error, no te asustes: leé el mensaje, es el profe tirándote un centro para que arregles la tarea. Probalo vos mismo, que así se aprende.