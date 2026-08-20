# Modulo 12 — Programacion asincronica

JavaScript es como un cocinero que no se queda parado mirando la olla: mientras el agua hierve, sigue picando cebolla. Este modulo es tu guia para entender como maneja las cosas que tardan sin bloquear todo el programa.

---

## Sincrono vs asincrono

- **Que es**: sincrono es hacer las cosas de a una, esperando a que cada una termine antes de arrancar la siguiente (como hacer cola en el banco). Asincrono es arrancar algo que tarda y seguir con otra cosa mientras tanto (como pedir un delivery y seguir tranquilo en casa).
- **Cuando usarlo**: siempre. JavaScript es sincrono por defecto; las operaciones asincronas (red, archivos, timers) necesitan mecanismos especiales para no bloquear.
- **Sintaxis**:
```js
// sincrono: bloquea hasta que termine
const resultado = procesoLento(); // todo el programa espera

// asincrono: arranca y sigue
procesoLento(); // arranca, el programa sigue
console.log('no espero');
```
- **Errores comunes**: pensar que `console.log` despues de una operacion asincrona se ejecuta "despues" de esa operacion. No: se ejecuta inmediatamente, sin esperar.
- **Buenas practicas**: trata de no bloquear el hilo principal. Si algo tarda (leer un archivo grande, llamar a una API), usa callbacks, promesas o async/await.

---

## Event loop

- **Que es**: el mecanismo que le permite a JavaScript manejar asincronia sin hilos adicionales. Es como un relevo: el hilo principal ejecuta codigo sincrono, y cuando se encuentra con algo asincrono (setTimeout, fetch, readFile), lo deja en una "fila de espera" y sigue. Cuando la operacion termina, el event loop la pone de vuelta en la cola para que se ejecute.
- **Cuando usarlo**: no se usa directamente; es el motor que hace que las callbacks, promesas y async/await funcionen.
- **Sintaxis**:
```js
console.log('1');          // sincrono: se ejecuta ahora
setTimeout(() => {
  console.log('2');        // asincrono: va a la cola de timers
}, 0);                     // 0 ms no es inmediato: va a la cola
console.log('3');          // sincrono: se ejecuta ahora
// Salida: 1, 3, 2
```
- **Errores comunes**: pensar que `setTimeout(fn, 0)` es "inmediato". No lo es: primero termina todo el codigo sincrono, y despues el event loop revisa la cola.
- **Buenas practicas**: no uses `setTimeout` para "ordenar" codigo asincrono. Usa promesas o async/await para controlar el flujo.

---

## Callbacks

- **Que es**: una funcion que se pasa como argumento para que se ejecute cuando algo termina. Es como dejarle el encargo al delivery: tu sigues con lo tuyo y, cuando llega, te avisa.
- **Cuando usarlo**: es el mecanismo mas basico de asincronia. Aunque las promesas y async/await lo reemplazan en la mayoria de los casos, todavia se usa en APIs viejas (como `fs.readFile` en Node) y en eventos del DOM.
- **Sintaxis**:
```js
function prepararCafe(tiempoMs, alListo) {
  setTimeout(() => {
    alListo('cafe listo');
  }, tiempoMs);
}

prepararCafe(500, (mensaje) => {
  console.log(mensaje);
});
console.log('mientras tanto...');
// Salida: "mientras tanto...", despues "cafe listo"
```
- **Errores comunes**: anidar muchos callbacks, el famoso "callback hell". Tambien olvidar que una callback que tira error sin try/catch crashea el programa.
- **Buenas practicas**: si tienes mas de dos niveles de anidacion, pasa a promesas. Si la callback recibe un error, usalo como primer parametro (convencion de Node).

---

## Promise

