# Proyecto — Organizador de archivos

## Que vas a hacer

Vas a armar un script que lee una carpeta, filtra los archivos por extension, los mueve (o copia) a subcarpetas segun su tipo, y genera un reporte JSON con la info de cada archivo (nombre, tamaño, extension).

Es como un mini "ordenador de mochila": miras que hay adentro, separas los cuadernos de los lapices, y despues haces un inventario de todo.

## Que practicas

- `fs` sincrono y asincrono
- `path` para construir y descomponer rutas
- `process` para leer argumentos por linea de comandos
- `JSON.stringify` para guardar el reporte
- `fs.statSync` / `fs.stat` para obtener tamaño de archivos
- `fs.mkdirSync` para crear carpetas de destino
- `fs.copyFileSync` / `fs.renameSync` para mover o copiar archivos

## Requisitos

El script debe:

1. Recibir por linea de comandos la ruta de la carpeta a organizar:
   ```
   node organizador.js "C:\Users\yo\Descargas"
   ```
2. Leer todos los archivos de esa carpeta (solo archivos, no subcarpetas).
3. Para cada archivo, obtener su extension con `path.extname`.
4. Mover o copiar cada archivo a una subcarpeta segun su extension:
   - `.txt` → `texto/`
   - `.jpg`, `.png`, `.gif` → `imagenes/`
   - `.js` → `scripts/`
   - Cualquier otra extension → `otros/`
   Si la subcarpeta no existe, crearla.
5. Generar un archivo `reporte.json` en la carpeta de origen con un array de objetos, donde cada objeto tiene:
   ```json
   {
     "nombre": "ejemplo.js",
     "extension": ".js",
     "tamaño": 1024,
     "destino": "scripts/ejemplo.js"
   }
   ```
6. Mostrar por consola un resumen: cuantos archivos se organizaron y a que carpetas fueron.

## Pasos sugeridos

1. Leé los argumentos con `process.argv.slice(2)`. La ruta es `args[0]`.
2. Validá que se paso una ruta. Si no, mostrá un mensaje de uso y salí con `process.exit(1)`.
3. Leé los archivos de la carpeta con `fs.readdirSync`.
4. Para cada archivo, obtené la extension con `path.extname`.
5. Definí un mapa de extension → subcarpeta (un objeto o una funcion).
6. Creá la subcarpeta de destino con `fs.mkdirSync` (recursive: true).
7. Copiá (o mové) el archivo con `fs.copyFileSync` (o `fs.renameSync`).
8. Armá el objeto de info y guardalo en un array.
9. Escribí `reporte.json` con `fs.writeFileSync` y `JSON.stringify`.
10. Mostrá el resumen por consola.

## Tips

- Usá `fs.statSync` para obtener el tamaño de cada archivo (stats.size).
- `path.extname` devuelve la extension con el punto (`.js`, no `js`).
- Si usás `fs.copyFileSync`, el archivo original queda donde esta. Si usás `fs.renameSync`, se mueve (desaparece de la carpeta original).
- Para el mapa de extensiones, podes usar un objeto:
  ```js
  const mapa = {
    '.txt': 'texto',
    '.jpg': 'imagenes',
    '.png': 'imagenes',
    '.gif': 'imagenes',
    '.js': 'scripts'
  };
  ```
  Y si la extension no esta en el mapa, va a `otros`.

## Resultado esperado

Si la carpeta `ejemplo/` tiene:
```
foto.jpg
notas.txt
codigo.js
musica.mp3
```

Despues de correr `node organizador.js ejemplo/`:
```
5 archivos organizados:
  → texto/ (1 archivos)
  → imagenes/ (1 archivos)
  → scripts/ (1 archivos)
  → otros/ (1 archivos)
```

Y en `ejemplo/reporte.json`:
```json
[
  {
    "nombre": "foto.jpg",
    "extension": ".jpg",
    "tamaño": 2048,
    "destino": "imagenes/foto.jpg"
  },
  {
    "nombre": "notas.txt",
    "extension": ".txt",
    "tamaño": 512,
    "destino": "texto/notas.txt"
  },
  {
    "nombre": "codigo.js",
    "extension": ".js",
    "tamaño": 1024,
    "destino": "scripts/codigo.js"
  },
  {
    "nombre": "musica.mp3",
    "extension": ".mp3",
    "tamaño": 4096,
    "destino": "otros/musica.mp3"
  }
]
```

---

Si algo te da error, leé el mensaje de Node: te dice donde esta el problema. Y probá primero con una carpeta con pocos archivos para ver que funciona antes de meter una carpeta grande.
