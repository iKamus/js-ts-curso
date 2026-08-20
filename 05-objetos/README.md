# Módulo 05 — Objetos

---

## objeto literal
- **Qué es**: una estructura que guarda pares clave-valor, como una ficha del cuaderno con casillas etiquetadas. Cada casilla tiene un nombre (la clave) y un dato adentro (el valor).
- **Cuándo usarlo**: cuando necesitas agrupar datos relacionados en un solo lugar. En vez de tener variables sueltas (`nombreAna`, `edadAna`, `ciudadAna`), juntas todo en un objeto `persona`.
- **Sintaxis**: llaves `{}` con pares `clave: valor`, separados por coma.
  ```js
  const persona = { nombre: 'Ana', edad: 30 };
  ```
- **Métodos/funciones internos**: no tiene métodos propios; es la forma de crear objetos. Las claves son strings (o símbolos), los valores pueden ser cualquier cosa: primitivos, arrays, otros objetos, funciones.
- **Errores comunes**:
  - Olvidar las comas entre pares: `{ nombre: 'Ana' edad: 30 }` → error de sintaxis.
  - Confundir claves con espacios: `'ciudad natal': 'Córdoba'` solo se accede con corchete, no con punto.
- **Buenas prácticas**:
  - Usar short syntax cuando la variable se llama igual que la clave: `{ nombre, edad }` en vez de `{ nombre: nombre, edad: edad }`.
  - No poner comas después del último par (trailing comma) si el estilo del proyecto no lo usa.

---

## acceso (punto y corchete)
- **Qué es**: dos formas de leer (o escribir) el valor de una propiedad de un objeto. El punto es directo; el corchete usa un string como llave.
- **Cuándo usarlo**: el punto (`obj.propiedad`) para claves conocidas y simples. El corchete (`obj['propiedad']`) para claves con espacios, caracteres raros, o cuando la clave viene en una variable.
- **Sintaxis**:
  ```js
  persona.nombre;         // punto
  persona['edad'];        // corchete
  persona[miVariable];    // corchete con variable
  ```
- **Métodos/funciones internos**: no aplica. Es acceso directo.
- **Errores comunes**:
  - `persona.nombre` si `nombre` no existe → `undefined` (no tira error, solo da undefined).
  - `persona.ciudad natal` → error de sintaxis; hay que usar corchete: `persona['ciudad natal']`.
- **Buenas prácticas**:
  - Usar punto siempre que se pueda; es más legible.
  - Usar corchete solo cuando es necesario (clave dinámica o con caracteres especiales).

---

## mutar (agregar / modificar / borrar)
- **Qué es**: cambiar el contenido de un objeto: agregar una casilla nueva, modificar el valor de una existente, o borrar una.
- **Cuándo usarlo**: cuando el objeto ya existe y necesitas actualizarlo.
- **Sintaxis**:
  ```js
  persona.profesion = 'Ingeniera';   // agregar
  persona.edad = 31;                 // modificar
  delete persona.ciudad;             // borrar
  ```
- **Métodos/funciones internos**: el operador `delete` elimina una propiedad. No hay métodos especiales; se escribe directo.
- **Errores comunes**:
  - `delete` no funciona en propiedades declaradas con `const` del objeto (pero sí en el objeto en sí). En modo estricto puede dar error.
  - Borrar una propiedad que no existe no tira error; simplemente no hace nada.
- **Buenas prácticas**:
  - Mutar está bien en muchísimos casos. No hace falta crear un objeto nuevo cada vez que cambias algo, a menos que estés trabajando con inmutabilidad (React, etc.).
  - Si el objeto es `Object.freeze()`, las mutaciones silenciosamente no hacen nada (en modo estricto tiran error).

---

## clave dinámica
- **Qué es**: usar una variable como nombre de propiedad. En vez de escribir el string fijo, la clave se calcula en tiempo de ejecución.
- **Cuándo usarlo**: cuando el nombre de la propiedad no se conoce de antemano: viene de un input, un array, o se construye con lógica.
- **Sintaxis**:
  ```js
  const clave = 'dni';
  const info = { [clave]: '12.345.678' };  // { dni: '12.345.678' }

  // también para mutar
  const campo = 'email';
  usuario[campo] = 'ana@mail.com';
  ```
- **Métodos/funciones internos**: no aplica. Es sintaxis del lenguaje.
- **Errores comunes**:
  - Olvidar los corchetes: `info.clave` busca la propiedad literal "clave", no el valor de la variable `clave`.
  - Usar corchetes donde no hace falta: `info['dni']` es lo mismo que `info.dni` cuando la clave es fija.
