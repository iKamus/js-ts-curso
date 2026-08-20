/*
Ejercicio 2 — Operaciones con un grupo

Tienes un grupo de gente (un array de objetos):
  const personas = [
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 25 },
    { nombre: 'Caro', edad: 33 },
  ];
Cada elemento es un objeto con sus propiedades nombre y edad.

Paso a paso:
1) Suma todas las edades con reduce. Recuerda el módulo 04: el
   acumulador arranca en 0 y en cada vuelta le sumas persona.edad.
2) Devuelve el nombre de la persona más joven. Recorre el array y
   quédate con la persona que tiene la edad más chica.
   (Ojo: tienes que devolver el NOMBRE, no la edad.)
3) Devuelve un array solo con los nombres usando map.
   Transforma cada objeto en su nombre: escribe la expresión
   que extrae la propiedad nombre de cada persona.
4) Muestra los tres resultados con el formato de abajo.

Resultado esperado:
Suma: 88
Más joven: Luis
Nombres: [ 'Ana', 'Luis', 'Caro' ]
*/

const personas = [
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Luis', edad: 25 },
  { nombre: 'Caro', edad: 33 },
];

// completa aqui
