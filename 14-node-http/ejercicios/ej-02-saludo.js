/*
Ejercicio 2 — Saludo con query param
Acá el cliente te pasa el nombre "por la puerta de atrás": en la misma
URL, después del signo ?. Es como decir "un sándwich de jamón y queso"
— el pedido viene con el detalle incluido.

La URL se ve así: /saludo?nombre=Ana
- /saludo es el camino (la ruta)
- ?nombre=Ana es el query param (los datos extra del pedido)

Paso a paso:
1) Creá el servidor en el puerto 3000 como en el ejercicio 1.
2) Adentro, agarrá el nombre del query. La URL llega como texto simple,
   pero la podés transformar en un objeto URL para trabajar cómodo:
   - new URL(la url, 'http://localhost') la convierte en un objeto
     (el segundo argumento es obligatorio: es la "base", no importa cuál sea)
   - buscá en ese objeto cómo leer los "query params": hay una
     propiedad searchParams con un método get('nombre').
     Con /saludo?nombre=Ana te da 'Ana'; si no viene, te da null.
3) Armá el saludo:
   - si hay nombre → "Hola, Ana!"
   - si no hay (null) → "Hola, mundo!"
   (podés usar el operador || como plan B: si es null, toma el otro)
4) Respondé con JSON: { saludo: "Hola, Ana!" }
   (Content-Type: 'application/json; charset=utf-8' y JSON.stringify,
   como en el ejercicio 1)
5) server.listen(3000, ...) para arrancar.

Probá:
$ curl.exe "http://localhost:3000/saludo?nombre=Ana"
{"saludo":"Hola, Ana!"}
$ curl.exe "http://localhost:3000/saludo"
{"saludo":"Hola, mundo!"}
*/

const http = require('http');

// completá acá