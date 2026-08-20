/*
Ejercicio 2 — Saludo con query param
El cliente te pasa el nombre "por la puerta de atras": en la misma
URL, despues del signo ?. Es como decir "un sandwich de jamon y queso"
— el pedido viene con el detalle incluido.

La URL se ve asi: /saludo?nombre=Ana
- /saludo es el camino (la ruta)
- ?nombre=Ana es el query param (los datos extra del pedido)

Paso a paso:
1) Crea el servidor en el puerto 3000 como en el ejercicio 1.
2) Adentro, agarra el nombre del query. La URL llega como texto simple,
   pero la puedes transformar en un objeto URL para trabajar comodo:
   - new URL(la url, 'http://localhost') la convierte en un objeto
     (el segundo argumento es obligatorio: es la "base", no importa cual sea)
   - busca en ese objeto como leer los "query params": hay una
     propiedad searchParams con un metodo get('nombre').
     Con /saludo?nombre=Ana te da 'Ana'; si no viene, te da null.
3) Arma el saludo:
   - si hay nombre -> "Hola, Ana!"
   - si no hay (null) -> "Hola, mundo!"
   (puedes usar el operador || como plan B: si es null, toma el otro)
4) Responde con JSON: { saludo: "Hola, Ana!" }
   (Content-Type: 'application/json; charset=utf-8' y JSON.stringify,
   como en el ejercicio 1)
5) server.listen(3000, ...) para arrancar.

Tip: si el query param no viene, searchParams.get() devuelve null.
Usa el operador || para poner un valor por defecto.

Proba:
$ curl.exe "http://localhost:3000/saludo?nombre=Ana"
{"saludo":"Hola, Ana!"}
$ curl.exe "http://localhost:3000/saludo"
{"saludo":"Hola, mundo!"}

Resultado esperado:
- GET /saludo?nombre=Ana  -> JSON { "saludo": "Hola, Ana!" }
- GET /saludo              -> JSON { "saludo": "Hola, mundo!" }
*/

const http = require('http');

// completa aqui
