/*
Ejercicio 2 — Operaciones con un grupo
Acá tenés un grupo de gente (un array de objetos):
  const personas = [
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 25 },
    { nombre: 'Caro', edad: 33 },
  ];
Cada elemento es un objeto con sus casillas nombre y edad.

Paso a paso:
1) Sumá todas las edades con reduce. Acordate del módulo 04: el
   acumulador arranca en 0 y en cada vuelta le sumás persona.edad.
   Es como sumar las edades de todo el curso.
2) Devolvé el nombre de la persona más joven. Es como el ejercicio
   del "más alto de la fila" pero con edades: recorré el array y
   quedate con la persona que tiene la edad más chica.
   (Ojo: tenés que devolver el NOMBRE, no la edad.)
3) Devolvé un array solo con los nombres usando map.
   map transforma cada objeto en su nombre: escribí vos la flecha
   que saca la casilla nombre de cada persona.
4) Mostrá los tres resultados con el formato de abajo.

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

// completá acá