# Módulo 12 — Programación asincrónica

Acá viene uno de los temas más importantes (y de los más lindos): hacer que el programa no se quede "colgado" esperando. Vas a ver cómo JavaScript maneja las cosas que tardan, como las que pasan todos los días en la vida real.

## Síncrono vs asíncrono
Node ejecuta una cosa a la vez (event loop). Las operaciones lentas (red, archivos, timers) **no bloquean**: se encolan y avisan cuando terminan. Es como en la verdulería: mientras te pesan los tomates, no dejás de charlar con la de al lado; cuando tu pedido está listo, te avisan.

## Callbacks
```js
setTimeout(() => { console.log('listo'); }, 1000);
```
Función que se ejecuta cuando algo termina. Es como dejarle el encargo al delivery: vos seguís con lo tuyo y, cuando llega, te avisa. Ojo: anidar muchos callbacks se vuelve ilegible (el famoso "callback hell", el infierno de las anidaciones). Por eso existen las promesas.

## Promesas
Objeto que representa un valor **futuro** (pendiente → cumplida/rechazada). Pensalo como un pedido por delivery: lo encargás (pendiente), seguís con otra cosa, y cuando llega te avisan (cumplida) o te dicen que no salió (rechazada).
```js
function esperar(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) reject(new Error('negativo'));
    else setTimeout(() => resolve('ok'), ms);
  });
}
esperar(100)
  .then(res => console.log(res))     // si se cumplió
  .catch(err => console.log(err.message))  // si falló
  .finally(() => console.log('siempre'));
```

Combinadores: son como juntar varios pedidos y esperarlos juntos.
- `Promise.all([...])` → espera TODAS; si UNA falla, falla todo.
- `Promise.allSettled([...])` → espera todas y devuelve estado de cada una.
- `Promise.race([...])` → la primera que termine.

## async / await
Azúcar sintáctico sobre promesas: es como decirle a quien te atiende "mirá, mientras espero me tomo un mate y cuando esté listo me avisás". El código se lee casi como si fuera síncrono, mucho más tranquilo de seguir.
```js
async function main() {
  try {
    const res = await esperar(100);
    console.log(res);
  } catch (err) {
    console.log('Error:', err.message);
  }
}
```
Dentro de `async`, `await` "pausa" hasta que la promesa resuelva. Los errores se atrapan con try/catch, como tener un plan B listo por si algo sale mal.

## fetch
Disponible nativamente en Node 18+ (necesita internet):
```js
const res = await fetch('https://...');
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const datos = await res.json();
```
fetch es quien sale a buscar datos de afuera, como el que va al almacén por la lista de precios del día.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-callback.js` | callbacks con setTimeout |
| `ejemplos/02-promesas.js` | then/catch/finally, Promise.all/allSettled |
| `ejemplos/03-async-await.js` | async/await y try/catch |
| `ejemplos/04-fetch.js` | fetch a una API pública (necesita internet) |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-esperar.js` | promesa con setTimeout |
| `ejercicios/ej-02-encadenar.js` | encadenar promesas |
| `ejercicios/ej-03-async.js` | async/await de pasos |
| `ejercicios/ej-04-all.js` | Promise.all y suma |
| `ejercicios/ej-05-fetch.js` | fetch con manejo de errores |