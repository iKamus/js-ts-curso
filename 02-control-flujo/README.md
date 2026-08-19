# Modulo 02 — Control de flujo

## Como correr

Desde la carpeta del modulo, ejecuta con `node`:

```bash
node ejemplos/01-if-else.js
node ejercicios/ej-01-nota.js
```

---

## if / else / else if
- **Que es**: Unadecision del programa segun una condicion. Como cuando miras el reloj y decidis que hacer: si son las 7 salis a correr, si son las 12 comes, si no, seguis estudiando.
- **Cuando usarlo**: Cuando necesitas que el codigo tome un camino u otro segun si algo es verdadero o falso. Siempre se evalua de arriba hacia abajo: la primera condicion que se cumple ejecuta su bloque y el resto se salta.
- **Sintaxis**: `if (condicion) { ... } else if (otra) { ... } { ... }`
- **Metodos/funciones internos**: no aplica (es una estructura de control, no un objeto con metodos).
- **Errores comunes**:
  - Olvidar las llaves `{}`: funciona en una sola linea pero es fragile y dificil de mantener.
  - Usar `=` en vez de `===`: un solo igual asigna, triple igual compara.
  - No cerrar el ultimo `else if` antes del `else`.
- **Buenas practicas**:
  - Siempre usar llaves, aunque el bloque tenga una sola linea.
  - Ordenar las condiciones de mayor a menor (o de mas restrictiva a menos) para que el orden no genere bugs.
  - No anidar mas de 3 niveles: si necesitas mas, considera un switch o reestructurar la logica.

---

## switch
- **Que es**: Una forma de comparar un mismo valor contra varias opciones, como un tablero de casilleros donde vas al que coincide con lo que buscas.
- **Cuando usarlo**: Cuando comparas una variable contra multiples valores concretos (strings, numeros). Es mas prolijo que encadenar muchos `else if` cuando todos comparan la misma variable.
- **Sintaxis**: `switch (valor) { case 'opcion1': ... break; default: ... }`
- **Metodos/funciones internos**: no aplica.
- **Errores comunes**:
  - Olvidar `break`: el flujo "se cae" al siguiente case y ejecuta todo lo que sigue sin importar si coincide o no.
  - Olvidar el `default`: no es obligatorio pero ayuda a manejar casos inesperados.
  - Usar `switch` con rangos: switch solo compara igualdad exacta, no rangos como `> 10`.
- **Buenas practicas**:
  - Siempre poner `break` al final de cada case (salvo que quieras el "fall-through" intencional).
  - Usar `default` para el caso por defecto, asi no quedan huecos.
  - Si los cases son rangos, es mejor usar `if / else if`.

---

## ternario
- **Que es**: Un `if / else` condensado en una sola linea que devuelve un valor. Como elegir entre dos caminos con una moneda: si sale cara vas a uno, si sale cruz vas al otro.
- **Cuando usarlo**: Cuando necesitas asignar un valor segun una condicion y el resultado es simple (una variable, un string, un numero). No lo uses para logica compleja con multiples operaciones.
- **Sintaxis**: `condicion ? valorSiVerdadero : valorSiFalso`
- **Metodos/funciones internos**: no aplica.
- **Errores comunes**:
  - Anidar ternarios: se vuelve ilegible muy rapido. Si necesitas mas de un nivel, usa `if / else if`.
  - Olvidar el dos puntos `:` que separa las dos opciones.
  - Usarlo donde no necesitas un valor (por ejemplo, solo para ejecutar console.log): ahi mejor usa un `if`.
- **Buenas practicas**:
  - Usarlo solo para asignaciones simples: `const x = condicion ? a : b;`
  - Si la expresion ocupa mas de una linea, es mejor un `if / else`.
  - No meter efectos secundarios (console.log, etc.) dentro de un ternario.

---

