# Proyecto: Monitor de servicios

## Consigna

Armar un monitor de servicios que chequea si varias URLs estan arriba, mide los tiempos de respuesta y reintenta los que fallaron. Todo se hace con lo visto en el modulo 12: promesas, async/await, fetch, Promise.allSettled, Promise.race y try/catch.

## Requisitos

1. **Crear la funcion `chequearServicio(url, timeout)`**:
   - Usa `Promise.race` para competir entre el fetch y un timeout.
   - El timeout es una promesa que rechaza despues de `timeout` ms (por defecto 3000).
   - Devuelve un objeto con `{ url, ok: true, tiempoMs }` si respondio bien.
   - Devuelve un objeto con `{ url, ok: false, error, tiempoMs }` si falla.
   - Usar `Date.now()` para medir el tiempo de respuesta ( antes del fetch y despues, la diferencia es el tiempo).
   - Dentro de un try/catch: si `fetch` lanza error o el timeout gana la carrera, capturar el error y devolver `{ url, ok: false, error: err.message, tiempoMs }`.

2. **Crear la funcion `monitorearUrls(urls, timeout)`**:
   - Recibe un array de URLs y un timeout opcional.
   - Usa `Promise.allSettled` para lanzar todos los chequeos a la vez.
   - Itera los resultados: los que tienen `status === 'fulfilled'` usan el valor, los que tienen `status === 'rejected'` arman un objeto de fallo.
   - Devuelve un array con todos los resultados.

3. **Crear la funcion `reintentar(url, intentos, timeout)`**:
   - Usa `async/await` con un bucle `for` que reintenta hasta `intentos` veces.
   - En cada intento llama a `chequearServicio`.
   - Si `ok` es `true`, devuelve el resultado inmediatamente.
   - Si falla, espera 1 segundo con un `setTimeout` envuelto en promesa antes de reintentar.
   - Si se agotan los intentos, devuelve el ultimo resultado (con `ok: false`).

4. **Crear la funcion principal `main()`**:
   - Define un array con 4 URLs de prueba:
     - `'https://jsonplaceholder.typicode.com/posts/1'` (funciona)
     - `'https://jsonplaceholder.typicode.com/comments/1'` (funciona)
     - `'https://noexiste.example.com'` (falla)
     - `'https://jsonplaceholder.typicode.com/todos/1'` (funciona)
   - Llama a `monitorearUrls` con esas URLs.
   - Muestra los resultados: cuales estan arriba, cuales fallaron y los tiempos.
   - Para los servicios que fallaron, usa `reintentar` con 2 intentos.
   - Muestra el resumen final: cuantos servicios estan arriba de los totales.

5. **Mostrar el resumen** con este formato (ver Resultado esperado).

## Estructura del archivo

El archivo `monitor.js` tiene la plantilla incompleta. Completa las partes marcadas con `// completa aqui`.

## Pasos sugeridos

1. Crear `chequearServicio` usando `Promise.race` entre `fetch(url)` y un timeout.
2. Crear `monitorearUrls` usando `Promise.allSettled` con `chequearServicio` para cada URL.
3. Crear `reintentar` con `async/await` y un bucle `for`.
4. Crear `main` que junte todo: chequear, mostrar, reintentar fallos, resumen.

## Tips

- `Promise.race` devuelve la primera promesa que resuelva (cumplida o rechazada). Para el timeout, crea una promesa con `reject` y `setTimeout`.
- `Promise.allSettled` nunca rechaza: cada resultado tiene `status` ("fulfilled" o "rejected"), `value` (si se cumple) o `reason` (si falla).
- Para medir tiempo: `const inicio = Date.now(); ... const tiempo = Date.now() - inicio;`
- Para esperar entre reintentos: `await new Promise(resolve => setTimeout(resolve, 1000))`.
- Dentro de una funcion async, un `return` dentro de un `for` hace que la funcion devuelva ese valor.

## Resultado esperado

```
=== Monitor de servicios ===

--- Resultados del chequeo ---
  OK   145ms  https://jsonplaceholder.typicode.com/posts/1
  OK    98ms  https://jsonplaceholder.typicode.com/comments/1
  FAIL  21ms  https://noexiste.example.com (fetch failed)
  OK   112ms  https://jsonplaceholder.typicode.com/todos/1

--- Reintentando servicios fallidos ---
  Reintentando https://noexiste.example.com (intento 1/2)...
  FAIL  19ms  https://noexiste.example.com (fetch failed)
  Reintentando https://noexiste.example.com (intento 2/2)...
  FAIL  18ms  https://noexiste.example.com (fetch failed)

--- Resumen ---
  Arriba: 3/4
  Caidos: 1/4
```
