# Modulo 02 — Control de flujo

---

## if / else / else if

**Que es**: Una decision del programa segun una condicion. Como cuando miras el reloj y decides que hacer: si son las 7 sales a correr, si son las 12 comes, si no, sigues estudiando.

**Cuando usarlo**: Cuando necesitas que el código tome un camino u otro segun si algo es verdadero o falso. Siempre se evalua de arriba hacia abajo: la primera condición que se cumple ejecuta su bloque y el resto se salta.

**Sintaxis**: `if (condicion) { ... } else if (otra) { ... } { ... }`

**Ejemplo**:
```javascript
const hora = 14;

if (hora < 12) {
  console.log('Buenos dias');
} else if (hora < 18) {
  console.log('Buenas tardes');
} else {
  console.log('Buenas noches');
}
// Salida: Buenos tardes
```

**Condicion simple**:
```javascript
const edad = 20;
if (edad >= 18) {
  console.log('Mayor de edad');
}
// Salida: Mayor de edad
```

**Con operadores logicos**:
```javascript
const usuario = 'ana';
const pass = 'clave123';
if (usuario !== '' && pass.length >= 8) {
  console.log('Login valido');
}
// Salida: Login valido
```

**Errores comunes**:
- Olvidar las llaves `{}`: funciona en una sola línea pero es frágil y difícil de mantener.
- Usar `=` en vez de `===`: un solo igual asigna, triple igual compara.
- No cerrar el último `else if` antes del `else`.

**Buenas practicas**:
- Siempre usar llaves, aunque el bloque tenga una sola línea.
- Ordenar las condiciones de mayor a menor (o de más restrictiva a menos) para que el orden no genere bugs.
- No anidar más de 3 niveles: si necesitas más, considera un switch o reestructurar la lógica.

---

## switch

**Que es**: Una forma de comparar un mismo valor contra varias opciones, como un tablero de casilleros donde vas al que coincide con lo que buscas.

**Cuando usarlo**: Cuando comparas una variable contra múltiples valores concretos (strings, números). Es más prolijo que encadenar muchos `else if` cuando todos comparan la misma variable.

**Sintaxis**: `switch (valor) { case 'opcion1': ... break; default: ... }`

**Ejemplo**:
```javascript
const dia = 'martes';
let actividad;

switch (dia) {
  case 'lunes':
    actividad = 'Arrancar la semana';
    break;
  case 'martes':
  case 'jueves':
    actividad = 'Entrenar';      // martes y jueves comparten case
    break;
  case 'viernes':
    actividad = 'Salir';
    break;
  default:
    actividad = 'Descansar';
}

console.log(actividad); // Entrenar
```

**Fall-through sin break**:
```javascript
let mensaje;
switch ('a') {
  case 'a':
    mensaje = 'primero';
  case 'b':
    mensaje += ' y segundo'; // se ejecutó sin break (el flujo siguió de largo)
}
console.log(mensaje); // primero y segundo
```

**Errores comunes**:
- Olvidar `break`: el flujo "se cae" al siguiente case y ejecuta todo lo que sigue sin importar si coincide o no.
- Olvidar el `default`: no es obligatorio pero ayuda a manejar casos inesperados.
- Usar `switch` con rangos: switch solo compara igualdad exacta, no rangos como `> 10`.

**Buenas practicas**:
- Siempre poner `break` al final de cada case (salvo que quieras el "fall-through" intencional).
- Usar `default` para el caso por defecto, así no queden huecos.
- Si los cases son rangos, es mejor usar `if / else if`.

---

## ternario

**Que es**: Un `if / else` condensado en una sola línea que devuelve un valor. Como elegir entre dos caminos con una moneda: si sale cara vas a uno, si sale cruz vas al otro.

**Cuando usarlo**: Cuando necesitas asignar un valor según una condición y el resultado es simple (una variable, un string, un número). No lo uses para lógica compleja con múltiples operaciones.

**Sintaxis**: `condicion ? valorSiVerdadero : valorSiFalso`

**Ejemplo**:
```javascript
const edad = 17;
const puedeVotar = edad >= 16 ? 'si' : 'no';
console.log(`Puede votar? ${puedeVotar}`); // Puede votar? si
```

**Usando dentro de template literal**:
```javascript
const clima = 'lluvia';
console.log(`Hoy ${clima === 'lluvia' ? 'lleva paraguas' : 'no hace falta paraguas'}`);
// Salida: Hoy lleva paraguas
```

