# Modulo 09 — Manejo de errores

## throw
- **Que es**: una instruccion que interrumpe la ejecucion inmediatamente y lanza un valor (normalmente un objeto `Error`). Es como gritar "PARA!" en medio de un partido: todo se corta en ese instante y la pelota vuela.
- **Cuando usarlo**: cuando encontras una condicion invalida y queres que el programa se detenga en vez de seguir con datos incorrectos. Tambien para crear errores propios que otros bloques `try/catch` puedan atrapar.
- **Sintaxis**:
```js
throw new Error('mensaje de error');
throw 'texto plano';   // tambien vale, pero no es recomendable
```
- **Errores comunes**:
  - Olvidar el `new` y escribir solo `throw Error('msg')` — en versiones viejas funciona pero no es estandar.
  - Lanzar valores primitivos (`throw 42`) — se puede, pero dificulta el debug porque no tiene stack trace.
  - No envolver en `try/catch` despues de `throw` — el proceso termina con un error no atrapado.
- **Buenas practicas**:
  - Siempre lanzar instancias de `Error` (o clases que hereden de `Error`) para tener stack trace util.
  - Usar tipos especificos (`TypeError`, `RangeError`) cuando el error encaje en esa categoria.
  - Re-lanzar errores que no te corresponden: `catch (e) { if (!(e instanceof MiError)) throw e; }`.

## try/catch/finally
- **Que es**: un bloque que envuelve codigo que puede fallar. `try` es el intento, `catch` atrapa lo que salga mal, y `finally` corre siempre, con o sin error. Es como la red de seguridad del trapecista: intentas el numero, y si te cais, algo te agarra.
- **Cuando usarlo**: siempre que ejecutes codigo que puede lanzar un error: parsear JSON de una fuente externa, acceder a propiedades de objetos que podrian ser `null`, operaciones matematicas con datos del usuario, llamadas a funciones propias que usan `throw`.
- **Sintaxis**:
```js
try {
  // codigo que puede fallar
} catch (error) {
  // que hacer si falla: error.message, error.name, error.stack
} finally {
  // corre SIEMPRE, con o sin error
}
```
- **Metodos/propiedades del objeto Error**:

| Propiedad | Que devuelve | Ejemplo |
|---|---|---|
| `error.name` | Nombre del tipo de error | `'TypeError'` |
| `error.message` | Descripcion del problema | `'Cannot read property of null'` |
| `error.stack` | Pila de llamadas completa (string) | `'TypeError: ...\n    at ...'` |

- **Errores comunes**:
  - Olvidar el parametro del `catch` (`catch { ... }`) — en JS moderno vale, pero en versiones viejas no.
  - Poner logica pesada en `finally` sin darse cuenta de que corre siempre, inclusive cuando todo salio bien.
  - Hacer `catch` vacio (`catch (e) {}`) y tragar el error sin aviso — dificulta mucho el debug.
- **Buenas practicas**:
  - Siempre mostrar o registrar el `error.message` en el `catch`, nunca ignorar el error.
  - Usar `finally` para liberar recursos (cerrar archivos, limpiar variables) que necesitan correr pase lo que pase.
  - No usar `try/catch` como control de flujo normal: es para errores excepcionales, no para validaciones frecuentes.

## Tipos de Error
- **Que es**: JavaScript trae varias clases de error built-in. Cada una describe un problema distinto, como los distintos tipos de accidentes: no es lo mismo quedarse sin bateria que pinchear una goma.
- **Cuando usarlo**: cuando queres que el error diga exactamente que tipo de problema es, o cuando queres atrapar solo ciertos tipos con `instanceof`.
- **Tabla de tipos principales**:

| Tipo | Que significa | Ejemplo que lo lanza |
|---|---|---|
| `Error` | Error generico | `new Error('algo fallo')` |
| `TypeError` | Operacion sobre un tipo incorrecto | `null.prop` |
| `RangeError` | Valor fuera del rango permitido | `new Array(-1)` |
| `ReferenceError` | Variable que no existe | `console.log(x)` sin declarar `x` |
| `SyntaxError` | Codigo con sintaxis invalida | `JSON.parse('{mal}')` |

