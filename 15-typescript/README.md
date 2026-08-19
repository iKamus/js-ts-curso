# Modulo 15 - TypeScript

TypeScript es como tener un corrector ortografico pero para codigo: JavaScript te deja escribir lo que quieras, pero TS se fija que los tipos cierren antes de que arranque el programa. TypeScript = JavaScript + tipos. El codigo se escribe en `.ts` y se compila a `.js` con `tsc`.

---

## Setup
- **Que es**: preparar el entorno para que TS funcione. Es una sola vez: instalar las dependencias y listo.
- **Cuando usarlo**: al arrancar el modulo. Ya hay un `package.json` y un `tsconfig.json` configurados.
- **Sintaxis**:
```bash
npm install        # instala TypeScript como devDependency
```
- **Errores comunes**:
  - Olvidar correr `npm install` y que `tsc` no se encuentre.
  - Confundir `npm install` (dependencias) con `npm run build` (compilar).
- **Buenas practicas**:
  - Correr `npm install` una sola vez al principio.
  - No tocar el `tsconfig.json` a menos que se sepa que se hace.

---

## Tipos basicos
- **Que es**: las etiquetas que le pones a cada variable para decirle a TS que va adentro. Es como ponerle una etiqueta a cada caja del almacen: sabes exactamente que contiene, sin sorpresas.
- **Cuando usarlo**: siempre. TS funciona mejor cuando le decis los tipos, y `strict: true` lo exige.
- **Sintaxis**:
```ts
const nombre: string = 'Ana';
const edad: number = 30;
const activo: boolean = true;
const tags: string[] = ['js', 'ts'];
const cantidades: number[] = [1, 2, 3];
```
- **Errores comunes**:
  - Asignar un tipo equivocado y que no compile: `const x: number = 'hola'` es error.
  - Olvidar que los arrays se escriben con `[]` despues del tipo: `string[]`, no `list<string>`.
- **Buenas practicas**:
  - Dejar que TS infiera el tipo cuando es obvio (`let x = 42` es mejor que `let x: number = 42`).
  - Anotar tipos en parametros de funciones y en interfaces.

---

## Inferencia
- **Que es**: cuando TS adivina el tipo solo, sin que lo anotes. Es como un profe que sabe de que va tu codigo con solo mirarlo.
- **Cuando usarlo**: en variables donde el tipo es evidente. No hace falta anotar todo.
- **Sintaxis**:
```ts
let ciudad = 'Cordoba';    // TS infiere string
let numero = 42;           // TS infiere number
let lista = [1, 2, 3];    // TS infiere number[]
```
- **Errores comunes**:
  - Anotar el tipo cuando la inferencia ya lo resuelve: es redundante y ensucia el codigo.
  - Asumir que TS infiere un tipo mas amplio del que realmente es.
- **Buenas practicas**:
  - Confiar en la inferencia para variables locales.
  - Anotar tipos en: parametros de funciones, tipos de retorno, propiedades de interfaces, y variables con tipo ambiguo.

---

## Union types
- **Que es**: un tipo que acepta uno de varios posibles. Es como una caja que tiene espacio para dos formatos distintos: uno u otro, sin vueltas.
- **Cuando usarlo**: cuando una variable puede ser mas de un tipo (`id` puede ser numero o string), o para crear listas de valores permitidos.
- **Sintaxis**:
```ts
let id: number | string = 'abc-123';
id = 456; // ok

type Estado = 'activo' | 'inactivo' | 'pendiente';
const estado: Estado = 'activo';
```
- **Errores comunes**:
  - Usar un valor que no esta en la union: `const e: Estado = 'roto'` es error.
  - No validar el tipo antes de usarlo: si es `number | string`, no podes llamar a `.toUpperCase()` sin antes verificar que es string.
- **Buenas practicas**:
  - Usar union types en vez de `any` cuando la variable puede ser de varios tipos.
  - Las uniones de literales (como `Estado`) son muy utiles para estados y modos.

---

## Literal types
- **Que es**: un tipo que acepta solo un valor exacto, no una categoria. Es como ponerle un candado con codigo: solo entra ese valor especifico.
- **Cuando usarlo**: para estados, modos, direcciones, o cualquier cosa que tenga un conjunto fijo de valores permitidos.
- **Sintaxis**:
```ts
type Direccion = 'arriba' | 'abajo' | 'izquierda' | 'derecha';
type Cero = 0;

const dir: Direccion = 'arriba';
// const mala: Direccion = 'centro'; // ERROR
```
- **Errores comunes**:
  - Confundir literal types con strings normales: `'activo'` como valor es distinto de `'activo'` como tipo.
  - No cubrir todos los casos en un switch o if: TS te avisa pero hay que leer el mensaje.
