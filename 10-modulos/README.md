# Modulo 10 — Modulos (CommonJS y ES Modules)

Node tiene **dos sistemas** para separar codigo en archivos. Es como organizar la mochila del cole: en vez de tener todo amontonado en una bolsa, separas cada materia en su carpeta aparte. Un modulo es eso: un archivo que exporta cosas (funciones, variables) para que otros archivos las pidan y las usen.

En este curso usamos extensiones distintas para que sea evidente cual sistema es: `.cjs` para CommonJS y `.mjs` para ES Modules.

---

## CommonJS (require)
- **Que es**: es la forma clasica de importar modulos en Node. Funciona con `require()` para pedir lo que otro archivo exporto, y `module.exports` para entregar lo que uno tiene. Es como ir al almacen: dices "necesito X", te lo dan, y listo.
- **Cuando usarlo**: en archivos `.cjs` y en cualquier proyecto Node que no tenga `"type": "module"` en su `package.json`. Es el sistema que existio durante anos antes de que llegara el estandar ESM.
- **Sintaxis**:
  ```js
  // Pedir un modulo completo
  const mat = require('./lib/matematicas.cjs');

  // Pedir solo cosas sueltas con destructuring
  const { sumar, PI } = require('./lib/matematicas.cjs');
  ```
- **Errores comunes**:
  - Olvidar la ruta relativa con `./`: `require('matematicas.cjs')` no funciona, necesitas `require('./lib/matematicas.cjs')`.
  - Mezclar `require` con `import` en el mismo archivo: son sistemas distintos, no se mezclan.
  - Usar `require` en un archivo `.mjs`: los archivos ESM no tienen `require` disponible.
- **Buenas practicas**:
  - Agrupa los `require` arriba del archivo, asi queda claro que dependencias usa.
  - Usa destructuring cuando no necesitas todo el modulo: `const { sumar } = require(...)`.
  - La ruta siempre empieza con `./` o `../` para archivos locales.

---

## module.exports
- **Que es**: es la caja de entrega de un modulo CommonJS. Todo lo que metas en `module.exports` queda disponible para quien haga `require` de ese archivo. Es como armar un paquete para pasar al almacen: juntas lo que quieres dar y lo despachas.
- **Cuando usarlo**: siempre que un archivo `.cjs` necesite compartir funciones, objetos o valores con otros archivos.
- **Sintaxis**:
  ```js
  // Exportar un objeto con varias cosas adentro
  function sumar(a, b) { return a + b; }
  const PI = 3.1416;
  module.exports = { sumar, PI };

  // Tambien puedes exportar de a una (no es lo comun)
  module.exports.sumar = sumar;
  ```
- **Errores comunes**:
  - Asignar a `module.exports` despues de hacer `module.exports = algo`: se sobreescribe todo.
  - No devolver nada: si pones `module.exports = {}`, el consumidor recibe un objeto vacio.
- **Buenas practicas**:
  - Exporta un solo objeto con todo agrupado al final del archivo.
  - No mutes `module.exports` a mitad del codigo, mantenlo limpio en una sola asignacion.

---

## CommonJS (.cjs)
- **Que es**: es la extension de archivo que le dice a Node "este archivo usa CommonJS". Aunque `.js` tambien puede ser CJS (por defecto en Node), `.cjs` lo hace explisito y queda claro solo con mirar el nombre del archivo.
- **Cuando usarlo**: cuando quieres que sea evidente que un archivo usa CommonJS, o cuando trabajas en un proyecto que tiene `"type": "module"` pero necesitas un archivo CJS particular.
- **Sintaxis**:
  ```
  mi-modulo.cjs    ← CommonJS (usa require y module.exports)
  ```
  No hay nada especial en la sintaxis interna del archivo: sigue siendo `require` y `module.exports` como siempre.
- **Errores comunes**:
  - Confundirlo con `.mjs`: la `c` es de **C**ommonJS, la `m` es de e**M**odules (o ES **M**odules).
  - Olvidar la extension al importar: `require('./lib/matematicas')` no va a encontrar el archivo sin `.cjs`.
- **Buenas practicas**:
  - En este curso, toda la carpeta `lib/` de modulos CJS usa `.cjs` para que no haya dudas.
  - Si un archivo usa `require`, que sea `.cjs`. Si usa `import`, que sea `.mjs`.

---

## ES Modules (import/export)
- **Que es**: es el estandar moderno de JavaScript para modulos, el que se usa en todos los navegadores y en Node con la flag ESM. En vez de `require` y `module.exports`, usa `import` y `export` que son mas claros y directos. Es como un cafeteria con menu: importas lo que necesitas por nombre, sin tener que pedir todo el paquete.
- **Cuando usarlo**: siempre que puedas. Es el sistema actual, el que vas a encontrar en proyectos nuevos y frameworks modernos (React, Next, Vite, etc.).
- **Sintaxis**:
  ```js
  // Exportar funciones o variables
  export function sumar(a, b) { return a + b; }
  export const PI = 3.1416;

  // Importar lo que necesites
  import { sumar, PI } from './lib/matematicas.mjs';
  ```
- **Errores comunes**:
  - Usar `import` en un archivo `.cjs`: los modulos CJS no entienden `import`.
  - Olvidar la extension `.mjs` en la ruta de import: `import { x } from './matematicas'` no funciona en Node (en bundlers como Vite si).
  - Poner `import` despues de codigo que no es `import/export`: los imports deben ir al tope del archivo.
- **Buenas practicas**:
  - Agrupa todos los `import` arriba del archivo, antes de cualquier otra linea de codigo.
  - Nombralo `.mjs` en este curso para que sea evidente que es ESM.
  - Los imports son estaticos: se resuelven en tiempo de compilacion, no en tiempo de ejecucion.