- **Que es**: un objeto que representa un valor futuro. Al principio esta "pendiente" y despues pasa a "cumplida" (resolve) o "rechazada" (reject). Es como un ticket de reclamo: lo entregas, te dan un numero, y cuando esta listo te lo dicen (o te dicen que no pudo ser).
- **Cuando usarlo**: cada vez que necesites algo asincrono: llamar a una API, leer archivos, esperar un tiempo, o encadenar pasos donde cada uno depende del anterior.
- **Sintaxis**:
```js
function esperar(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) reject(new Error('negativo'));
    else setTimeout(() => resolve('ok'), ms);
  });
}

esperar(300)
  .then(res => console.log(res))       // cumplida
  .catch(err => console.log(err.message)) // rechazada
  .finally(() => console.log('siempre')); // pase lo que pase
```
- **Metodos/funciones internos**:
| Metodo | Que hace | Ejemplo | Resultado |
|---|---|---|---|
| `resolve(valor)` | cumple la promesa | `resolve(42)` | `.then` recibe `42` |
| `reject(error)` | rechaza la promesa | `reject(Error('fallo'))` | `.catch` recibe el error |
| `.then(fn)` | ejecuta `fn` si se cumple | `.then(v => v * 2)` | devuelve otra promesa |
| `.catch(fn)` | ejecuta `fn` si falla | `.catch(e => console.log(e))` | devuelve otra promesa |
| `.finally(fn)` | ejecuta `fn` siempre | `.finally(() => limpiar())` | se ejecuta igual |
- **Errores comunes**: olvidar que `.then` y `.catch` devuelven otra promesa. Tambien olvidar el `return` dentro de `.then` para encadenar.
- **Buenas practicas**: siempre usa `.catch` o `try/catch` con async/await. Encadena `.then` con `return` para manejar flujos largos.

---

## Promise.all

- **Que es**: junta varias promesas y espera a que se cumplan TODAS. Si una sola falla, falla todo el combo. Es como pedir varios deliveries y esperar a que lleguen todos antes de sentarte a comer.
- **Cuando usarlo**: cuando tienes varias operaciones asincronas independientes y necesitas todos los resultados para continuar.
- **Sintaxis**:
```js
Promise.all([esperar(100), esperar(200), esperar(150)])
  .then(valores => console.log(valores)) // [ok, ok, ok]
  .catch(err => console.log('fallo una'));
```
- **Errores comunes**: que una sola promesa rechazada tire todo el resultado, y no tengas forma de saber cual fue la que fallo. Si necesitas saber cual fallo, usa `Promise.allSettled`.
- **Buenas practicas**: solo usa `Promise.all` cuando todas las promesas son igual de importantes. Si una puede fallar y las demas no, usa `Promise.allSettled`.

---

## Promise.allSettled

- **Que es**: junta varias promesas y espera a que todas terminen (cumplidas o rechazadas). Devuelve un array donde cada elemento tiene un `status` ("fulfilled" o "rejected") y el valor o el error. Es como recibir el reporte de todos los deliveries: no importa si alguno fallo, te dicen el estado de cada uno.
- **Cuando usarlo**: cuando necesitas el resultado de todas las promesas sin que una falla corte el resto. Ideal para operaciones donde puedes tener exitos parciales.
- **Sintaxis**:
```js
Promise.allSettled([esperar(100), esperar(-1)])
  .then(resultados => {
    resultados.forEach(r => {
      if (r.status === 'fulfilled') console.log('OK:', r.value);
      else console.log('Fallo:', r.reason.message);
    });
  });
```
- **Errores comunes**: confundirlo con `Promise.all`. `allSettled` nunca rechaza: siempre resuelve con el estado de cada promesa.
- **Buenas practicas**: usalo cuando quieras un reporte completo. Cada resultado tiene `status` ("fulfilled" o "rejected"), `value` (si se cumple) o `reason` (si falla).

---

## Promise.race

- **Que es**: compite entre varias promesas y devuelve la primera que termine (sea cumplida o rechazada). Es como una carrera: el que cruza la linea primero gana, y los demas se ignoran.
- **Cuando usarlo**: cuando quieres usar el resultado de la respuesta mas rapida, o implementar un timeout para una operacion que puede tardar demasiado.
- **Sintaxis**:
```js
Promise.race([esperar(300), esperar(100)])
  .then(valor => console.log('ganador:', valor)); // "ganador: ok" (despues de 100ms)
```
- **Errores comunes**: olvidar que si la primera en resolver es rechazada, `race` rechaza tambien. Tambien confundir con `Promise.all`: `race` es solo una, `all` son todas.
- **Buenas practicas**: combinalo con `Promise.race` de un timeout para evitar que algo se quede colgado eternamente:
```js
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject(new Error('timeout')), 5000)
);
Promise.race([fetch(url), timeout]);
```

---

## async/await

