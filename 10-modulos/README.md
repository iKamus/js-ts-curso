# Módulo 10 — Módulos (CommonJS y ES Modules)

Node tiene **dos sistemas** para separar código en archivos. Pensalo como ordenar el material del cole: en vez de tener todo amontonado en una sola carpeta, separás cada materia en su propia carpeta. Eso es un módulo: código organizado, listo para reusar donde haga falta.

## CommonJS (`.cjs` o `.js` sin `"type":"module"`)
```js
// lib/matematicas.cjs
module.exports = { sumar, restar, PI };
```
```js
// uso.cjs
const mat = require('./lib/matematicas.cjs');
```
- `require` carga lo que otro archivo exportó con `module.exports`. Es como pasarle el paquete al almacén para que lo retiren cuando lo necesiten.
- Es síncrono, se procesa todo en orden, de una. Es el sistema clásico de Node, el de toda la vida.

## ES Modules (`.mjs` o `.js` con `"type":"module"`)
```js
// lib/matematicas.mjs
export function sumar(a, b) { ... }
export default function mensaje() { ... }
```
```js
// uso.mjs
import mensaje, { sumar, restar } from './lib/matematicas.mjs';
```
- Se declara con `import` / `export`, es más prolijo y directo.
- **Named exports** (`{ sumar }`) son los que tienen nombre propio; el **default** es uno solo por archivo, como el plato del día del comedor.
- Es el estándar moderno de JS, el que vas a ver en todos lados de acá en adelante.

Regla práctica de este curso: `.cjs` → CommonJS, `.mjs` → ES Modules. Con solo mirar el nombre del archivo ya sabés qué sistema es, sin vueltas.

## Ejemplos
| Archivo | Qué es |
|---|---|
| `lib/matematicas.cjs` | módulo CommonJS que exporta funciones |
| `lib/matematicas.mjs` | módulo ES que exporta named + default |
| `uso-cjs.cjs` | consumidor CommonJS |
| `uso-esm.mjs` | consumidor ES |

Corré: `node uso-cjs.cjs` y `node uso-esm.mjs` (desde esta carpeta). Dale, probalos vos mismo y fijate que los dos hacen lo mismo con estilos distintos.

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-main.cjs` | crear y usar un módulo CommonJS |
| `ejercicios/ej-02-main.mjs` | módulo ES con default + named |