**Anidando ternarios**:
```javascript
const nota = 8;
const estado = nota >= 7 ? 'aprobado' : nota >= 4 ? 'a recuperatorio' : 'desaprobado';
console.log(estado); // aprobado
```

**Errores comunes**:
- Anidar ternarios: se vuelve ilegible muy rápido. Si necesitas más de un nivel, usa `if / else if`.
- Olvidar el dos puntos `:` que separa las dos opciones.
- Usarlo donde no necesitas un valor (por ejemplo, solo para ejecutar console.log): ahí mejor usa un `if`.

**Buenas practicas**:
- Usarlo solo para asignaciones simples: `const x = condicion ? a : b;`
- Si la expresión ocupa más de una línea, es mejor un `if / else`.
- No meter efectos secundarios (console.log, etc.) dentro de un ternario.

---

## valores falsos y verdaderos

**Que es**: En JavaScript, algunos valores se comportan como `false` cuando los pones en un contexto booleano. Son falsos: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Todo lo demás se comporta como `true`, incluidos `[]`, `{}` y `-1`. Es como la mochila: si está vacía (falso) no hay nada, pero si tiene aunque sea un lápiz (verdadero), hay algo.

**Cuando usarlo**: Para simplificar condiciones. En vez de escribir `if (nombre !== '' && nombre !== null && nombre !== undefined)`, puedes escribir `if (nombre)` porque un string vacío y `null`/`undefined` son falsos.

**Ejemplo**:
```javascript
const valores = [0, '', 'hola', null, undefined, NaN, [], {}, -1];

for (const v of valores) {
  console.log(v, v ? '-> se comporta como verdadero' : '-> se comporta como falso');
}
```

**Uso practico con `||`**:
```javascript
const nombre = '' || 'Anonimo';
console.log(nombre); // Anonimo
```

**Fallback típico**:
```javascript
const prefijo = undefined || 'sin prefijo';
console.log(prefijo); // sin prefijo
```

**Uso practico con `&&`**:
```javascript
console.log(true && 'resultado');  // resultado
console.log('a' && '' && 'c');     // '' (primer falso: se frena en el vacío)
```

**Errores comunes**:
- Confundir `0` con `falso`: `0` es falsy, pero `0` sigue siendo un número válido en otros contextos.
- Creer que `[]` y `{}` son falsy: no lo son, se comportan como verdadero.
- Olvidar que `""` (string vacío) es falsy pero `"0"` (string con un cero) es verdadero.

**Buenas practicas**:
- Usar `=== null` o `=== undefined` explícitamente cuando necesitas distinguir entre ellos.
- Conocer la lista de falsy values de memoria: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
- No abusar: a veces es más claro escribir la condición completa para que el código sea legible.

---

## operador logico && y || (short-circuit)

**Que es**: `&&` y `||` no solo devuelven `true` o `false`: devuelven el valor que determinó el resultado. `||` devuelve el primer valor verdadero (como un plan B). `&&` devuelve el primer valor falso, o el último si todos son verdaderos (como una cadena donde el eslabón más débil rompe todo).

**Cuando usarlo**:
- `||` para poner valores por defecto: `const nombre = usuario || 'Anonimo';`
- `&&` para ejecutar algo solo si una condición se cumple: `if (activo && edad > 18) { ... }`

**Ejemplo con `||`**:
```javascript
const nombre = '' || 'Anonimo';
console.log(nombre); // Anonimo
```

**Ejemplo con `&&`**:
```javascript
console.log(true && 'resultado');  // resultado
console.log('a' && '' && 'c');     // '' (primer falso)
```

**Short-circuit con `&&`**:
```javascript
if (numero % 2 === 0 && console.log('es par')) {
  // Esto imprime solo si el número es par
}
```

**Errores comunes**:
- Olvidar que `||` devuelve el primer verdadero, no un booleano: `0 || 'hola'` devuelve `'hola'`, no `true`.
- Olvidar que `&&` se frena en el primer falso: `'a' && '' && 'c'` devuelve `''`, no `false`.
- Usar `||` para valores por defecto cuando `0` es un valor válido: `const precio = precioInput || 10` convierte `0` en `10`.

**Buenas practicas**:
- Entender que ambos operadores son "de cortocircuito": no evalúan el segundo operando si no es necesario.
- Usar `??` (nullish coalescing) en vez de `||` cuando solo quieres cubrir `null` y `undefined`, no todos los falsy values.