- **Buenas prácticas**:
  - Usar corchetes con variable solo cuando es necesario. Para claves fijas, preferir el punto.
  - La clave dinámica en la creación del objeto (`{ [variable]: valor }`) es una feature de ES6.

---

## métodos y this
- **Qué es**: un método es una función que vive dentro de un objeto. `this` es una referencia al objeto que está ejecutando ese método.
- **Cuándo usarlo**: cuando el objeto necesita "hacer algo" con sus propios datos. Ejemplo: un contador que se incrementa a sí mismo.
- **Sintaxis**:
  ```js
  const contador = {
    valor: 0,
    incrementar() { this.valor++; },
    ver() { return this.valor; },
  };
  ```
- **Métodos/funciones internos**: `this` dentro de un método apunta al objeto que lo llama. Esto depende de cómo se invoca el método, no de dónde está escrito.
- **Errores comunes**:
  - Usar arrow function como método: `incrementar: () => { this.valor++; }` → `this` NO es el objeto, sino el `this` del scope exterior (probablemente `undefined` o `global`).
  - Llamar al método desde una variable suelta: `const fn = contador.incrementar; fn();` → `this` pierde la referencia al objeto.
- **Buenas prácticas**:
  - Siempre usar sintaxis corta de método (`metodo() {}`) o `function` clásica, nunca arrow, para métodos de objeto.
  - Si necesitas pasar un método como callback, usar `bind`: `contador.incrementar.bind(contador)`.

---

## Object.keys / values / entries
- **Qué es**: tres funciones estáticas de `Object` que "abren" un objeto y devuelven sus datos en formato array.
- **Cuándo usarlo**: cuando necesitas recorrer un objeto o transformarlo en array para usar métodos de array (map, filter, reduce).
- **Sintaxis**:
  ```js
  const obj = { a: 1, b: 2 };
  Object.keys(obj);     // ['a', 'b']
  Object.values(obj);   // [1, 2]
  Object.entries(obj);  // [['a', 1], ['b', 2]]
  ```
- **Métodos/funciones internos**:

  | Método | Qué devuelve | Ejemplo | Resultado |
  |---|---|---|---|
  | `Object.keys(obj)` | Array de claves | `Object.keys({x:1,y:2})` | `['x','y']` |
  | `Object.values(obj)` | Array de valores | `Object.values({x:1,y:2})` | `[1,2]` |
  | `Object.entries(obj)` | Array de pares `[clave, valor]` | `Object.entries({x:1,y:2})` | `[['x',1],['y',2]]` |

- **Errores comunes**:
  - Olvidar que devuelven arrays: `Object.keys(obj).length` funciona, pero `Object.keys(obj)[0]` es un string, no un objeto.
  - Con `Object.entries`, desestructurar mal: `for (const [clave, valor] of Object.entries(obj))` funciona; `for (const par of Object.entries(obj))` te da el par completo.
- **Buenas prácticas**:
  - Usar `Object.entries` cuando necesitas tanto clave como valor en un loop.
  - Para sumar valores de un objeto: `Object.values(obj).reduce((acc, v) => acc + v, 0)`.

---

## for...in
- **Qué es**: un bucle que recorre todas las claves enumerables de un objeto (y también de prototypes, pero eso es avanzado).
- **Cuándo usarlo**: para iterar sobre las claves de un objeto cuando no necesitas los valores o prefieres acceder con corchete.
- **Sintaxis**:
  ```js
  for (const clave in objeto) {
    console.log(clave, objeto[clave]);
  }
  ```
- **Métodos/funciones internos**: no aplica. Es sintaxis del lenguaje. Recorre claves, no valores.
- **Errores comunes**:
  - Creer que `for...in` recorre valores: recorre claves. Para valores, usa `Object.values()`.
  - Olvidar que `for...in` también recorre propiedades heredadas del prototipo. Para evitarlo, usar `obj.hasOwnProperty(clave)` o `Object.hasOwn(obj, clave)`.
- **Buenas prácticas**:
  - Preferir `Object.keys/values/entries` + `for...of` o `forEach` para recorrer objetos. Es más explícito y evita el tema del prototipo.
  - Si usas `for...in`, siempre filtrar con `Object.hasOwn`.

---

## spread de objetos
- **Qué es**: el operador `...` que "desempaqueta" las propiedades de un objeto en otro. Útil para copiar o combinar objetos.
- **Cuándo usarlo**: para crear un objeto nuevo combinando otros, o para copiar un objeto de forma superficial (solo primer nivel).
- **Sintaxis**:
  ```js
  const base = { a: 1, b: 2 };
  const extra = { b: 3, c: 4 };
  const fusion = { ...base, ...extra };  // { a: 1, b: 3, c: 4 }
  ```
