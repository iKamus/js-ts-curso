# Módulo 13 — Node: archivos y proceso

Este módulo es como aprender a organizar tu mochila: vas a poder leer lo que hay adentro de un archivo, escribir cosas nuevas, borrar lo que sobra y mover todo de lugar. Node te da las herramientas para trabajar con el disco de tu compu, como si tuvieras la llave de la conserjería del edificio.

## process
Pensá en `process` como la "ficha de identidad" del programa: te cuenta quién es, dónde está parado y qué le pasaste cuando lo arrancaste.

- `process.argv` → argumentos de la línea de comandos (`node archivo.js a b` → `['a','b']` en `argv.slice(2)`)
- `process.cwd()` → carpeta donde corriste el comando
- `process.env` → variables de entorno del sistema
- `__dirname` → carpeta del archivo actual | `__filename` → ruta del archivo actual

## path (rutas)
Las rutas son como las direcciones para llegar a un archivo. En Windows el separador es `\` y en otros sistemas es `/`; no te rompas la cabeza: `path` se encarga por vos.

- `path.join('a', 'b', 'c.txt')` → ruta con el separador correcto de tu sistema
- `path.resolve(...)` → ruta absoluta
- `path.basename/dirname/extname/parse(ruta)` → descomponer una ruta
- **Siempre usá `path.join` en vez de concatenar strings** (maneja las barras por plataforma). Es como no pegar las partes de una dirección con cinta adhesiva: lo armás bien y listo.

## fs (archivos) — síncrono
Leer y escribir archivos es como abrir un cuaderno, escribir en él y guardarlo. Acá la versión "síncrona" es como hacer la tarea de una: una cosa atrás de la otra, sin pausa.

```js
const fs = require('fs');
fs.readFileSync(ruta, 'utf8')     // leer → string
fs.writeFileSync(ruta, contenido) // escribir (sobreescribe)
fs.appendFileSync(ruta, texto)    // agregar al final
fs.existsSync(ruta)               // ¿existe?
fs.unlinkSync(ruta)               // borrar
fs.mkdirSync(ruta, { recursive: true }) // crear carpeta
fs.readdirSync(carpeta)           // listar archivos
fs.renameSync(a, b)               // renombrar/mover
```

## fs — asíncrono
La versión asíncrona es como pedir el pedido en el mostrador: seguís haciendo otras cosas mientras el sándwich se arma. No se traba todo esperando, seguís para adelante y cuando está listo, lo usás.

```js
const fs = require('fs/promises');
const contenido = await fs.readFile(ruta, 'utf8');
```

Para leer/escribir JSON: `JSON.parse(texto)` / `JSON.stringify(datos, null, 2)`. Es como despachar una caja con su etiqueta: el JSON es el paquete que viaja, y estos dos te lo arman y te lo abren.

## Datos del módulo
- `data/sample.txt` → texto de prueba
- `data/datos.json` → JSON de prueba

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-process.js` | argv, cwd, env, __dirname |
| `ejemplos/02-fs-basico.js` | leer/escribir/borrar síncrono |
| `ejemplos/03-fs-async.js` | fs/promises, readdir, mkdir, stat |
| `ejemplos/04-path.js` | descomponer rutas |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-lineas.js` | contar líneas de un archivo |
| `ejercicios/ej-02-registro.js` | agregar líneas a un log |
| `ejercicios/ej-03-palabras.js` | contar palabras y la más repetida |
| `ejercicios/ej-04-tareas.js` | CLI de tareas con JSON (add/list/remove) |
| `ejercicios/ej-05-renombrar.js` | crear y renombrar un archivo |

Dale, metele. Si algo te da error, leé el mensaje con calma: así se aprende. Y probá cada ejemplo vos mismo, que es la única forma de que te quede en la cabeza.