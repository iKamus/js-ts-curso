# Proyecto: Biblioteca de utilidades

## Consigna

Armar una mini biblioteca de utilidades que combine los dos sistemas de modulos: funciones matematicas en CommonJS y funciones de cadenas en ES Modules, todo consumido desde un archivo principal. Vas a practicar crear modulos con `module.exports` y `export`, importar con `require` e `import`, y mezclar ambos sistemas en un solo proyecto.

## Requisitos

1. **Crear un modulo CommonJS** en `lib/matematicas.cjs` con estas funciones:
   - `sumar(a, b)` → devuelve la suma
   - `restar(a, b)` → devuelve la resta
   - `multiplicar(a, b)` → devuelve el producto
   - `dividir(a, b)` → devuelve el cociente (o "Error: division por cero" si b es 0)
   - `potencia(base, exponente)` → devuelve base elevada al exponente (usa `Math.pow`)
   - `esPar(n)` → devuelve `true` si n es par, `false` si es impar
   - Exportar todas con `module.exports`

2. **Crear un modulo ES** en `lib/cadenas.mjs` con estas funciones y datos:
   - `const alfabeto` → `'abcdefghijklmnopqrstuvwxyz'` (named export)
   - `revertir(texto)` → devuelve el texto al reves (named export)
   - `contarVocales(texto)` → cuenta vocales (a, e, i, o, u) (named export)
   - `aSnakeCase(texto)` → convierte "hola mundo" a "hola_mundo" (named export)
   - `iniciales(nombreCompleto)` → toma "Juan Perez" y devuelve "J.P." (named export)
   - `Descripcion` → funcion default que devuelve `'Biblioteca de cadenas v1.0'`

3. **Crear el archivo principal** `main.cjs` (extension .cjs, porque arranca en CommonJS):
   - Usar `createRequire` del modulo `'module'` para importar `lib/matematicas.cjs` con `require`
   - Usar `import()` (import dinamico) para importar `lib/cadenas.mjs` (porque es ESM y no se puede importar estaticamente desde CJS)
   - Como `import()` es asincrono, todo el codigo que use cadenas debe estar dentro de una `async` function
   - Demostrar cada funcion con valores de ejemplo y mostrar resultados por consola

## Tips

- Para usar `require` desde un archivo `.cjs`, necesitas crear la funcion con `createRequire`:
  ```js
  const { createRequire } = require('module');
  const requireLocal = createRequire(__filename);
  ```
- `import('./lib/cadenas.mjs')` devuelve una Promise con un objeto que tiene los named exports como propiedades y el default en `.default`. Podes destructurar para quitar el default de un lado:
  ```js
  const { default: Descripcion, ...cadenas } = await import('./lib/cadenas.mjs');
  ```
- La forma mas limpio es envolver todo en un `async` function y usar `await`.
- `Math.pow(base, exp)` calcula potencias. Tambien podes usar `base ** exp`.
- Para `aSnakeCase`, reemplaza los espacios con `_` usando `replace(/\s+/g, '_')`.
- Para `iniciales`, separa por espacios, toma la primera letra de cada palabra y une con puntos.

## Resultado esperado

Al correr `node main.cjs`, la salida deberia verse similar a:

```
=== Matematicas (CommonJS) ===
sumar(10, 5): 15
restar(10, 5): 5
multiplicar(4, 3): 12
dividir(10, 3): 3.3333333333333335
dividir(10, 0): Error: division por cero
potencia(2, 8): 256
esPar(4): true
esPar(7): false

=== Cadenas (ES Modules) ===
revertir('hola mundo'): odnum aloh
contarVocales('javascript'): 3
aSnakeCase('hola mundo cruel'): hola_mundo_cruel
iniciales('Juan Perez'): J.P.
Descripcion: Biblioteca de cadenas v1.0
```