---

## for

**Que es**: Un bucle que repite un bloque de código un número determinado de veces, como dar vueltas alrededor de una manzana contando cada vuelta.

**Cuando usarlo**: Cuando sabes exactamente cuántas veces quieres repetir algo: contar de 1 a N, etc.

**Sintaxis**: `for (let i = 0; i < N; i++) { ... }`

**Ejemplo**:
```javascript
for (let i = 1; i <= 5; i++) {
  console.log('i =', i);
}
// Salida: i = 1, i = 2, i = 3, i = 4, i = 5
```

**Errores comunes**:
- Empezar en 0 y llegar a `< array.length` (recorre todos los índices) vs `<= array.length` (se pasa uno).
- No declarar la variable con `let` dentro del for: si declaras afuera, puede interferir con otros bucles.
- Olvidar el incremento `i++`: genera un bucle infinito.

**Buenas practicas**:
- Usar `let` dentro de `for` para que la variable solo exista dentro del bucle.
- Evitar variables globales como contador: decláralas dentro del for.

---

## while

**Que es**: Un bucle que repite mientras una condición sea verdadera, como seguir caminando mientras haya cuadras por delante.

**Cuando usarlo**: Cuando no sabes cuántas veces vas a repetir, pero si sabes la condición de parada: esperar una respuesta, etc.

**Sintaxis**: `while (condicion) { ... }`

**Ejemplo**:
```javascript
let n = 0;
while (n < 3) {
  console.log('n =', n);
  n++;
}
// Salida: n = 0, n = 1, n = 2
```

**Errores comunes**:
- No actualizar la variable que controla la condición: genera un bucle infinito que bloquea el programa.
- Poner la condición al revés: ejecuta 0 veces en vez de todas las que debía.

**Buenas practicas**:
- Siempre asegurarte de que la variable de control se modifique dentro del bucle.
- Usar un contador o un flag para controlar el fin del bucle.
- Si el bucle puede no ejecutarse nunca, considera si `do...while` es mejor.

---

## do...while

**Que es**: Un while que garantiza al menos una ejecución, como probar la sopa antes de decidir si sigues comiendo.

**Cuando usarlo**: Cuando necesitas que el código se ejecute al menos una vez, como pedir un dato al usuario y validar después, o mostrar un menú antes de procesar una opción.

**Sintaxis**: `do { ... } while (condicion);`

**Ejemplo**:
```javascript
let m = 10;
do {
  console.log('m =', m);
  m++;
} while (m < 3); // la condición es falsa pero igual corrió una vez
// Salida: m = 10
```

**Errores comunes**:
- Olvidar el punto y coma `;` después de `while (condicion)`: en un `while` normal no hace falta, pero en `do...while` sí.
- Confundirlo con `while`: la diferencia es que `do...while` siempre ejecuta una vez antes de verificar.

**Buenas practicas**:
- Usalo cuando el "al menos una vez" es un requisito real, no por costumbre.
- Asegurar que la condición de salida eventualmente se cumpla para evitar bucles infinitos.

---

## break y continue

**Que es**:
- `break` corta el bucle inmediatamente y sale de él, como frenar de golpe un auto.
- `continue` salta a la siguiente iteración sin ejecutar el resto del código del bucle, como saltarte una canción en la playlist.

**Cuando usarlo**:
- `continue` cuando quieres omitir un caso específico: saltar un número, ignorar un valor inválido, etc.
- `break` cuando encontraste lo que buscabas y no tiene sentido seguir recorriendo, o para salir de un bucle infinito controlado.

**Ejemplo con continue**:
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;  // saltea el 3
  console.log(i);
}
// Salida: 1 2 4 5 6 7 8 9 10
```

**Ejemplo con break**:
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;     // corta en el 6
  console.log(i);
}
// Salida: 1 2 3 4 5
```

**Errores comunes**:
- Usar `break` o `continue` fuera de un bucle o switch: genera error.
- Olvidar que `continue` en un `for` saltaría el incremento si estuviera después del cuerpo (en JS no aplica porque `i++` va antes, pero en otros lenguajes sí).
- Usar `break` donde sería mejor reestructurar la condición del bucle.

