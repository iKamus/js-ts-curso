# Módulo 08 — Clases

## Clase básica
Una clase es como el molde para hacer galletitas: definís la forma una vez, y después hacés todas las galletitas que quieras con `new`. Cada galletita (instancia) sale con sus propios ingredientes (propiedades).
```js
class Persona {
  #dni;                        // campo PRIVADO (solo accesible dentro)

  constructor(nombre, dni) {   // se ejecuta con new
    this.nombre = nombre;
    this.#dni = dni;
  }
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}
```
- `new` crea la instancia (la galletita recién salida del molde).
- `this` se refiere a la instancia, es decir, a esa persona puntual que estás armando.
- `#campo` = privado (no accesible desde afuera). Es como el cajón de tu cuarto que tiene llave: nadie de afuera mete la mano, solo vos.

## Getters / setters
Se usan como propiedades (sin paréntesis) y permiten validar. Son como la entrada de la cancha: el setter revisa el carnet antes de dejarte pasar.
```js
get mayorDeEdad() { return this.edad >= 18; }
set edad(v) { if (v < 0) throw new Error('edad inválida'); this._edad = v; }
```

## Métodos estáticos
Se llaman en la clase, no en la instancia: `Persona.especie()`. Son como datos de la especie, no de cada persona: todos lo comparten, pero no hace falta tener una instancia para preguntarlo.

## Herencia
Una clase hija hereda de la clase padre, como el hijo que hereda los ojos o el gusto por el asado. La clase hija es el padre, pero con sus propias particularidades.
```js
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);   // llama al constructor del padre
    this.raza = raza;
  }
  hablar() { return `${this.nombre} dice guau`; }  // override
}
```
- `instanceof` comprueba la cadena de herencia: te dice si un objeto es de esa clase o viene de alguna de sus clases madre.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-clase-basica.js` | constructor, privados, getters, static |
| `ejemplos/02-herencia.js` | extends, super, override, instanceof |
| `ejemplos/03-getters-setters.js` | validación con setters |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-rectangulo.js` | clase Rectángulo |
| `ejercicios/ej-02-cuenta.js` | cuenta bancaria |
| `ejercicios/ej-03-herencia.js` | vehículos con herencia |
| `ejercicios/ej-04-banco.js` | banco con Map de cuentas |