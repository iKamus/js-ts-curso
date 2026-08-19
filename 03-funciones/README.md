# Modulo 03 — Funciones

## function (declaracion)
- **Que es**: una funcion es una receta de cocina: le pasas ingredientes (los parametros) y te devuelve el plato listo (el `return`). La declaras una vez y la podes usar (llamar) todas las veces que quieras, con distintos ingredientes.
- **Cuando usarla**: cada vez que necesitas repetir una logica con distintos datos. En vez de copiar y pegar el mismo codigo diez veces, lo encapsulas en una funcion y la llamas.
- **Sintaxis**:
  ```js
  function sumar(a, b) {
    return a + b;
  }
  ```
  Para llamarla: `sumar(2, 3)` — los valores entre parentesis son los ingredientes que le pasas.
- **Errores comunes**:
  - Olvidar el `return` devuelve `undefined` (el plato sale vacio).
  - No confundir parametros (cuando la declaras) con argumentos (cuando la llamas).
- **Buenas practicas**:
  - Usa nombres descriptivos en los parametros (`nombre`, no `x`).
  - Una funcion deberia hacer una sola cosa (principio de responsabilidad unica).

## return
- **Que es**: es la palabra clave que le dice a la funcion "este es el resultado que devuelvo". Como el plato que pones en la ventana del comedor para que lo agarre quien pidio.
- **Cuando usarlo**: siempre que necesites que la funcion devuelva un valor. Si no hay `return`, la funcion devuelve `undefined` implicitamente.
- **Sintaxis**:
  ```js
  function clasificar(edad) {
    if (edad < 18) return "menor";
    if (edad < 65) return "adulto";
    return "jubilado";
  }
  ```
- **Errores comunes**:
  - Poner codigo despues de un `return` es codigo muerto: la funcion se corta ahi.
  - Olvidar `return` y despues intentar usar el resultado da `undefined`.
- **Buenas practicas**:
  - Podes tener varios `return` para cortar temprano, como salir de la fila cuando ya conseguiste lo que buscabas.

## hoisting
- **Que es**: las funciones declaradas con `function` se "elevan" al inicio del archivo, como si la receta ya estuviera pegada en la heladera antes de empezar a cocinar. Podes llamarlas antes de definirlas en el codigo.
- **Cuando usarlo**: no es algo que "elijas" usar, es un comportamiento automatico de las declaraciones de funcion. Es bueno saberlo para no sorprenderte.
- **Sintaxis**:
  ```js
  console.log(duplicar(4)); // funciona aunque duplicar se define despues
  function duplicar(x) {
    return x * 2;
  }
  ```
- **Errores comunes**:
  - Las arrow functions y las expresiones de funcion NO tienen hoisting. Si declaras `const doble = x => x * 2;` no podes llamar `doble(4)` antes de esa linea.
- **Buenas practicas**:
  - Aunqe el hoisting existe, es buena costumbre definir las funciones antes de usarlas para que el codigo sea mas legible.

## arrow functions
- **Que es**: son las funciones escritas con la flecha `=>`, la version cortita. Como la receta abreviada que escribe un chef apurado: menos palabras, mismo resultado.
- **Cuando usarla**: son ideales para callbacks (funciones que se pasan como dato a otra funcion, como `map`, `filter`, `forEach`) y para funciones cortas de una sola linea.
- **Sintaxis**:
  ```js
  const sumar = (a, b) => a + b;       // retorno implicito (sin return)
  const doble = x => x * 2;            // un solo parametro sin parentesis
  const mayor = (a, b) => {            // con llaves: return explicito
    if (a > b) return a;
    return b;
  };
  const sinParametros = () => "hola";  // sin parametros: parentesis vacio
  ```
- **Errores comunes**:
  - Con llaves `{}` necesitas `return` explicito. Sin llaves, el retorno es implicito.
  - Las arrows **no tienen su propio `this`** (lo heredan del contexto en el que viven). Eso se vera en clases y callbacks.
  - No tienen `arguments` (si lo necesitas, usa rest params `...args`).
- **Buenas practicas**:
  - Para funciones de una sola expresion, usa retorno implicito (sin llaves).
  - Para funciones con multiples pasos, usa llaves y `return` explicito.

## expresion de funcion
- **Que es**: es cuando guardas una funcion en una variable, como pegar la receta en un post-it con nombre. A diferencia de la declaracion, no tiene hoisting.
- **Cuando usarla**: cuando necesitas que una funcion sea valor de una variable, por ejemplo para pasarla como argumento o asignarla condicionalmente.
- **Sintaxis**:
  ```js
  const duplicar = function (x) {
    return x * 2;
  };
  ```
- **Errores comunes**:
  - No tiene hoisting: si llamas `duplicar(4)` antes de la asignacion, da error.
- **Buenas practicas**:
  - En la mayoria de los casos, preferi la declaracion de funcion o las arrow functions. La expresion de funcion es mas un concepto que conocer que algo que uses a diario.