- **Métodos/funciones internos**: no aplica. Es sintaxis de ES6. Si hay claves repetidas, gana el último objeto.
- **Errores comunes**:
  - Creer que spread crea una copia profunda: `{ ...obj }` solo copia el primer nivel. Si hay objetos anidados, quedan referenciados.
  - Olvidar que el último valor gana en caso de colisión de claves: `{ ...a, ...b }` → si `a` y `b` tienen la misma clave, queda el valor de `b`.
- **Buenas prácticas**:
  - Usar spread para combinar objetos planos (sin anidamiento profundo).
  - Para copiar objetos con anidamiento, usar `structuredClone`.

---

## Object.assign
- **Qué es**: una función que copia propiedades de uno o más objetos en un objeto destino. Hace lo mismo que spread, pero con sintaxis diferente.
- **Cuándo usarlo**: rara vez. Spread es más legible. Se usa cuando necesitas mutar un objeto existente en vez de crear uno nuevo.
- **Sintaxis**:
  ```js
  const destino = { a: 1 };
  Object.assign(destino, { b: 2 }, { c: 3 });  // destino ahora es { a: 1, b: 2, c: 3 }

  // para crear uno nuevo (sin mutar)
  const nuevo = Object.assign({}, original, extra);
  ```
- **Métodos/funciones internos**: no aplica. Es una función estática de `Object`.
- **Errores comunes**:
  - Mutar el primer argumento: `Object.assign(destino, extra)` cambia `destino`. Si no quieres mutar, pasa `{}` como primer argumento.
  - Creer que es profunda: `Object.assign` solo copia el primer nivel, igual que spread.
- **Buenas prácticas**:
  - Preferir spread `{ ...a, ...b }` para combinar objetos. Es más corto y más legible.
  - Usar `Object.assign` solo si necesitas mutar un objeto existente directamente.

---

## referencias vs copias
- **Qué es**: en JavaScript, los objetos no se copian al asignarlos. Dos variables que apuntan al mismo objeto comparten los cambios. Es como tener dos nombres para el mismo cuaderno.
- **Cuándo usarlo**: concepto clave para entender por qué al modificar `alias` también cambia `original`.
- **Sintaxis**:
  ```js
  const original = { saldo: 100 };
  const alias = original;      // NO es una copia, es la misma referencia
  alias.saldo = 50;
  console.log(original.saldo); // 50 ← cambió el original
  ```
- **Métodos/funciones internos**: no aplica. Es un comportamiento del lenguaje, no una función.
- **Errores comunes**:
  - Creer que `const copia = original` crea una copia. NO: es una referencia.
  - Creer que solo pasa con objetos: arrays también se asignan por referencia.
- **Buenas prácticas**:
  - Si necesitas una copia, usa spread (superficial) o `structuredClone` (profunda).
  - Para primitivos (números, strings, booleans) no hay problema: se copian por valor.

---

## copiar superficial (spread)
- **Qué es**: crear un objeto nuevo copiando solo las propiedades del primer nivel. Los valores que sean objetos o arrays quedan referenciados (compartidos).
- **Cuándo usarlo**: cuando el objeto es plano (sin objetos ni arrays anidados), o cuando el anidamiento no te importa copiar por referencia.
- **Sintaxis**:
  ```js
  const original = { a: 1, b: 2 };
  const copia = { ...original };
  copia.a = 99;
  console.log(original.a); // 1 (intacto)
  ```
- **Métodos/funciones internos**: no aplica. Es spread.
- **Errores comunes**:
  - Creer que `{ ...obj }` copia todo: solo copia el primer nivel. Si `obj` tiene un array dentro, el array queda compartido.
  - Olvidar que `Object.assign({}, obj)` hace lo mismo.
- **Buenas prácticas**:
  - Para objetos planos, spread es perfecto.
  - Si el objeto tiene anidamiento y necesitas independencia total, usar `structuredClone`.

---

## copiar profunda (structuredClone)
- **Qué es**: crear una copia completamente independiente de un objeto, incluyendo todos los niveles de anidamiento (objetos dentro de objetos, arrays, etc.).
- **Cuándo usarlo**: cuando el objeto tiene anidamiento (objetos, arrays, fechas) y necesitas que la copia sea totalmente independiente del original.
- **Sintaxis**:
  ```js
  const original = { datos: { x: 1 }, lista: [1, 2] };
  const copia = structuredClone(original);
  copia.datos.x = 999;
  console.log(original.datos.x); // 1 (intacto)
  ```