- **Buenas practicas**:
  - Usarlos para estados de enums simples (en vez de enums, que son mas verbosos).
  - Combinar con union types para flexibilidad.

---

## any y void
- **Que es**: `any` es apagar el corrector (cualquier tipo pasa, sin preguntas). `void` es decir "esta funcion no devuelve nada, solo hace el trabajo".
- **Cuando usarlo**: `any` es un ultimo recurso, algo para evitar. `void` es para funciones que solo imprimen, guardan o modifican algo sin devolver un valor.
- **Sintaxis**:
```ts
// any: desactiva el chequeo (evitar)
let loQueSea: any = 1;
loQueSea = 'ahora un string'; // no hay error, pero tambien no hay garantia

// void: funciones que no devuelven nada
function log(mensaje: string): void {
  console.log(mensaje);
}

// null y undefined son tipos
const vacio: null = null;
const indefinido: undefined = undefined;
```
- **Errores comunes**:
  - Usar `any` porque "asi compila": es como pegarle cinta al foco rojo del auto.
  - Olvidar que `void` no significa "no tiene tipo": la funcion existe, solo no devuelve nada.
- **Buenas practicas**:
  - Evitar `any` siempre que se pueda. Si algo es desconocido, usar `unknown`.
  - Usar `void` solo para funciones que realmente no devuelven nada.

---

## Interfaces
- **Que es**: el plano de un objeto. Le dice a TS que campos tiene que tener, con que tipo y si son obligatorios u opcionales. Es como la ficha de un alumno en la escuela: sabes que tiene nombre y edad, y si falta algo, te avisan.
- **Cuando usarlo**: siempre que necesites definir la forma de un objeto. Las interfaces son la base de la programacion tipada en TS.
- **Sintaxis**:
```ts
interface Persona {
  nombre: string;
  edad: number;
  email?: string;       // opcional
  readonly id: number;  // no se puede reasignar
}

const ana: Persona = { nombre: 'Ana', edad: 30, id: 1 };
```
- **Errores comunes**:
  - Olvidar un campo obligatorio y que no compile.
  - Intentar reasignar un campo `readonly`: TS lo bloquea.
  - No marcar como opcional lo que puede faltar: `email?` no es lo mismo que `email`.
- **Buenas practicas**:
  - Nombrar interfaces con mayuscula inicial (`Persona`, `Producto`).
  - Usar `readonly` para campos que no deberian cambiar.
  - Usar `?` solo para campos que genuinamente pueden faltar.

---

## Type aliases
- **Que es**: una forma de darle nombre a un tipo. Es como ponerle un nombre a un molde: podes reutilizarlo sin tener que repetir la definicion.
- **Cuando usarlo**: para tipos compuestos que reutilizas, uniones, o cuando necesitas algo mas flexible que una interfaz (por ejemplo, tipos primitives con nombre).
- **Sintaxis**:
```ts
type Coordenada = { x: number; y: number };
type ID = string | number;
type Estado = 'activo' | 'inactivo';

const pos: Coordenada = { x: 10, y: 20 };
```
- **Errores comunes**:
  - Confundir `type` con `interface`: ambos definen la forma de un objeto, pero `type` puede hacer cosas que `interface` no (uniones, intersections, primitives).
  - Usar `interface` para uniones literales: ahi es donde `type` brilla.
- **Buenas practicas**:
  - Usar `interface` para objetos que pueden extenderse con `extends`.
  - Usar `type` para uniones, primitives con nombre, y tipos compuestos que no necesitan herencia.

---

## Funciones tipadas
- **Que es**: funciones que declaran explicitamente que reciben y que devuelven. Es como una receta que dice los ingredientes (parametros) y el plato final (tipo de retorno).
- **Cuando usarlo**: siempre. Las funciones son el lugar mas importante para anotar tipos en TS.
- **Sintaxis**:
```ts
function sumar(a: number, b: number): number {
  return a + b;
}

const restar = (a: number, b: number): number => a - b;

// opcional y por defecto
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}

// rest tipado
function total(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0);
}
```
- **Errores comunes**:
  - Olvidar el tipo de retorno: TS lo infiere, pero es mejor ser explicito en funciones complejas.
  - No manejar el caso de parametros opcionales: `apellido` puede ser `undefined`.
  - Mezclar tipos en `rest`: `...args: (string | number)[]` es distinto de `...args: string[]`.
- **Buenas practicas**:
  - Siempre anotar parametros y tipo de retorno en funciones publicas.
  - Usar `void` para funciones que no devuelven nada.
  - Usar tipos de retorno literales cuando el valor exacto importa.

---

