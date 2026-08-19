// 01-clase-basica.js — Clase basica, privados, getters, static
// Armamos una clase Persona: el molde para crear personas de ejemplo.
// Con new sacas cada persona; el constructor es el momento de armar esa persona nueva.

class Persona {
  #dni;   // campo privado: solo accesible dentro de la clase
  // Como el cajon con llave: nadie de afuera puede tocar el DNI.

  constructor(nombre, edad, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.#dni = dni;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }

  // getter: se usa como propiedad, sin parentesis
  // Un cartelito que se lee directo: no llamas una funcion, solo miras el valor.
  get mayorDeEdad() {
    return this.edad >= 18;
  }

  // setter: permite validar al asignar
  // La entrada de la cancha: antes de dejar pasar (guardar), revisa el carnet.
  set cambiarNombre(nuevo) {
    if (!nuevo || nuevo.trim() === '') {
      throw new Error('El nombre no puede estar vacio');
    }
    this.nombre = nuevo;
  }

  // metodo estatico: se llama en la clase, no en la instancia
  // Un dato de la especie en general: no hace falta crear una persona para preguntarlo.
  static especie() {
    return 'Homo sapiens';
  }
}

const ana = new Persona('Ana', 30, '12345');
console.log(ana.saludar());       // Hola, soy Ana
console.log(ana.mayorDeEdad);     // true
ana.cambiarNombre = 'Ana Sofia';
console.log(ana.nombre);          // Ana Sofia
// console.log(ana.#dni);         // ERROR: #dni es privado
console.log(Persona.especie());   // Homo sapiens
console.log(ana instanceof Persona); // true