- **Errores comunes**:
  - Atrapar todo con `Error` generico y no distinguir entre tipos — perdés informacion util.
  - Confundir `ReferenceError` con `TypeError`: la primera es "no existe", la segunda es "existe pero no es del tipo correcto".
- **Buenas practicas**:
  - Elegir el tipo de error que mejor describa el problema al lanzar.
  - Usar `instanceof` en el `catch` para manejar distinto cada tipo cuando sea necesario.
  - Crear clases custom (`extends Error`) cuando los tipos built-in no alcanzan.

## instanceof
- **Que es**: un operador que verifica si un objeto pertenece a una clase (o hereda de ella). Es como revisar el carnet de identidad: te dice de que "familia" viene el error.
- **Cuando usarlo**: dentro de un `catch` para distinguir que tipo de error atrapaste y manejar cada uno de forma distinta. Tambien para validar tipos en tiempo de ejecucion.
- **Sintaxis**:
```js
try {
  // ...
} catch (e) {
  if (e instanceof TypeError) {
    // es un TypeError
  } else if (e instanceof RangeError) {
    // es un RangeError
  } else {
    throw e;  // re-lanzar si no es del tipo que esperaba
  }
}
```
- **Errores comunes**:
  - Usar `instanceof` con primitivos (`'hola' instanceof String`) — siempre da `false`.
  - Olvidar re-lanzar errores desconocidos: si no los re-lanzas, se tragan silenciosamente.
- **Buenas practicas**:
  - Siempre re-lanzar errores que no reconoces: `throw e` al final del `catch`.
  - Usar `instanceof` con clases custom para separar la logica de manejo de cada error.
  - No confundir con `typeof` — `instanceof` revisa la cadena de herencia, `typeof` revisa el tipo primitivo.

## Errores custom
- **Que es**: clases de error propias que creas vos, extendiendo `Error`. Permiten guardar datos extra (como el campo que fallo, un codigo de error, etc.). Es como llenar una denuncia mas detallada: no solo decis que algo fallo, sino exactamente que y donde.
- **Cuando usarlo**: cuando los tipos built-in no describen bien tu problema. Por ejemplo, errores de validacion de formularios, errores de autenticacion, errores de un dominio especifico de tu aplicacion.
- **Sintaxis**:
```js
class ErrorDeValidacion extends Error {
  constructor(campo, mensaje) {
    super(mensaje);
    this.name = 'ErrorDeValidacion';
    this.campo = campo;      // dato extra
  }
}
```
- **Metodos/propiedades**:

| Propiedad | Que devuelve | Ejemplo |
|---|---|---|
| `error.name` | Nombre de la clase custom | `'ErrorDeValidacion'` |
| `error.message` | Mensaje pasado al constructor | `'El email es invalido'` |
| `error.stack` | Pila de llamadas (hereda de Error) | `'ErrorDeValidacion: ...\n    at ...'` |
| `error.campo` | Dato extra (el que vos agregues) | `'email'` |

- **Errores comunes**:
  - No llamar a `super(mensaje)` en el constructor — rompe la cadena de herencia.
  - Olvidar setear `this.name` — el `name` queda como `'Error'` en vez del nombre de tu clase.
  - No usar `extends Error` y crear una clase normal — no tiene `stack` ni funciona con `instanceof Error`.
- **Buenas practicas**:
  - Siempre llamar a `super(mensaje)` como primera linea del constructor.
  - Setear `this.name` con el nombre de la clase para que los logs sean claros.
  - Agregar solo datos extra que sean utiles para el manejo del error (campo, codigo, etc.).
  - Usar `instanceof` en el `catch` para identificar errores custom y re-lanzar los que no reconoces.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-try-catch.js` | try/catch/finally, tipos de error, propiedades del objeto Error |
| `ejemplos/02-errores-custom.js` | throw, errores custom, re-lanzar errores |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-dividir.js` | dividir con validacion y throw |
| `ejercicios/ej-02-json.js` | parsear JSON con try/catch |
| `ejercicios/ej-03-email.js` | error custom de email |
| `ejercicios/ej-04-calculadora.js` | calculadora de expresiones |