## parametros por defecto
- **Que es**: son valores predefinidos que toma un parametro cuando no le pasan nada. Como el plan B de la receta: si no tenes el ingrediente, ya hay uno de reserva.
- **Cuando usarlo**: cuando queres que un parametro sea opcional sin que el usuario tenga que pasarlo siempre.
- **Sintaxis**:
  ```js
  function saludo(nombre = "Anonimo") {
    return `Hola, ${nombre}`;
  }
  saludo();        // "Hola, Anonimo"
  saludo("Ana");   // "Hola, Ana"
  ```
- **Errores comunes**:
  - Los parametros con valor por defecto deben ir al final. `function f(a = 1, b)` no funciona como esperas.
- **Buenas practicas**:
  - Usa valores por defecto que tengan sentido comun para tu funcion.

## rest parameters
- **Que es**: es cuando juntas todos los argumentos sobrantes en un array, como juntar todas las monedas que sobran en la bolsa. El `...` es el "recolector" de argumentos.
- **Cuando usarlo**: cuando no sabes cuantos argumentos te van a pasar, como una funcion que suma todos los numeros que le pongas sin importar cuantos sean.
- **Sintaxis**:
  ```js
  function sumarTodos(...numeros) {
    let total = 0;
    for (const n of numeros) total += n;
    return total;
  }
  sumarTodos(1, 2, 3, 4); // 10
  ```
- **Errores comunes**:
  - Solo puede haber un rest param y debe ser el ultimo parametro de la funcion.
- **Buenas practicas**:
  - Nombralo de forma clara que indique que es una coleccion: `...numeros`, `...items`, `...nombres`.

## arguments
- **Que es**: es un objeto especial (solo en funciones clasicas con `function`) que contiene todos los argumentos que le pasaron a la funcion, sin nombre. Como una bolsa sin etiquetas donde cayeron todos los ingredientes.
- **Cuando usarlo**: casi nunca. Los rest parameters (`...args`) son la version moderna y mas clara. Solo lo vas a encontrar en codigo antiguo.
- **Sintaxis**:
  ```js
  function cuantos() {
    return arguments.length;
  }
  cuantos(1, 2, 3); // 3
  ```
- **Errores comunes**:
  - `arguments` NO existe en arrow functions.
  - No es un array real (es un objeto array-like), asi que no tiene metodos como `map` o `filter` directamente.
- **Buenas practicas**:
  - Usa rest parameters (`...args`) en vez de `arguments`. Es mas limpio y funciona en todos los tipos de funcion.

## scope (alcance)
- **Que es**: es hasta donde llega a vivir una variable, como el radio de la mochila: lo que metes adentro se queda ahi. Define que variables estan disponibles en cada parte del codigo.
- **Cuando usarlo**: no es algo que "elijas", es un concepto que debes entender para saber por que una variable no se ve desde cierto lugar o por que un valor no es el que esperabas.
- **Sintaxis**:
  ```js
  let global = "se ve en todo";

  function ejemplo() {
    let local = "solo dentro de la funcion";
    console.log(global);  // OK
    console.log(local);   // OK
  }
  ejemplo();
  // console.log(local); // ERROR: no existe aca afuera
  ```
- **Errores comunes**:
  - `var` escapa del bloque `{}`, por eso puede causar bugs inesperados.
  - `let` y `const` son de bloque: viven solo dentro de las llaves donde se declararon.
- **Buenas practicas**:
  - Usa `const` por defecto. Usa `let` solo cuando necesites reasignar. Nunca uses `var`.

## shadowing
- **Que es**: es cuando una variable local "tapza" a una global con el mismo nombre, como cuando el nombre de tu compañero de banco tapa al del registro. La local se usa dentro de su ambito y la global se usa fuera.
- **Cuando usarlo**: no es algo que debas buscar hacer. Es un comportamiento del scope que debes entender para evitar confusiones.
- **Sintaxis**:
  ```js
  let mensaje = "global";
  function otra() {
    let mensaje = "local";
    console.log(mensaje); // "local" (la local tapa a la global)
  }
  otra();
  console.log(mensaje); // "global" (la global sigue intacta afuera)
  ```
- **Errores comunes**:
  - Creer que la variable local cambio la global. Solo la tapa temporalmente dentro de su ambito.
- **Buenas practicas**:
  - Evita usar el mismo nombre de variable en ambitos anidados para que el codigo sea mas claro.

---

## Ejemplos

| Archivo | Tema |
|---|---|
| `ejemplos/01-declaracion.js` | Declaracion, hoisting, return |
| `ejemplos/02-arrow.js` | Arrow functions |
| `ejemplos/03-parametros.js` | Parametros por defecto, rest, arguments |
| `ejemplos/04-scope.js` | Scope y shadowing |

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-operaciones.js` | Calculadora basica: sumar/restar/multiplicar/dividir |
| `ejercicios/ej-02-esPar.js` | esPar: decidir si un numero es par |
| `ejercicios/ej-03-factorial.js` | Factorial recursivo: la funcion que se llama a si misma |
| `ejercicios/ej-04-maximo.js` | Maximo con rest params: el mas grande de todos |
| `ejercicios/ej-05-palindromo.js` | Palindromo: la palabra que se lee igual al derecho y al reves |
