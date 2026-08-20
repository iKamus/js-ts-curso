/*
Ejercicio 5 — fetch con manejo de errores (necesita internet)

Vas a salir a buscar datos de verdad en internet. fetch es como ir a
buscar la lista de precios del almacen: vas a buscar, esperas la
respuesta y despues la revisas con calma. Ojo: si no hay conexion,
el try/catch es tu red de contencion y te avisa que paso.

Paso a paso:
1) Crear obtenerPosts() como funcion async (va a usar await).
2) Adentro, en un try, sigue el patron de la seccion fetch del README:
   a) Espera la respuesta de fetch contra esa misma URL.
      (esto tarda: estas yendo a buscar datos de verdad)
   b) Revisa si salio bien: la respuesta tiene una propiedad que
      dice true si el servidor contesto como corresponde. Si NO
      es asi, tira un error con status (el numero del error,
      como 404 o 500) armado con template literal.
   c) Convierte la respuesta a datos con .json(): los datos llegan
      como texto en formato JSON, y .json() los convierte en un
      array de objetos.
   d) Devuelve la cantidad de posts.
3) En el catch mostrar el error (si no hay internet, aca vas a ver
   el mensaje).
4) Llamarla con .then para mostrar el resultado.

Resultado esperado (si hay internet):
Cantidad de posts: 100
*/

// completa aqui
