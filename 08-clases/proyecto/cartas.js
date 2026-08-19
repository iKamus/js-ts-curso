/*
Proyecto — Juego de cartas

Un juego de cartas como el blackjack: tenes cartas de distintos tipos
y formas manos para sumar puntos. Cada tipo de carta calcula su puntaje
de forma distinta.

La jerarquia de clases es:
  Carta (base) -> NumeroCard (hija) ->FaceCard (hija)

Carta tiene el palo como campo privado.
NumeroCard tiene un numero (1-10) como campo privado, su puntaje es el numero.
FaceCard tiene un tipo ("J", "Q", "K") como campo privado, su puntaje es 10.
Mano administra un array de cartas y calcula el puntaje total.

Completa las partes marcadas con // completa aca.
*/

// --- Carta base ---
class Carta {
  // completa aca: campo privado #palo

  constructor(palo) {
    // completa aca: guardar #palo
  }

  // completa aca: getter palo (devuelve #palo)

  // completa aca: metodo describir() que devuelva "Carta de <palo>"
}

// --- Carta de numero (1-10) ---
class NumeroCard extends Carta {
  // completa aca: campo privado #numero

  constructor(palo, numero) {
    // completa aca: llamar super(palo) y guardar #numero
  }

  // completa aca: getter puntaje que devuelva #numero

  // completa aca: override de describir() que devuelva "<numero> de <palo>"
}

// --- Carta figura (J, Q, K) ---
class FaceCard extends Carta {
  // completa aca: campo privado #tipo

  constructor(palo, tipo) {
    // completa aca: llamar super(palo) y guardar #tipo
  }

  // completa aca: getter puntaje que devuelva 10

  // completa aca: override de describir() que devuelva "<tipo> de <palo>"
}

// --- Mano (maneja varias cartas) ---
class Mano {
  // completa aca: campo privado #cartas (array vacio)

  agregar(carta) {
    // completa aca: hacer push de carta a #cartas
  }

  // completa aca: getter cantidad que devuelva la longitud de #cartas

  // completa aca: getter total que sume el puntaje de todas las cartas
  // usa reduce y el getter puntaje de cada carta

  describir() {
    // completa aca: recorrer #cartas y para cada una:
    // - usar instanceof para saber si es NumeroCard o FaceCard
    // - mostrar "[NumeroCard] " o "[FaceCard] " segun el tipo
    // - mostrar la descripcion de la carta y su puntaje
    // devolver un array de strings
  }
}

// --- Pruebas ---

const mano = new Mano();

mano.agregar(new NumeroCard('copas', 3));
mano.agregar(new FaceCard('espadas', 'K'));
mano.agregar(new NumeroCard('oros', 7));
mano.agregar(new FaceCard('corazones', 'J'));
mano.agregar(new NumeroCard('picas', 5));

console.log(`Mano de ${mano.cantidad} cartas:`);
const descripciones = mano.describir();
for (const desc of descripciones) {
  console.log(`  ${desc}`);
}
console.log(`Puntaje total: ${mano.total}`);
console.log(`Es una mano ganadora (>= 21)? ${mano.total >= 21}`);
