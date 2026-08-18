/*
Ejercicio 5 — fetch con manejo de errores (necesita internet)

Vas a salir a buscar datos de verdad en internet. fetch es como ir a
buscar la lista de precios del almacén: vas a buscar, esperás la
respuesta y después la revisás con calma. Ojo: si no hay conexión,
el try/catch es tu red de contención y te avisa qué pasó.

Paso a paso:
1) Creá obtenerPosts() como función async (va a usar await).
2) Adentro, en un try, seguí el patrón de ejemplos/04-fetch.js
   (la función obtenerDatos de ese ejemplo hace exactamente esto):
   a) Esperá la respuesta de fetch contra esa misma URL.
      (esto tarda: estás yendo a buscar datos de verdad)
   b) Revisá si salió bien: la respuesta tiene una propiedad que
      dice true si el servidor contestó como corresponde. Si NO
      es así, tirá un error con el status (el número del error,
      como 404 o 500) armado con template literal.
   c) Convertí la respuesta a datos con .json(): los datos llegan
      como texto en formato JSON, y .json() los convierte en un
      array de objetos.
   d) Devolvé la cantidad de posts.
3) En el catch mostrá el error (si no hay internet, acá vas a ver
   el mensaje).
4) Llamala con .then para mostrar el resultado.

Resultado esperado (si hay internet):
Cantidad de posts: 100
*/

// completá acá