**Buenas practicas**:
- Usar `continue` para reducir el anidamiento de if dentro de un bucle.
- Usar `break` con moderación: un bucle con muchos `break` es difícil de razonar.
- En un switch, siempre usar `break` salvo que el fall-through sea intencional y esté documentado.

---

## Ejercicios

### ej-01-nota.js — Nota a concepto
De la nota a un concepto con palabras, como la libreta del colegio.

Paso a paso:
1) Usar un `if / else if / else` para decidir qué concepto corresponde.
2) Crear una variable "aprobado" con un ternario: si `nota >= 4` guarda `true`, si no guarda `false`.

Resultado esperado con `nota = 10`:
```
10 -> Excelente
Ternario: esta aprobado
```

---

### ej-02-fizzbuzz.js — FizzBuzz
El clásico de las entrevistas, pero aca lo hacemos para aprender a usar el bucle.

Paso a paso:
1) Usar un bucle `for` para recorrer los números del 1 al 20.
2) Para cada número, imprimir:
   - Si es múltiplo de 3: "Fizz"
   - Si es múltiplo de 5: "Buzz"
   - Si es múltiplo de ambos: "FizzBuzz"
   - Si no es múltiplo de ninguno: el número en sí.

Resultado esperado:
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Primer par: 2
```

---

### ej-03-switch-dias.js — Switch de días
Observa el día y elige el plan, como mirar el calendario antes de armar la semana.

Paso a paso:
1) Escribir un `switch` que revise la variable `dia` y asigne el plan según el día:
   - Lunes a viernes → "Dia de trabajo"
   - Sábado → "Dormir hasta tarde"
   - Domingo → "Comer asado"
   - Otro día → "Dia invalido" (default)
2) Recuerdar el `break` después de cada `case`.

Resultado esperado con `dia = 'sabado'`:
```
sabado -> Dormir hasta tarde
Tipo: fin de semana
```

---

### ej-04-edad.js — Clasificar edad
Como en la entrada de un espectáculo, clasificamos según la edad: cada rango de edad tiene su categoría.

Paso a paso:
1) Usar `if / else if` para clasificar la edad en un rango:
   - 0-12 → "Nino/a"
   - 13-19 → "Adolescente"
   - 20-59 → "Adulto"
   - 60+ → "Adulto mayor"
2) Crear una variable "pagaEntrada" con un ternario: si `edad >= 12` guarda 'entrada completa', si no guarda 'entrada reducida'.

Resultado esperado con `edad = 30`:
```
30 -> Adulto
Paga entrada completa
```

---

### ej-05-login.js — Validación compuesta
Aca tienes que revisar varias condiciones juntas antes de abrir la puerta, como el portero que mira el pase y también la hora.

Paso a paso:
1) Armar UNA condición con `&&` que junte las tres reglas.
2) Con `if` imprimir "Acceso permitido", y con `else` "Acceso denegado".
3) Crear una variable "mensaje" con un ternario que identifique combos débiles.

Resultado esperado con `usuario = 'ana', password = 'clave1234'`:
```
Acceso permitido
ana
```

---

## Proyecto

### Adivina el número

**Consigna**: Crear un juego "Adivina el número" donde el programa tiene un número secreto y el intento del usuario está hardcodeado. El programa compara ambos y responde si es mayor, menor o correcto.

Esto integra: condicionales if/else, comparaciones, operadores lógicos (`&&`), y el operador ternario.

**Requisitos**:
1) Definir un `numeroSecreto` (por ejemplo 7).
2) Definir un `intento` (por ejemplo 5).
3) Usar `if / else if / else` para comparar:
   - Si el intento es igual al secreto: "Correcto!"
   - Si el intento es menor: "El numero es mayor"
   - Si el intento es mayor: "El numero es menor"
4) Usar un ternario para guardar en una variable `resultado` el texto "acierto" o "fallo".
5) Usar un operador `&&` (short-circuit) para imprimir un mensaje extra solo si el intento es par: "Tu intento era par".

**Resultado esperado con `numeroSecreto = 7, intento = 5`**:
```
Tu numero: 5
El numero es mayor
Tu intento era par
Resultado: fallo
```

**Resultado esperado con `numeroSecreto = 7, intento = 7`**:
```
Tu numero: 7
Correcto!
Tu intento era impar
Resultado: acierto
```

**Resultado esperado con `numeroSecreto = 7, intento = 9`**:
```
Tu numero: 9
El numero es menor
Tu intento era impar
Resultado: fallo
```
