/*
Ejercicio 4 — Servir HTML
Ahora el servidor no te contesta con texto pelado, sino que te sirve una
pagina completa, como cuando en el restaurante te traen el plato servido.

PARTE 1 — Crear la pagina:
1) Crea un archivo ejercicios/pagina.html (un archivo de texto comun).
   Adentro pone un HTML simple:
     <!doctype html>
     <html>
       <head><title>Mi pagina</title></head>
       <body>
         <h1>Bienvenido</h1>
         <p>Esta pagina la sirve mi servidor.</p>
       </body>
     </html>
   (HTML es el idioma de las paginas web: <h1> es el titulo grande
   y <p> es un parrafo de texto.)

PARTE 2 — Servirla:
2) Crea el servidor en el puerto 3000 (como en el ejercicio 1).
3) Cuando te pidan '/' (req.url === '/'):
   - Lee el archivo con fs.readFileSync. La ruta se arma con path.join:
     __dirname es la carpeta del archivo actual, o sea ejercicios, y
     ahi esta tu pagina.html. (Fijate como se lee y como se arma la
     ruta en 13-node-archivos/ejemplos/02-fs-basico.js)
   - Responde con Content-Type 'text/html; charset=utf-8'
     (le avisas al navegador "esto es una pagina web, no texto plano")
   - Manda el contenido con res.end(contenidoHtml)
4) server.listen(3000, ...) para arrancar.

Tip: para la ruta del archivo, usa:
  const ruta = path.join(__dirname, 'pagina.html');
  const contenido = fs.readFileSync(ruta, 'utf8');

Proba:
$ curl.exe http://localhost:3000/
<!doctype html>
... (tu HTML)
(O abri el navegador en http://localhost:3000 y vas a ver la pagina.)

Resultado esperado:
- GET / -> HTML completo con <h1>Bienvenido</h1> y Content-Type text/html
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

// completá acá
