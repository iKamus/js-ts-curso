# Modulo 13 — Node: archivos y proceso

Node te da acceso al disco duro de la compu y a informacion del sistema donde corre tu programa. Es como si tuvieras las llaves de la conserjeria: podes leer archivos, escribirlos, borrarlos, y ademas saber quien es, donde esta y que le pasaron al programa cuando lo arrancaste.

---

## process

- **Que es**: un objeto global de Node que da informacion sobre el programa que esta corriendo: argumentos, carpeta de trabajo, variables de entorno, plataforma, version de Node, y mas. Es como la ficha de identidad del programa.
- **Cuando usarlo**: cuando necesitas saber algo del entorno de ejecucion: que le pasaron por linea de comandos (argv), donde se esta ejecutando (cwd), que sistema operativo es (platform), o que version de Node tiene (version).
- **Sintaxis**:
  ```js
  process.argv    // array de argumentos (los tuyos empiezan en [2])
  process.cwd()   // carpeta donde se ejecuto el comando
  process.env     // variables de entorno (un objeto clave-valor)
  process.version // version de Node, tipo "v20.11.0"
  process.platform // "win32", "linux", "darwin"
  ```
  Ejemplo:
  ```js
  // node app.js --nombre=Maria
  const args = process.argv.slice(2); // ['--nombre=Maria']
  console.log('carpeta:', process.cwd());
  console.log('Node:', process.version);
  ```
- **Errores comunes**:
  - Olvidar `slice(2)`: `process.argv[0]` es el path de Node y `[1]` es el path del archivo. Los tuyos arrancan en el indice 2.
  - En Windows, `process.env.HOME` puede no existir. Usar `USERPROFILE` como alternativa.
- **Buenas practicas**: usa `process.argv` para herramientas CLI simples; para apps complejas considera librerias como `yargs` o `commander`.

---

## \_\_dirname y \_\_filename

- **Que es**: dos variables globales en CommonJS que indican la ruta del archivo actual. `__dirname` es la carpeta donde esta el archivo; `__filename` es la ruta completa del archivo. Es como la direccion de tu casa y el nombre completo de tu edificio.
- **Cuando usarlo**: cada vez que necesitas construir rutas relativas al archivo actual, como leer un archivo que esta en una subcarpeta junto al script.
- **Sintaxis**:
  ```js
  console.log(__dirname);   // D:\proyecto\13-node-archivos\ejemplos
  console.log(__filename);  // D:\proyecto\13-node-archivos\ejemplos\01-process.js
  ```
- **Errores comunes**:
  - `__dirname` NO existe en ES Modules (con `import`). Ahi usas:
    ```js
    import { fileURLToPath } from 'url';
    import { dirname } from 'path';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    ```
  - Confundir `__dirname` (carpeta del archivo) con `process.cwd()` (carpeta desde donde corriste node). Son distintos si el script esta en otra carpeta.
- **Buenas practicas**: siempre usa `path.join(__dirname, ...)` para armar rutas. Nunca concatenar strings con barras a mano.

---

## path

