// 01-clase-basica.js — Clase básica, privados, getters, static
// Acá armamos una clase Persona, que es como el molde para hacer personas de ejemplo.
// Con new sacás cada persona; el constructor es el momento de "armar" esa persona nueva.

class Persona {
  #dni;   // campo privado: solo accesible dentro de la clase
  // Es como el cajón con llave: nadie de afuera puede tocar el DNI, solo los métodos de acá.

  constructor(nombre, edad, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.#dni = dni;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }

  // getter: se usa como propiedad, sin paréntesis
  // Es como un cartelito que se lee directo: no llamás una función, solo mirás el valor.
  get mayorDeEdad() {
    return this.edad >= 18;
  }

  // setter: permite validar al asignar
  // Es como la entrada de la cancha: antes de dejar pasar (guardar el valor), revisa el carnet.
  set cambiarNombre(nuevo) {
    if (!nuevo || nuevo.trim() === '') {
      throw new Error('El nombre no puede estar vacío');
    }
    this.nombre = nuevo;
  }

  // método estático: se llama en la clase, no en la instancia
  // Es un dato de la especie en general, como "todos los humanos tenemos ADN".
  // No hace falta crear una persona para preguntarlo.
  static especie() {
    return 'Homo sapiens';
  }
}

const ana = new Persona('Ana', 30, '12345');
console.log(ana.saludar());       // Hola, soy Ana
console.log(ana.mayorDeEdad);     // true
ana.cambiarNombre = 'Ana Sofía';
console.log(ana.nombre);          // Ana Sofía
// console.log(ana.#dni);         // ERROR: #dni es privado
console.log(Persona.especie());   // Homo sapiens
console.log(ana instanceof Persona); // true