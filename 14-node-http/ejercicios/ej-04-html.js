/*
Ejercicio 4 — Servir HTML
Ahora el servidor no te contesta con texto pelado, sino que te sirve una
página completa, como cuando en el restaurante te traen el plato servido.

PARTE 1 — Crear la página:
1) Creá un archivo ejercicios/pagina.html (un archivo de texto común).
   Adentro poné un HTML simple:
     <!doctype html>
     <html>
       <head><title>Mi página</title></head>
       <body>
         <h1>Bienvenido</h1>
         <p>Esta página la sirve mi servidor.</p>
       </body>
     </html>
   (HTML es el idioma de las páginas web: <h1> es el título grande
   y <p> es un párrafo de texto.)

PARTE 2 — Servirla:
2) Creá el servidor en el puerto 3000 (como en el ejercicio 1).
3) Cuando te pidan '/' (req.url === '/'):
   - Leé el archivo con fs.readFileSync. La ruta se arma con path.join:
     __dirname es la carpeta del archivo actual, o sea ejercicios, y
     ahí está tu pagina.html. (Fijate cómo se lee y cómo se arma la
     ruta en 13-node-archivos/ejemplos/02-fs-basico.js)
   - Respondé con Content-Type 'text/html; charset=utf-8'
     (le avisás al navegador "esto es una página web, no texto plano")
   - Mandá el contenido con res.end(contenidoHtml)
4) server.listen(3000, ...) para arrancar.

Probá:
$ curl.exe http://localhost:3000/
<!doctype html>
... (tu HTML)
(O abrí el navegador en http://localhost:3000 y vas a ver la página.)
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

// completá acá