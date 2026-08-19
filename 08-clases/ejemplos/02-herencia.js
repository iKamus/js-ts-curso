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
    // super es como avisar al padre: "che, primero armas tu parte, que yo despues pongo la mia".
    this.raza = raza;
  }
  hablar() {             // override: redefine el metodo
    // Pisamos el metodo del padre: mismo nombre, pero version perruna.
    return `${this.nombre} dice guau`;
  }
  describir() {          // metodo propio de Perro
    // Algo que solo sabe hacer el Perro, el Animal base no lo tiene.
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
