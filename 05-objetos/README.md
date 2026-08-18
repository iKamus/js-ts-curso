# Módulo 05 — Objetos

Un objeto es como una ficha del cuaderno: tiene casillas con datos (nombre, edad, ciudad). En vez de tener listas sueltas, juntás todo lo de una misma persona o cosa en un solo lugar.

## Literal y acceso
```js
const persona = { nombre: 'Ana', edad: 30 };
persona.nombre;          // punto
persona['edad'];         // corchete (necesario para claves con espacios o dinámicas)
```

Para leer un dato usás el punto, como sacar una tarjeta de la ficha; cuando la clave es rara o dinámica, vas con corchetes.

## Mutar
- Agregar: `persona.profesion = 'Ingeniera';`
- Modificar: `persona.edad = 31;`
- Borrar: `delete persona.clave;`
- Clave dinámica: `{ [miVariable]: 'valor' }`

## Métodos y this
```js
const contador = {
  valor: 0,
  incrementar() { this.valor++; },   // this = el objeto que llama
};
```
Las **arrow functions no tienen `this` propio** — en métodos usá la sintaxis corta.

## Funciones útiles de Object
- `Object.keys(obj)` → claves | `Object.values(obj)` → valores | `Object.entries(obj)` → pares
- `for (const clave in obj)` recorre claves
- `{ ...a, ...b }` combina objetos (spread)

## Referencias (¡importante!)
- Los objetos se asignan **por referencia**: `const alias = original` NO copia.
- Copia superficial: `{ ...original }` (solo primer nivel)
- Copia profunda: `structuredClone(original)`
- Optional chaining `?.` evita errores: `usuario.perfil?.nombre` → `undefined` en vez de romper.

> Esta parte suele confundir, pero con la práctica se entiende. Pensalo así: cuando asignás por referencia, dos nombres apuntan al mismo cuaderno; para tener uno propio, tenés que copiarlo.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-objetos-basico.js` | crear la ficha, leerla y modificarla |
| `ejemplos/02-metodos-this.js` | acciones dentro del objeto y qué es `this` |
| `ejemplos/03-object-methods.js` | mirar claves/valores, combinar y congelar |
| `ejemplos/04-referencias.js` | por qué no copiar, cómo copiar y no romper |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-persona.js` | crear un objeto con método |
| `ejercicios/ej-02-grupo.js` | sumar edades, el más joven y los nombres |
| `ejercicios/ej-03-clonar.js` | copia profunda sin tocar el original |
| `ejercicios/ej-04-inventario.js` | un mini inventario del almacén |
| `ejercicios/ej-05-viajes.js` | optional chaining para no romper |