- **Métodos/funciones internos**: no aplica. Es una función global de JS (disponible en Node 17+ y todos los navegadores modernos).
- **Errores comunes**:
  - Usar `JSON.parse(JSON.stringify(obj))` como alternativa: funciona en muchos casos, pero pierde `undefined`, funciones, `Date` (se convierte a string), `Map`, `Set`, etc. `structuredClone` preserva más tipos.
  - Creer que `structuredClone` copia funciones: NO. Las funciones y símbolos se ignoran (dan `undefined` en la copia).
- **Buenas prácticas**:
  - Preferir `structuredClone` sobre `JSON.parse(JSON.stringify())`.
  - No abusar de copias profundas: si el objeto es grande y solo cambias una cosa, a veces conviene copiar solo lo que necesitas.

---

## optional chaining (?.)
- **Qué es**: un operador que accede a una propiedad de forma segura. Si algo en la cadena no existe (es `undefined` o `null`), en vez de tirar error, devuelve `undefined`.
- **Cuándo usarlo**: cuando no sabes si una propiedad intermedia existe. Muy útil con datos de APIs o formularios donde el usuario puede no completar todo.
- **Sintaxis**:
  ```js
  const usuario = {};
  console.log(usuario.perfil?.nombre);  // undefined (sin error)

  // encadenar
  const ciudad = usuario.direccion?.ciudad?.nombre;  // undefined

  // con valor por defecto (nullish coalescing)
  const puerto = usuario.config?.puerto ?? 8080;    // 8080
  ```
- **Métodos/funciones internos**: no aplica. Es sintaxis del lenguaje.
- **Errores comunes**:
  - Creer que `?.` funciona con variables no definidas: `noExiste?.prop` → ReferenceError (la variable misma no existe).
  - Usar `?.` cuando ya sabes que la propiedad existe: innecesario y ruido visual.
  - Confundir `?.` con `||`: `?.` es para encadenamiento seguro; `||` es para valor por defecto. Se suelen usar juntos.
- **Buenas prácticas**:
  - Usar `?.` solo cuando es posible que la propiedad intermedia no exista.
  - Combinar con `??` (nullish coalescing) para dar un valor por defecto cuando el resultado es `undefined` o `null`.

---

## Object.freeze
- **Qué es**: una función que "congela" un objeto, impidiendo que se agreguen, modifiquen o borren propiedades. Es como poner un candado.
- **Cuándo usarlo**: cuando quieres proteger un objeto de cambios accidentales. Es útil para constantes de configuración o datos que no deberían cambiar.
- **Sintaxis**:
  ```js
  const config = Object.freeze({ version: '1.0', debug: false });
  config.version = '2.0';  // no tira error pero no cambia
  console.log(config.version);  // 1.0

  // en modo estricto sí tira error
  'use strict';
  Object.freeze(config);
  config.version = '2.0';  // TypeError: Cannot assign to read only property
  ```
- **Métodos/funciones internos**: no aplica. Es una función estática de `Object`.
- **Errores comunes**:
  - Creer que `freeze` es profundo: NO lo es. Solo congela el primer nivel. Los objetos anidados siguen mutables.
  - Olvidar que en modo no estricto las mutaciones silenciosamente fallan: no tira error, simplemente no cambia el valor.
- **Buenas prácticas**:
  - Para congelado profundo, crear una función recursiva o usar librerías.
  - `Object.freeze` es "shallow": si necesitas proteger todo, congela los objetos anidados también.
  - En modo estricto (`'use strict'`), las mutaciones sobre objetos congelados tiran `TypeError`.

---

## Ejemplos integrados

Los ejemplos del modulo estan integrados aca, listos para correr con `node`. Cada bloque muestra su salida esperada como comentario.

### Objetos: crear y acceder

```js
// Un objeto es como la ficha del cuaderno: varias casillas con datos, todas juntas.
const persona = {
  nombre: 'Ana',
  edad: 30,
  'ciudad natal': 'Córdoba',  // clave con espacio → solo corchete
};

// Acceso: con el punto agarras la casilla por su nombre; con corchetes, para claves con espacios o raras.
console.log(persona.nombre);           // Ana
console.log(persona['edad']);          // 30
console.log(persona['ciudad natal']);  // Córdoba

// Agregar / modificar / borrar: como anotar, corregir o tachar una casilla de la ficha.
persona.profesion = 'Ingeniera';
persona.edad = 31;
delete persona['ciudad natal'];
console.log(persona); // { nombre: 'Ana', edad: 31, profesion: 'Ingeniera' }

// Claves dinámicas: si la clave está en una variable, la encerras en corchetes para que use el valor.
const clave = 'dni';
const info = { [clave]: '12.345.678' };
console.log(info.dni); // 12.345.678

// Short syntax: si la variable se llama igual que la clave, va sin repetir el nombre.
const x = 5;
const y = 10;
const punto = { x, y };
console.log(punto); // { x: 5, y: 10 }
```

