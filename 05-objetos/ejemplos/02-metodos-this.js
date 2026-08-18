// 02-metodos-this.js — Métodos y this
// Un método es una acción que el propio objeto sabe hacer, como una mascota que sabe dar la pata.

const contador = {
  valor: 0,
  incrementar() {
    this.valor++;          // this = el objeto que llama al método
  },
  reset() {
    this.valor = 0;
  },
  ver() {
    return this.valor;
  },
};

contador.incrementar();
contador.incrementar();
console.log(contador.ver()); // 2
contador.reset();
console.log(contador.ver()); // 0

// `this` se refiere a QUIÉN llama al método
// Es como decir "yo": dentro del objeto, `this` es el propio objeto que está hablando.
const auto = {
  marca: 'Toyota',
  presentarse() {
    return `Soy un ${this.marca}`;
  },
};
console.log(auto.presentarse()); // Soy un Toyota

// OJO: las arrow functions NO tienen `this` propio (lo heredan).
// En métodos, usá la sintaxis corta o function clásica.