---

## Named exports
- **Que es**: son las exportaciones que tienen nombre propio. Puedes tener varios en el mismo archivo, y el consumidor elige cuales importar con llaves `{ }`. Es como una estanteria con etiquetas: agarras solo lo que necesitas.
- **Cuando usarlo**: es la forma mas comun de exportar. Usalo para funciones, constantes o variables que quieras compartir de un modulo.
- **Sintaxis**:
  ```js
  // Exportar (en el archivo del modulo)
  export function sumar(a, b) { return a + b; }
  export function restar(a, b) { return a - b; }
  export const PI = 3.1416;

  // Importar (en el archivo consumidor)
  import { sumar, PI } from './lib/matematicas.mjs';
  ```
- **Errores comunes**:
  - Olvidar las llaves al importar: `import sumar from './mod.mjs'` no trae el named export, trae el default.
  - Renombrar sin usar `as`: `import { sumar as s } from ...` es la forma correcta de renombrar.
- **Buenas practicas**:
  - Nombralos de forma clara: `sumar`, `restar`, `calcularTotal`.
  - Puedes renombrar al importar: `import { sumar as suma } from ...` cuando el nombre original choca con algo local.

---

## Default export
- **Que es**: es una exportacion "estrella" del archivo, una sola por archivo. Se importa sin llaves, directo con el nombre que le pongas. Es como el plato del dia del comedor: solo hay uno, y lo pides por nombre.
- **Cuando usarlo**: cuando un archivo tiene una funcion o valor principal que es lo mas importante que ofrece. No todos los archivos necesitan un default.
- **Sintaxis**:
  ```js
  // Exportar (solo UNO por archivo)
  export default function saludar(nombre) {
    return `Hola, ${nombre}`;
  }

  // Importar (sin llaves, nombre libre)
  import saludar from './saludos.mjs';
  saludar('Ana'); // "Hola, Ana"
  ```
- **Errores comunes**:
  - Poner dos `export default` en el mismo archivo: da error, solo puede haber uno.
  - Confundirlo con named export: `import { default } from ...` no es la forma comun.
- **Buenas practicas**:
  - Usalo cuando tiene sentido: un modulo con una funcion principal clara.
  - No abuses: si tu modulo tiene varias partes importantes, usa named exports en vez de meter todo en el default.

---

## ES Modules (.mjs)
- **Que es**: es la extension de archivo que le dice a Node "este archivo usa ES Modules". Es la contraparte de `.cjs`: con solo mirar la extension ya sabes que el archivo usa `import` y `export`.
- **Cuando usarlo**: cuando el archivo usa sintaxis ESM (`import`/`export`). En este curso, todo archivo ESM lleva `.mjs`.
- **Sintaxis**:
  ```
  mi-modulo.mjs    ← ES Modules (usa import y export)
  ```
  Internamente es un archivo JavaScript normal, pero con la ventaja de que la extension avisa al runtime que sistema usa.
- **Errores comunes**:
  - Confundir con `.cjs`: `.mjs` = ES Modules, `.cjs` = CommonJS.
  - Usar `require` en un `.mjs`: no existe en ese contexto.
- **Buenas practicas**:
  - En este curso, toda la carpeta `lib/` de modulos ESM usa `.mjs`.
  - Si un archivo usa `import`/`export`, que sea `.mjs`. Si usa `require`, que sea `.cjs`.

---

## Diferencias CJS vs ESM

| Caracteristica | CommonJS (.cjs) | ES Modules (.mjs) |
|---|---|---|
| Importar | `require('./archivo.cjs')` | `import x from './archivo.mjs'` |
| Exportar | `module.exports = { ... }` | `export function x() { }` |
| Carga | Sincrona (bloquea hasta que carga) | Asincrona (puede cargar en paralelo) |
| Extension | `.cjs` | `.mjs` |
| Disponibilidad | Node desde siempre | Node con `"type":"module"` o `.mjs` |
| Navegadores | No | Si |
| `this` a nivel de archivo | `module.exports` | `undefined` |
| Re-exports | No hay forma directa | `export { x } from './otro.mjs'` |

- **Que es**: es la comparacion entre los dos sistemas de modulos de JavaScript. Los dos hacen lo mismo (compartir codigo entre archivos), pero con sintaxis y comportamientos distintos.
- **Cuando usarlo**: conocelas para entender por que existen las dos formas y para saber que elegir en cada situacion.
- **Errores comunes**:
  - Mezclar sistemas en el mismo archivo: `require` en `.mjs` o `import` en `.cjs` no funciona.
  - Asumir que `require` funciona en navegadores: solo existe en Node (a menos que lo polyfilles).
- **Buenas practicas**:
  - Para proyectos nuevos, prefiere ES Modules.
  - Si heredas un proyecto que usa CommonJS, no lo cambies todo de golpe: los dos funcionan bien.
  - En este curso usamos `.cjs` y `.mjs` para que quede claro cual es cual, sin vueltas.

---

## Ejemplos

| Archivo | Que es |
|---|---|
| `lib/matematicas.cjs` | modulo CommonJS que exporta funciones con `module.exports` |
| `lib/matematicas.mjs` | modulo ES que exporta named + default con `export` |
| `uso-cjs.cjs` | consumidor que usa `require` para pedir al modulo CJS |
| `uso-esm.mjs` | consumidor que usa `import` para pedir al modulo ESM |

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-main.cjs` | crear y usar un modulo CommonJS |
| `ejercicios/ej-02-main.mjs` | modulo ES con default + named |