## valores falsos y verdaderos
- **Que es**: En JavaScript, algunos valores se comportan como `false` cuando los pones en un contexto booleano. Son falsos: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Todo lo demas se comporta como `true`, incluidos `[]`, `{}` y `-1`. Es como la mochila: si esta vacia (falso) no hay nada, pero si tiene aunque sea un lapiz (verdadero), hay algo.
- **Cuando usarlo**: Para simplificar condiciones. En vez de escribir `if (nombre !== '' && nombre !== null && nombre !== undefined)`, puedes escribir `if (nombre)` porque un string vacio y `null`/`undefined` son falsos.
- **Sintaxis**: `if (valor) { ... }` — el valor se evalua como booleano.
- **Metodos/funciones internos**: no aplica (es un comportamiento del lenguaje).
- **Errores comunes**:
  - Confundir `0` con `falso`: `0` es falsy, pero `0` sigue siendo un numero valido en otros contextos.
  - Creer que `[]` y `{}` son falsy: no lo son, se comportan como verdadero.
  - Olvidar que `""` (string vacio) es falsy pero `"0"` (string con un cero) es verdadero.
- **Buenas practicas**:
  - Usar `=== null` o `=== undefined` explicitamente cuando necesitas distinguir entre ellos.
  - Conocer la lista de falsy values de memoria: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
  - No abusar: a veces es mas claro escribir la condicion completa para que el codigo sea legible.

---

## operador logico && y || (short-circuit)
- **Que es**: `&&` y `||` no solo devuelven `true` o `false`: devuelven el valor que determino el resultado. `||` devuelve el primer valor verdadero (como un plan B). `&&` devuelve el primer valor falso, o el ultimo si todos son verdaderos (como una cadena donde el eslabon mas debil rompe todo).
- **Cuando usarlo**:
  - `||` para poner valores por defecto: `const nombre = usuario || 'Anonimo';`
  - `&&` para ejecutar algo solo si una condicion se cumple: `if (activo && edad > 18) { ... }`
- **Sintaxis**: `valorA || valorB` / `valorA && valorB`
- **Metodos/funciones internos**: no aplica (son operadores del lenguaje).
- **Errores comunes**:
  - Olvidar que `||` devuelve el primer verdadero, no un booleano: `0 || 'hola'` devuelve `'hola'`, no `true`.
  - Olvidar que `&&` se frena en el primer falso: `'a' && '' && 'c'` devuelve `''`, no `false`.
  - Usar `||` para valores por defecto cuando `0` es un valor valido: `const precio = precioInput || 10` convierte `0` en `10`.
- **Buenas practicas**:
  - Entender que ambos operadores son "de cortocircuito": no evaluan el segundo operando si no es necesario.
  - Usar `??` (nullish coalescing) en vez de `||` cuando solo quieres cubrir `null` y `undefined`, no todos los falsy values.

---

## for
- **Que es**: Un bucle que repite un bloque de codigo un numero determinado de veces, como dar vueltas alrededor de una manzana contando cada vuelta.
- **Cuando usarlo**: Cuando sabes exactamente cuantas veces quieres repetir algo: recorrer un array, contar de 1 a N, etc.
- **Sintaxis**: `for (let i = 0; i < N; i++) { ... }`
- **Metodos/funciones internos**: no aplica.
- **Errores comunes**:
  - Empezar en 0 y llegar a `< array.length` (recorre todos los indices) vs `<= array.length` (se pasa uno).
  - No declarar la variable con `let` dentro del for: si declaras afuera, puede interferir con otros bucles.
  - Olvidar el incremento `i++`: genera un bucle infinito.
- **Buenas practicas**:
  - Usar `let` dentro de `for` para que la variable solo exista dentro del bucle.
  - Si recorres un array, usa `for...of` en vez de un for clasico: es mas legible.
  - Evitar variables globales como contador: declarelas dentro del for.

---