### Métodos y this

```js
// Un método es una acción que el propio objeto sabe hacer, como una mascota que sabe dar la pata.
const contador = {
  valor: 0,
  incrementar() {
    this.valor++;          // this = el objeto que llama al método
  },
  reset() {
    this.valor = 0;
  },
  ver() {
    return this.valor;
  },
};

contador.incrementar();
contador.incrementar();
console.log(contador.ver()); // 2
contador.reset();
console.log(contador.ver()); // 0

// `this` se refiere a QUIÉN llama al método: dentro del objeto, `this` es el propio objeto.
const auto = {
  marca: 'Toyota',
  presentarse() {
    return `Soy un ${this.marca}`;
  },
};
console.log(auto.presentarse()); // Soy un Toyota

// OJO: las arrow functions NO tienen `this` propio (lo heredan).
// En métodos, usa la sintaxis corta o function clásica.
```

### Funciones de Object (keys, values, entries, for...in, spread, assign, freeze)

```js
const usuario = { nombre: 'Ana', edad: 30, ciudad: 'Córdoba' };

console.log(Object.keys(usuario));    // ['nombre','edad','ciudad']
console.log(Object.values(usuario));  // ['Ana',30,'Córdoba']
console.log(Object.entries(usuario)); // [['nombre','Ana'],['edad',30],['ciudad','Córdoba']]

// Recorrer con for...in: vas casilla por casilla, como cuando repasas los datos de la ficha.
for (const clave in usuario) {
  if (Object.hasOwn(usuario, clave)) {
    console.log(clave, '=', usuario[clave]);
  }
}

// Combinar objetos (spread, el más común): unir dos fichas en una.
const datosExtra = { email: 'ana@mail.com' };
const completo = { ...usuario, ...datosExtra };
console.log(completo);

// Object.assign hace lo mismo pero es más verboso; el spread es más corto y se lee mejor.
const completo2 = Object.assign({}, usuario, datosExtra);
console.log(completo2);

// Congelar: le pones el candado, nadie puede cambiar ese objeto.
const fijo = Object.freeze({ version: '1.0' });
// fijo.version = '2.0'; // en Node no tira error visible pero no cambia
console.log(fijo.version); // 1.0
```

### Referencias, copias, optional chaining y nullish coalescing

```js
// Los objetos se asignan por REFERENCIA: `alias` y `original` son dos nombres para el MISMO cuaderno.
const original = { saldo: 100 };
const alias = original;
alias.saldo = 50;
console.log(original.saldo); // 50  ← ¡cambió el original!

// Copia superficial (solo primer nivel): con el spread haces una fotocopia del primer nivel.
const copia = { ...original };
copia.saldo = 99;
console.log(original.saldo); // 50 (intacto)

// Copia profunda con structuredClone (anida cualquier cosa): copia TODO.
const anidado = { datos: { x: 1 }, lista: [1, 2, 3] };
const profunda = structuredClone(anidado);
profunda.datos.x = 999;
console.log(anidado.datos.x); // 1 (intacto)

// Optional chaining (?.) → undefined en vez de error: si no existe lo que buscas, no se rompe.
const usuario = {};
console.log(usuario.perfil?.nombre); // undefined (sin error)
// console.log(usuario.perfil.nombre); // ERROR: no se puede leer 'nombre' de undefined

// Con operador ?? (nullish): valor por defecto solo si es null/undefined.
const puerto = usuario.perfil?.puerto ?? 8080;
console.log(puerto); // 8080
```

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-persona.js` | crear un objeto persona con método usando `this` |
| `ejercicios/ej-02-grupo.js` | operaciones con array de objetos: suma, búsqueda, transformación |
| `ejercicios/ej-03-clonar.js` | copia profunda con `structuredClone` sin mutar el original |
| `ejercicios/ej-04-inventario.js` | mini inventario con claves dinámicas, Object.values y Object.entries |
| `ejercicios/ej-05-viajes.js` | verificar con un if o ternario si el aeropuerto existe antes de leer su nombre |
