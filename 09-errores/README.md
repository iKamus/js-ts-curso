# Módulo 09 — Manejo de errores

## throw
`throw` interrumpe la ejecución y lanza un valor (normalmente un `Error`). Es como gritar "¡PARÁ!" en el medio de la cancha: todo se detiene en ese punto:
```js
throw new Error('mensaje');
```
Si no se atrapa, Node termina el proceso mostrando el error. O sea, si nadie agarra esa pelota, el partido se corta.

## try / catch / finally
Es la red de seguridad del trapecista o el paragolpes del auto: vos intentás algo, y si sale mal, hay algo que te agarra para que no te estrelles.
```js
try {
  // código que puede fallar
} catch (error) {
  // qué hacer si falla (error.message, error.name)
} finally {
  // corre SIEMPRE (con o sin error)
}
```
El `finally` es como los pasillos del colegio: se limpian todos los días, llueva o truene, haya error o no.

## Tipos de Error
- `Error` → genérico
- `TypeError` → operación sobre un tipo incorrecto (`null.prop`)
- `RangeError` → valor fuera de rango
- `ReferenceError` → variable que no existe
- `SyntaxError` → sintaxis inválida (ej: JSON mal formado)

Es como distinguir entre distintos tipos de accidentes: no es lo mismo quedarse sin nafta que pinchar una goma. Se distinguen con `error instanceof TypeError`.

## Errores custom
Podés crear tu propia clase de error, con datos extra adentro. Es como llenar una denuncia más detallada: no solo decís qué pasó, sino también en qué campo.
```js
class ErrorDeValidacion extends Error {
  constructor(campo, mensaje) {
    super(mensaje);
    this.name = 'ErrorDeValidacion';
    this.campo = campo;
  }
}
```
Así podés hacer `catch` específico con `instanceof` y acceder a datos extra.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-try-catch.js` | try/catch/finally, tipos de error |
| `ejemplos/02-errores-custom.js` | throw y errores custom |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-dividir.js` | dividir con validación |
| `ejercicios/ej-02-json.js` | parsear JSON con try/catch |
| `ejercicios/ej-03-email.js` | error custom de email |
| `ejercicios/ej-04-calculadora.js` | calculadora de expresiones |