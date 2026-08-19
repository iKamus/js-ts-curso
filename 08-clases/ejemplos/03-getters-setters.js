// 03-getters-setters.js — Validacion con getters y setters
// El setter es como el guardia en la entrada: antes de guardar un valor,
// revisa que sea razonable. Si no, tira un error y no deja pasar.

class Temperatura {
  #celsius;

  constructor(celsius) {
    this.celsius = celsius;  // pasa por el setter (validacion)
    // No asigna directo: se manda al setter, que valida.
  }

  get celsius() {
    return this.#celsius;
  }
  set celsius(valor) {
    if (valor < -273) {
      throw new Error('No existe temperatura menor a -273 C');
    }
    this.#celsius = valor;
  }

  // getter calculado (derivado)
  // Este valor no se guarda: se calcula cada vez que lo pedis,
  // como convertir pesos a dolares con el cambio del dia.
  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
}

const t = new Temperatura(25);
console.log(t.celsius);     // 25
console.log(t.fahrenheit);  // 77
t.celsius = 30;
console.log(t.fahrenheit);  // 86

try {
  t.celsius = -300;         // el setter valida y tira error
} catch (e) {
  console.log('Error:', e.message);
}
