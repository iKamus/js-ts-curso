# Proyecto: Juego de cartas

## Consigna

Crear un juego de cartas que permita crear cartas de distintos tipos, formar manos y evaluar puntajes. Todo se hace con lo visto en el modulo 08: clases, constructores, campos privados, getters, metodos, herencia, super, override e instanceof.

## Requisitos

1. Crear una clase base `Carta` con propiedad `palo` (privada) y metodo `describir()`.
2. Crear `NumeroCard extends Carta` con campo privado `#numero` (1-10), getter `puntaje` que devuelve el numero.
3. Crear `FaceCard extends Carta` con campo privado `#tipo` ("J", "Q", "K"), getter `puntaje` que devuelve 10 para todos.
4. Crear la clase `Mano` que administra un array de cartas (campo privado `#cartas`) con metodos: `agregar(carta)`, `get total` (suma de puntajes), `get cantidad`, `describir()` (lista las cartas).
5. Usar `instanceof` para mostrar el tipo de cada carta al describir la mano.
6. Crear instancias y probar: una mano con cartas mixtas (numeros y figuras), mostrar puntaje total y listado.

## Estructura del archivo

El archivo `cartas.js` tiene la plantilla incompleta. Completa las partes marcadas con `// completa aca`.

## Pasos sugeridos

1. Crear la clase `Carta` con constructor que reciba `palo` y lo guarde como campo privado `#palo`. Crear getter `palo` y metodo `describir()`.
2. Crear `NumeroCard extends Carta`: constructor recibe `(palo, numero)`, llama `super(palo)` y guarda `#numero`. Getter `puntaje` devuelve `#numero`.
3. Crear `FaceCard extends Carta`: constructor recibe `(palo, tipo)`, llama `super(palo)` y guarda `#tipo`. Getter `puntaje` devuelve 10.
4. Crear `Mano` con campo privado `#cartas` (array vacio). Metodos: `agregar`, getter `total`, getter `cantidad`, metodo `describir()`.
5. Crear una mano, agregar 5 cartas (mezcla de numeros y figuras), mostrar total y listado.
6. Usar `instanceof` dentro de `describir()` para indicar si es carta numero o figura.

## Tips

- En la clase `Carta`, el palo debe ser privado (`#palo`) para que no se pueda cambiar desde afuera.
- Los getters `puntaje` permiten que cada tipo de carta calcule su puntaje de forma distinta (polimorfismo).
- En `Mano`, el array `#cartas` es privado: solo se modifica con `agregar()`.
- Para el total, usa `reduce` sobre `#cartas` y el getter `puntaje` de cada carta.
- `instanceof` te permite saber si una carta es `NumeroCard` o `FaceCard` para mostrar informacion distinta.

## Resultado esperado

```
Mano de 5 cartas:
  [NumeroCard] 3 de copas — puntaje: 3
  [FaceCard] K de espadas — puntaje: 10
  [NumeroCard] 7 de oros — puntaje: 7
  [FaceCard] J de corazones — puntaje: 10
  [NumeroCard] 5 de picas — puntaje: 5
Puntaje total: 35
Es una mano ganadora (>= 21)? false
```