- **Que es**: azucar sintactico sobre promesas. `async` marca una funcion como asincrona y `await` "pausa" hasta que una promesa resuelva. El codigo se lee casi como si fuera sincrono, mucho mas tranquilo de seguir.
- **Cuando usarlo**: siempre que trabajes con promesas y quieras codigo mas legible. Reemplaza casi completamente a `.then()`.
- **Sintaxis**:
```js
async function main() {
  console.log('arranco');
  await esperar(500);
  console.log('pasaron 500ms');
  const res = await esperar(100);
  console.log(res);
}
main();
```
- **Errores comunes**: usar `await` fuera de una funcion `async` (tira error). Tambien olvidar que `await` solo espera promesas: si le pasas algo que no es una promesa, lo resuelve inmediatamente.
- **Buenas practicas**: marca como `async` solo las funciones que usan `await`. Dentro de una funcion async, siempre envuelve en `try/catch` las operaciones que pueden fallar.

---

## try/catch con async

- **Que es**: la forma de atrapar errores en codigo asincrono con async/await. Es como tener un plan B listo: si algo sale mal, el catch lo atrapa y el programa sigue andando en vez de romperse.
- **Cuando usarlo**: siempre que uses `await` con operaciones que pueden fallar (fetch, parseo de JSON, etc.).
- **Sintaxis**:
```js
async function obtenerDato() {
  try {
    const res = await fetch('https://api.ejemplo.com/dato');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const datos = await res.json();
    return datos;
  } catch (err) {
    console.log('Error:', err.message);
  }
}
```
- **Errores comunes**: solo atrapa errores de `await` y de codigo dentro del `try`. Si hay una promesa sin `await` dentro del `try`, su error no se atrapa.
- **Buenas practicas**: pon el `try` justo antes de la operacion que puede fallar, no toda la funcion. Asi el `catch` atrapa solo lo que necesitas.

---

## fetch

- **Que es**: la forma nativa de hacer peticiones HTTP en Node 18+ y en todos los navegadores. Es como ir a buscar datos a otro lugar: le dices "traeme esto", esperas la respuesta y despues la revisas con calma.
- **Cuando usarlo**: cada vez que necesites comunicarte con una API, un servidor, o cualquier recurso web.
- **Sintaxis**:
```js
async function obtenerPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const datos = await res.json();
    console.log('Posts:', datos.length);
  } catch (err) {
    console.log('Error de red:', err.message);
  }
}
```
- **Metodos/funciones internos**:
| Propiedad/Metodo | Que hace | Ejemplo |
|---|---|---|
| `res.ok` | `true` si status 200-299 | `if (!res.ok) throw Error(...)` |
| `res.status` | codigo HTTP | `res.status` -> `200` |
| `res.json()` | parsea body como JSON | `const datos = await res.json()` |
| `res.text()` | lee body como texto | `const html = await res.text()` |
| `res.headers` | cabeceras de respuesta | `res.headers.get('content-type')` |
- **Errores comunes**: `fetch` solo rechaza en errores de red (sin conexion, DNS). Si el servidor responde con 404 o 500, fetch no rechaza: tienes que chequear `res.ok` manualmente.
- **Buenas practicas**: siempre chequea `res.ok` despues de fetch. Para peticiones POST, pasale un segundo parametro con method, headers y body.

---

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-esperar.js` | crear una promesa con setTimeout |
| `ejercicios/ej-02-encadenar.js` | encadenar promesas con .then |
| `ejercicios/ej-03-async.js` | reescribir con async/await |
| `ejercicios/ej-04-all.js` | Promise.all y suma de resultados |
| `ejercicios/ej-05-fetch.js` | fetch con manejo de errores (necesita internet) |

## Proyecto

| Archivo | Consigna |
|---|---|
| `proyecto/monitor.js` | Monitor de servicios: chequear URLs con fetch + Promise.allSettled, medir tiempos con Promise.race, reintentar fallos con async/await |

---

Ejemplo de Promise.all:
```js
async function mostrarPromesas() {
  const promesas = [
    new Promise(resolve => setTimeout(() => resolve('primera'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('segunda'), 500)),
    new Promise(resolve => setTimeout(() => resolve('tercera'), 750)),
  ];

  console.log('Esperando a que terminen todas...');
  const resultados = await Promise.all(promesas);
  console.log('Resultados:', resultados);
  // Salida: ["primera", "segunda", "tercera"]
}

mostrarPromesas();
```

Para probar los ejercicios, ejecuta cada uno con Node:
```
node ejercicios/ej-01-esperar.js
node ejercicios/ej-02-encadenar.js
node ejercicios/ej-03-async.js
node ejercicios/ej-04-all.js
node ejercicios/ej-05-fetch.js
node proyecto/monitor.js
```