## while
- **Que es**: Un bucle que repite mientras una condicion sea verdadera, como seguir caminando mientras haya cuadras por delante.
- **Cuando usarlo**: Cuando no sabes cuantas veces vas a repetir, pero si sabes la condicion de parada: leer un archivo linea por linea, esperar una respuesta del usuario, etc.
- **Sintaxis**: `while (condicion) { ... }`
- **Metodos/funciones internos**: no aplica.
- **Errores comunes**:
  - No actualizar la variable que controla la condicion: genera un bucle infinito que bloquea el programa.
  - Poner la condicion al reves: ejecuta 0 veces en vez de todas las que debia.
- **Buenas practicas**:
  - Siempre asegurarte de que la variable de control se modifique dentro del bucle.
  - Usar un contador o un flag para controlar el fin del bucle.
  - Si el bucle puede no ejecutarse nunca, considera si `do...while` es mejor.

---

## do...while
- **Que es**: Un while que garantiza al menos una ejecucion, como probar la sopa antes de decidir si sigues comiendo.
- **Cuando usarlo**: Cuando necesitas que el codigo se ejecute al menos una vez, como pedir un dato al usuario y validar despues, o mostrar un menu antes de procesar una opcion.
- **Sintaxis**: `do { ... } while (condicion);`
- **Metodos/funciones internos**: no aplica.
- **Errores comunes**:
  - Olvidar el punto y coma `;` despues de `while (condicion)`: en un `while` normal no hace falta, pero en `do...while` si.
  - Confundirlo con `while`: la diferencia es que `do...while` siempre ejecuta una vez antes de verificar.
- **Buenas practicas**:
  - Usalo cuando el "al menos una vez" es un requisito real, no por costumbre.
  - Asegurar que la condicion de salida eventualmente se cumpla para evitar bucles infinitos.

---

## break y continue
- **Que es**:
  - `break` corta el bucle inmediatamente y sale de el, como frenar de golpe un auto.
  - `continue` salta a la siguiente iteracion sin ejecutar el resto del codigo del bucle, como saltarte una cancion en la playlist.
- **Cuando usarlo**:
  - `continue` cuando quieres omitir un caso especifico: saltar un numero, ignorar un valor invalido, etc.
  - `break` cuando encontraste lo que buscabas y no tiene sentido seguir recorriendo, o para salir de un bucle infinito controlado.
- **Sintaxis**: `break;` / `continue;` — se usan dentro de un bucle o un switch.
- **Metodos/funciones internos**: no aplica.
- **Errores comunes**:
  - Usar `break` o `continue` fuera de un bucle o switch: genera error.
  - Olvidar que `continue` en un `for` saltaria el incremento si estuviera despues del cuerpo (en JS no aplica porque `i++` va antes, pero en otros lenguajes si).
  - Usar `break` donde seria mejor reestructurar la condicion del bucle.
- **Buenas practicas**:
  - Usar `continue` para reducir el anidamiento de if dentro de un bucle.
  - Usar `break` con moderacion: un bucle con muchos `break` es dificil de razonar.
  - En un switch, siempre usar `break` salvo que el fall-through sea intencional y este documentado.

---

## Ejemplos

| Archivo | Tema |
|---|---|
| `ejemplos/01-if-else.js` | condicionales if / else if / else |
| `ejemplos/02-switch.js` | switch y fall-through |
| `ejemplos/03-ternario.js` | operador ternario |
| `ejemplos/04-valores-booleanos.js` | valores falsos y verdaderos, `\|\|` / `&&` |
| `ejemplos/05-bucles.js` | for / while / do...while / break / continue |

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-nota.js` | De la nota a un concepto, como la libreta del cole |
| `ejercicios/ej-02-fizzbuzz.js` | FizzBuzz, el clasico de las entrevistas |
| `ejercicios/ej-03-switch-dias.js` | Dias de la semana y sus planes |
| `ejercicios/ej-04-edad.js` | Clasificar por edad, como elegir la entrada segun la categoria |
| `ejercicios/ej-05-login.js` | Validacion compuesta, como revisar varias condiciones antes de abrir la puerta |