- **Que es**: un modulo de Node para trabajar con rutas de archivos. Se encarga de usar el separador correcto segun el sistema operativo (`\` en Windows, `/` en Linux/Mac). Es como un GPS que arma la direccion por vos sin que te importen los detalles del camino.
- **Cuando usarlo**: cada vez que construyas, descompongas o compares rutas de archivos. Nunca concatenes strings para armar rutas: usa `path`.
- **Sintaxis**:
  ```js
  const path = require('path');
  ```
- **Errores comunes**:
  - Concatenar rutas con `+`: `'carpeta' + '/' + 'archivo.txt'` funciona en una plataforma y explota en otra. Usa `path.join`.
  - Usar `path.win32.join` o `path.posix.join` a menos que realmente necesites forzar una plataforma.
- **Buenas practicas**: importa `path` y usalo siempre. Es el primer modulo que require en cualquier script que toque archivos.

---

## path.join y path.resolve

- **Que es**: dos funciones para construir rutas. `join` junta pedazos de ruta con el separador correcto. `resolve` arma una ruta absoluta desde la carpeta actual (como un GPS que parte de tu ubicacion y calcula el camino completo).
- **Cuando usarlo**:
  - `path.join`: para armar rutas relativas o absolutas juntando fragmentos. Es la mas comun.
  - `path.resolve`: cuando necesitas una ruta absoluta sin importar desde donde se ejecute el script.
- **Sintaxis**:
  ```js
  path.join('carpeta', 'subcarpeta', 'archivo.txt')
  // Windows: carpeta\subcarpeta\archivo.txt
  // Linux/Mac: carpeta/subcarpeta/archivo.txt

  path.join('..', 'data', 'sample.txt')
  // Sube una carpeta y entra a data

  path.resolve('modulos', '01.md')
  // C:\Users\ yo\proyecto\modulos\01.md (absoluta desde cwd)

  path.resolve('..', 'data')
  // Resuelve relativo a cwd
  ```
- **Errores comunes**:
  - `join` NO resuelve rutas absolutas que aparezcan en medio. Si el ultimo fragmento empieza con `/` o `\`, lo anterior se descarta:
    ```js
    path.join('a', 'b', '/c') // \c (en Windows)
    ```
    Para eso existe `resolve`.
  - Usar `resolve` cuando solo necesitas juntar fragmentos: `resolve` siempre devuelve una absoluta, lo cual puede no ser lo que queres.
- **Buenas practicas**: `path.join` para la mayoria de los casos. `path.resolve` cuando necesitas que la ruta sea absoluta sin importar el contexto.

---

## path.parse

- **Que es**: una funcion que descompone una ruta en sus partes: raiz, carpeta, nombre del archivo, extension, y el nombre completo. Es como leer la etiqueta de una carta y separar remitente, destinatario, ciudad y codigo postal.
- **Cuando usarlo**: cuando necesitas extraer informacion de una ruta: la extension de un archivo, su nombre sin extension, o su carpeta contenedora.
- **Sintaxis**:
  ```js
  path.basename(archivo)    // "main.js" — nombre completo
  path.dirname(archivo)     // "C:\proyecto\src" — carpeta
  path.extname(archivo)     // ".js" — extension
  path.parse(archivo)       // { root, dir, base, ext, name }
  ```
  Ejemplo:
  ```js
  const p = path.parse('C:\\proyecto\\src\\main.js');
  console.log(p);
  // {
  //   root: 'C:\\',
  //   dir: 'C:\\proyecto\\src',
  //   base: 'main.js',
  //   ext: '.js',
  //   name: 'main'
  // }
  ```
- **Errores comunes**:
  - Olvidar que `extname` incluye el punto: `.js`, no `js`.
  - Confundir `name` (sin extension) con `base` (con extension).
- **Buenas practicas**: para sacar solo la extension, `path.extname` es suficiente. Usa `parse` cuando necesitas varias partes a la vez.

---

## fs (sincrono)

- **Que es**: el modulo de Node para trabajar con archivos y carpetas, en version sincrona. Cada operacion bloquea el programa hasta que termine. Es como hacer la tarea de una: una cosa detras de otra, sin pausa.
- **Cuando usarlo**: en scripts simples donde el orden importa y no necesitas que el programa siga haciendo otras cosas mientras lee o escribe. Para apps mas complejas, usa la version asincrona.
- **Sintaxis**:
  ```js
  const fs = require('fs');
  const path = require('path');

  // Leer archivo
  const contenido = fs.readFileSync(ruta, 'utf8');

  // Escribir archivo (sobreescribe todo)
  fs.writeFileSync(ruta, 'contenido nuevo');

  // Agregar al final
  fs.appendFileSync(ruta, 'mas contenido\n');

  // Verificar si existe
  fs.existsSync(ruta) // true o false

  // Borrar archivo
  fs.unlinkSync(ruta)

  // Crear carpeta
  fs.mkdirSync(ruta, { recursive: true })

  // Listar archivos de una carpeta
  const archivos = fs.readdirSync(carpeta)

  // Renombrar o mover
  fs.renameSync(rutaVieja, rutaNueva)

  // Obtener info de un archivo
  const stats = fs.statSync(ruta)
  console.log(stats.size);     // bytes
  console.log(stats.isFile()); // true si es archivo
  console.log(stats.isDirectory()); // true si es carpeta
  ```
- **Errores comunes**:
  - No manejar errores: si el archivo no existe, `readFileSync` lanza una excepcion. Envolve en try/catch o usa `existsSync` antes.
  - Olvidar `'utf8'`: sin el encoding, `readFileSync` devuelve un Buffer, no un string.
  - `writeFileSync` sobreescribe todo el archivo. Si queres agregar, usa `appendFileSync`.
- **Buenas practicas**: usa `existsSync` antes de leer o borrar para evitar crashes. Para archivos grandes, preferí la version asincrona. Siempre construye rutas con `path.join`.

---

## fs (asincrono)

- **Que es**: la version asincrona del modulo fs, usando promesas. No bloquea el programa: arranca la operacion y sigue, y cuando termina la promesa se resuelve. Es como pedir un sandwich en el mostrador: no te quedas clavado, haces otra cosa mientras.
- **Cuando usarlo**: en la mayoria de los casos. Solo usa sincrono en scripts simples o cuando el orden estricto lo requiere.
- **Sintaxis**:
  ```js
  const fs = require('fs/promises');
  const path = require('path');

  async function main() {
    const ruta = path.join(__dirname, '..', 'data', 'datos.json');

    // Leer
    const texto = await fs.readFile(ruta, 'utf8');

    // Escribir
    await fs.writeFile(ruta, 'contenido');

    // Listar
    const archivos = await fs.readdir(carpeta);

    // Info del archivo
    const stats = await fs.stat(ruta);

    // Crear carpeta
    await fs.mkdir(ruta, { recursive: true });

    // Borrar
    await fs.unlink(ruta);
  }

  main().catch(console.error);
  ```
- **Errores comunes**:
  - Olvidar `await`: sin el, la promesa se resuelve despues y el valor es `Promise { <pending> }`.
  - No usar try/catch (o `.catch`) en el async: si algo falla, el error se pierde o crashea sin explicacion.
  - Importar `require('fs/promises')`, no `require('fs')`. Son distintos.
- **Buenas practicas**: siempre usa `async/await` con fs/promises. Envolve en try/catch para manejar errores. Es el estandar moderno en Node.

---

## JSON.parse y JSON.stringify

- **Que es**: dos funciones nativas de JavaScript para convertir entre objetos y texto JSON. `JSON.stringify` empaqueta un objeto a texto (como despachar una caja con su etiqueta). `JSON.parse` desempaca el texto a objeto (como abrir la caja y sacar lo que hay adentro).
- **Cuando usarlo**:
  - `JSON.stringify`: para guardar un objeto en un archivo, enviar datos por HTTP, o mostrar un objeto formateado.
  - `JSON.parse`: para leer un JSON de un archivo y convertirlo a objeto.
- **Sintaxis**:
  ```js
  // stringify: objeto → texto
  const texto = JSON.stringify({ nombre: "Ana", edad: 25 });
  // '{"nombre":"Ana","edad":25}'

  const textoBonito = JSON.stringify({ nombre: "Ana" }, null, 2);
  // Con indentacion de 2 espacios

  // parse: texto → objeto
  const obj = JSON.parse('{"nombre":"Ana","edad":25}');
  console.log(obj.nombre); // "Ana"
  ```
  Ejemplo tipico con archivos:
  ```js
  const fs = require('fs/promises');
  const datos = { tareas: ['comprar', 'estudiar'] };

  // Guardar
  await fs.writeFile('datos.json', JSON.stringify(datos, null, 2));

  // Leer
  const texto = await fs.readFile('datos.json', 'utf8');
  const cargados = JSON.parse(texto);
  ```
- **Errores comunes**:
  - `JSON.parse` con texto invalido lanza `SyntaxError`. Siempre envolve en try/catch.
  - Olvidar el tercer argumento de `stringify`: sin el, el JSON queda en una sola linea dificil de leer.
  - Intentar hacer `JSON.parse` sobre un Buffer: primero convertilo a string con `.toString()` o pasale el encoding a `readFile`.
- **Buenas practicas**: siempre usa `JSON.stringify(datos, null, 2)` para archivos guardados (queda legible). Al leer, envolve `JSON.parse` en try/catch porque el archivo puede estar corrupto o no ser JSON valido.

---

## Datos del modulo

| Archivo | Contenido |
|---|---|
| `data/sample.txt` | Texto de prueba (3 lineas) |
| `data/datos.json` | JSON de prueba (`{ "nombre": "Smart LED", "version": "2.0" }`) |

## Ejemplos

| Archivo | Tema |
|---|---|
| `ejemplos/01-process.js` | argv, cwd, env, \_\_dirname, \_\_filename |
| `ejemplos/02-fs-basico.js` | leer, escribir, agregar, borrar, renombrar (sincrono) |
| `ejemplos/03-fs-async.js` | fs/promises: readFile, readdir, mkdir, stat |
| `ejemplos/04-path.js` | basename, dirname, extname, parse, join, resolve |

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-lineas.js` | Contar lineas de un archivo |
| `ejercicios/ej-02-registro.js` | Agregar entradas a un log |
| `ejercicios/ej-03-palabras.js` | Contar palabras y la mas repetida |
| `ejercicios/ej-04-tareas.js` | CLI de tareas con JSON |
| `ejercicios/ej-05-renombrar.js` | Crear y renombrar un archivo |

## Proyecto

| Archivo | Consigna |
|---|---|
| `proyecto/` | Organizador de archivos: leer un directorio, filtrar por extension, mover/copiar archivos, generar reporte JSON |

---

Si algo te da error, leé el mensaje con calma: Node te dice bastante claro donde esta el problema. Y como siempre, proba cada ejemplo vos mismo.