## Generics
- **Que es**: tipos parametrizados. Es como una caja que sirve para cualquier contenido: la misma funcion funciona con numeros, strings u objetos, y TS se da cuenta solo de cual estas usando.
- **Cuando usarlo**: cuando queres crear funciones, clases o interfaces que funcionen con multiples tipos sin perder la seguridad de tipos.
- **Sintaxis**:
```ts
function primero<T>(lista: T[]): T | undefined {
  return lista[0];
}

const primerNumero = primero<number>([10, 20]);
const primerString = primero(['a', 'b']); // infiere T = string

// generic con clase
class Caja<T> {
  contenido?: T;
  guardar(valor: T) { this.contenido = valor; }
  obtener(): T | undefined { return this.contenido; }
}
```
- **Errores comunes**:
  - Usar `any` en vez de `<T>`: pierde la seguridad de tipos.
  - Restringir el generico sin necesidad: `<T extends string>` es mas restrictivo de lo que suele hacer falta.
  - Olvidar que el generico se infiere en la llamada: no siempre hay que escribir `<T>`.
- **Buenas practicas**:
  - Empezar con generics simples (`<T>`) y agregar restricciones (`extends`) solo si hace falta.
  - Nombrar el generico con una letra mayuscula (`T`, `U`, `K`, `V`).
  - Los generics son ideales para colecciones, filtros, y funciones de utilidad.

---

## Utility types (Pick, Partial)
- **Que es**: herramientas que TS te da para transformar tipos existentes. `Pick` elige algunas propiedades de un tipo. `Partial` hace todas las propiedades opcionales.
- **Cuando usarlo**: cuando necesitas un tipo derivado de otro sin copiar y pegar la definicion. Son como atajos para tipos comunes.
- **Sintaxis**:
```ts
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

type SoloNombre = Pick<Usuario, 'nombre'>;     // { nombre: string }
type Parcial = Partial<Usuario>;               // todas opcionales

const parcial: Parcial = { nombre: 'Ana' };    // ok, el resto falta
const nombreSolo: SoloNombre = { nombre: 'Ana' };
```
- **Errores comunes**:
  - Usar `Pick` con una propiedad que no existe en el tipo original.
  - Olvidar que `Partial` hace TODO opcional, incluidos campos que deberian ser obligatorios.
  - Confundir `Partial` con `optional` en una interfaz: son mecanismos distintos.
- **Buenas practicas**:
  - Usar `Pick` para crear tipos "vista" de objetos grandes.
  - Usar `Partial` para funciones de actualizacion (pasar solo los campos que cambian).
  - Combinar con `Required` cuando necesitas lo contrario de `Partial`.

---

## tsconfig strict
- **Que es**: el modo mas exigente de TS. Activa todas las verificaciones estrictas de una vez. Es como tener el profe mas riguroso: te corrige todo, pero asi aprendes bien.
- **Cuando usarlo**: siempre en proyectos nuevos. Ya esta habilitado en este modulo.
- **Sintaxis**:
```json
{
  "compilerOptions": {
    "strict": true
  }
}
```
- **Errores comunes**:
  - Desactivar `strict` para que compile: es como sacarse el corrective眼镜 para no ver los errores.
  - No leer los mensajes de error: TS te dice exactamente que esta mal y donde.
- **Buenas practicas**:
  - Mantener `strict: true` siempre.
  - Leer los mensajes de error con calma: son especificos y te guian hacia la solucion.
  - Corregir un error a la vez, no todos de golpe.

---

## Compilar y correr
```bash
npm run build                          # compila todo a dist/
node dist/ejemplos/01-tipos-basicos.js # corre un ejemplo compilado
```
En PowerShell de Windows el `&&` no funciona. Correr los dos comandos por separado (o encadenarlos con `;`). El `dist/` es generado: nunca editarlo directamente.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-tipos-basicos.ts` | anotaciones, inferencia, union, any, void |
| `ejemplos/02-interfaces.ts` | interfaces, opcionales, readonly, type alias |
| `ejemplos/03-funciones.ts` | funciones tipadas, void, rest, opcionales |
| `ejemplos/04-generics.ts` | genericos, utility types (Pick, Partial) |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-tipos.ts` | tipos basicos y union types |
| `ejercicios/ej-02-interfaz.ts` | interfaz Producto + inventario |
| `ejercicios/ej-03-funciones.ts` | funciones tipadas |
| `ejercicios/ej-04-generics.ts` | genericos |
| `ejercicios/ej-05-conversion.ts` | migrar Rectangulo de JS a TS |

Corre cada ejercicio con:
```
npm run build
node dist/ejercicios/ej-XX-tipos.js
```
(En PowerShell no se puede encadenar con `&&`; correr los dos comandos por separado.)

Y si el compilador marca un error, no te asustes: leé el mensaje, es el profe tirandote un centro para que arregles la tarea. Probalo vos mismo, que asi se aprende.
