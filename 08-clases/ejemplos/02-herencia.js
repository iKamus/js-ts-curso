// 02-herencia.js — Herencia con extends y super
// La herencia es como los hijos que heredan rasgos de los padres:
// Perro y Gato heredan todo de Animal, y encima agregan lo suyo.

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    return `${this.nombre} hace un sonido`;
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);       // llama al constructor del padre
    // super es como avisar al padre: "che, primero armá tu parte, que yo después pongo la mía".
    this.raza = raza;
  }
  hablar() {             // override: redefine el método
    // Acá pisamos el método del padre: mismo nombre, pero versión perruna.
    return `${this.nombre} dice guau`;
  }
  describir() {          // método propio de Perro
    // Esto es algo que solo sabe hacer el Perro, el Animal base no lo tiene.
    return `${this.nombre} es un ${this.raza}`;
  }
}

class Gato extends Animal {
  hablar() {
    return `${this.nombre} dice miau`;
  }
}

const firulais = new Perro('Firulais', 'caniche');
const michi = new Gato('Michi');

console.log(firulais.hablar());    // Firulais dice guau
console.log(firulais.describir()); // Firulais es un caniche
console.log(michi.hablar());       // Michi dice miau

// instanceof mira la cadena de herencia: Firulais viene de Perro y de Animal.
console.log(firulais instanceof Animal); // true
console.log(firulais instanceof Perro);  // true
console.log(michi instanceof Perro);     // false