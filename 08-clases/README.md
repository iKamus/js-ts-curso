# Modulo 08 — Clases

## class
- **Que es**: Un molde para crear objetos con la misma estructura y comportamiento. Es como un plano de casas: el plano define las habitaciones y el garage, y con ese mismo plano construis todas las casas que quieras.
- **Cuándo usarlo**: Cuando necesitas crear muchos objetos parecidos que comparten propiedades y metodos. Si tenes que representar personas, cuentas, productos o cualquier cosa que se repita, una clase te ahorra reescribir codigo.
- **Sintaxis**:
```js
class Persona {
  nombre;   // propiedad publica

  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const ana = new Persona('Ana');   // new crea la instancia
ana.saludar();                    // "Hola, soy Ana"
```
- **Metodos internos**: Ninguno propio de la clase (es una estructura base).
- **Errores comunes**:
  - Olvidar `new` al crear una instancia: `Persona('Ana')` tira error.
  - Definir metodos con flecha (`saludar = () => {}`): no comparten prototype y romen `this`.
  - Confundir clase con objeto: la clase es el molde, `new` crea la galletita.
- **Buenas practicas**:
  - Nombres de clases en PascalCase (`Persona`, `CuentaBancaria`).
  - Una sola responsabilidad: la clase hace una cosa y la hace bien.
  - Las clases se definen antes de usarlas (no se llaman como funciones).

## constructor
- **Que es**: Un metodo especial que se ejecuta automaticamente cuando creas una instancia con `new`. Es como el checklist que armas cuando llega un alumno nuevo: le asignas nombre, carpeta, turno.
- **Cuándo usarlo**: Siempre que necesites inicializar propiedades de la instancia. Sin constructor, las propiedades quedarian vacias o tendrias que asignarlas manualmente despues.
- **Sintaxis**:
```js
class Producto {
  #stock;   // campo privado

  constructor(nombre, precio, stock) {
    this.nombre = nombre;     // propiedad publica
    this.precio = precio;
    this.#stock = stock;
  }
}
```
- **Metodos internos**: Ninguno propio.
- **Errores comunes**:
  - Poner `return` con un valor en el constructor: lo ignora, no tiene sentido.
  - Llamar al constructor sin `new`: `Producto('A', 10, 5)` tira `TypeError`.
  - Olvidar `super()` en clases hijas: tira error antes de usar `this`.
- **Buenas practicas**:
  - Validar datos criticos en el constructor (no guardar un precio negativo).
  - Asignar valores por defecto si un parametro es opcional: `constructor(nombre, precio = 0)`.
  - No hacer calculos pesados en el constructor: eso va en metodos separados.

## propiedades y metodos
- **Que es**: Las propiedades son los datos de la instancia (como el nombre y la edad de una persona). Los metodos son las acciones que puede hacer (como saludar o calcular algo). Juntos definen que es y que hace un objeto.
- **Cuándo usarlo**: Siempre. Toda clase tiene propiedades (datos) y metodos (comportamiento). Las propiedades se guardan en el constructor, los metodos se definen en el cuerpo de la clase.
- **Sintaxis**:
```js
class Circulo {
  radio;   // propiedad (se declara en el cuerpo o en el constructor)

  constructor(radio) {
    this.radio = radio;
  }

  area() {                          // metodo: funciona con this
    return Math.PI * this.radio ** 2;
  }

  describir() {
    return `Circulo de radio ${this.radio}`;
  }
}
```
- **Metodos internos**: Ninguno propio.
- **Errores comunes**:
  - Usar `this` en un metodo con flecha: `area = () => {}` pierde el `this` de la instancia.
  - Olvidar `this.` al acceder a propiedades dentro de metodos.
  - Confundir propiedades de la instancia con variables locales.
- **Buenas practicas**:
  - Nombrar propiedades con sustantivos (`nombre`, `precio`) y metodos con verbos (`calcular`, `describir`).
  - Mantener los metodos cortos: si un metodo hace muchas cosas, dividilo.
  - Preferir propiedades calculadas (getters) a guardar valores derivados.

## campos privados (#)
- **Que es**: Propiedades que solo se pueden leer y modificar desde adentro de la clase. Es como el cajon con llave de tu cuarto: nadie de afuera mete la mano, solo vos con la llave.
- **Cuándo usarlo**: Cuando el dato es interno y no deberia cambiar desde afuera sin control. Por ejemplo, el saldo de una cuenta bancaria: nadie deberia poder hacer `cuenta.saldo = 999999` directamente.
- **Sintaxis**:
```js
class Cuenta {
  #saldo;   // campo privado: solo accesible dentro de Cuenta

  constructor(saldo) {
    this.#saldo = saldo;
  }

  get saldo() {
    return this.#saldo;   // se lee desde afuera con cuenta.saldo
  }

  depositar(monto) {
    this.#saldo += monto; // se modifica solo desde metodos de la clase
  }
}

const c = new Cuenta(100);
c.saldo;          // 100 (getter)
c.#saldo;         // ERROR: no se puede acceder desde afuera
c.#saldo = 500;   // ERROR
```
- **Metodos internos**: Ninguno propio.
- **Errores comunes**:
  - Intentar acceder a `#campo` desde fuera de la clase: tira `SyntaxError`.
  - Olvidar el `#` al declarar: si pones solo `saldo` en vez de `#saldo`, es publico.
  - Confundir con convention `_saldo`: eso es solo un acuerdo visual, cualquiera lo toca.
- **Buenas practicas**:
  - Usar campos privados para datos internos que deben mantenerse consistentes.
  - Exponer valores privados con getters (no con metodos como `getSaldo()`).
  - Si un campo no cambia, hacerlo privado y solo de lectura.

## getters y setters
- **Que es**: Metodos que se usan como si fueran propiedades, sin parentesis. El getter es como un cartelito que lee un valor: `cuenta.saldo` (sin parentesis). El setter es como la entrada de la cancha: antes de guardar un valor, revisa que sea correcto.
- **Cuándo usarlo**: Cuando necesitas controlar como se lee o se escribe un dato. El getter permite calcular valores al vuelo. El setter permite validar antes de asignar.
- **Sintaxis**:
```js
class Persona {
  #edad;

  constructor(edad) {
    this.edad = edad;   // pasa por el setter
  }

  get edad() {
    return this.#edad;
  }

  set edad(valor) {
    if (valor < 0) throw new Error('Edad invalida');
    this.#edad = valor;
  }

  get mayorDeEdad() {
    return this.#edad >= 18;   // valor calculado, no guardado
  }
}
```
- **Metodos internos**:
| Metodo | Que hace | Ejemplo | Resultado |
|---|---|---|---|
| `get propiedad` | Lee un valor como si fuera una propiedad | `persona.edad` | `25` |
| `set propiedad(v)` | Asigna un valor con validacion | `persona.edad = 30` | valida y guarda |
| Getter calculado | Devuelve un valor derivado sin guardarlo | `persona.mayorDeEdad` | `true` |
- **Errores comunes**:
  - Llamar al getter con parentesis: `persona.edad()` tira que no es funcion.
  - Olvidar el campo privado detras del setter: si no hay `#edad`, el setter guarda en una variable local y se pierde.
  - Hacer setters sin validacion: no tiene sentido tener setter si no valida nada.
- **Buenas practicas**:
  - Usar getters para valores derivados (mayorDeEdad, nombreCompleto).
  - Usar setters para validacion (edad, saldo, email).
  - No hacer getters/setters que solo devuelvan o guarden un campo: eso es redundante, usalo directo.

## metodos estaticos
- **Que es**: Metodos que se llaman en la clase, no en la instancia. Son como datos de la especie, no de cada individuo: "todos los humanos tienen ADN" no es algo que preguntes a Juan, es algo de la especie.
- **Cuándo usarlo**: Cuando la operacion no depende de ninguna instancia. Por ejemplo, `Persona.especie()` o `Math.max(1, 2, 3)`: no necesitas crear un objeto para usarlos.
- **Sintaxis**:
```js
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }

  static PI = 3.14159;
}

Calculadora.sumar(2, 3);   // 5
Calculadora.PI;            // 3.14159
```
- **Metodos internos**:
| Metodo | Que hace | Ejemplo | Resultado |
|---|---|---|---|
| `static metodo()` | Se llama en la clase | `Calculadora.sumar(2, 3)` | `5` |
| `static propiedad` | Propiedad de la clase | `Calculadora.PI` | `3.14159` |
- **Errores comunes**:
  - Llamar un metodo estatico en una instancia: `calc.sumar(2, 3)` tira `TypeError`.
  - Usar `this` en metodos estaticos: `this` se refiere a la clase, no a una instancia.
  - Confundir con metodos de instancia: los estaticos van con `static`, los otros no.
- **Buenas practicas**:
  - Usar metodos estaticos para funciones utilitarias que no necesitan estado.
  - No abusar: si el metodo necesita datos de la instancia, no es estatico.
  - Nombrar descriptivamente: `Persona.crear desde datos`, `Math.max`, etc.

## herencia (extends)
- **Que es**: Una clase hija hereda propiedades y metodos de una clase padre, como un hijo que hereda los ojos o el gusto por el asado. La hija es el padre, pero con sus propias particularidades.
- **Cuándo usarlo**: Cuando tenes objetos que comparten comportamiento base pero diferencian en algunos detalles. Por ejemplo, todos los vehiculos tienen marca y modelo, pero un Auto tiene puertas y una Moto tiene cilindrada.
- **Sintaxis**:
```js
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
    super(nombre);   // llama al constructor del padre
    this.raza = raza;
  }
  hablar() {
    return `${this.nombre} dice guau`;   // override
  }
}
```
- **Metodos internos**:
| Metodo | Que hace | Ejemplo | Resultado |
|---|---|---|---|
| `extends Clase` | Hereda de otra clase | `class Perro extends Animal` | Hereda todo |
| `super()` | Llama al constructor del padre | `super(nombre)` | Inicializa el padre |
- **Errores comunes**:
  - Olvidar `super()` en el constructor de la hija: tira `ReferenceError` antes de usar `this`.
  - Llamar `super()` despues de usar `this`: primero `super()`, despues `this`.
  - No poner `extends`: `class Perro { }` no hereda nada, es una clase suelta.
- **Buenas practicas**:
  - Usar herencia solo cuando hay relacion "es un": un Perro ES un Animal.
  - No abusar de herencia: si solo reutilizas codigo, preferi composicion.
  - Mantener la cadena de herencia razonable (no 5 niveles de profundidad).

## super
- **Que es**: Una palabra clave que llama al constructor o a metodos de la clase padre. Es como avisar al padre: "che, primero armas tu parte, que yo despues pongo la mia".
- **Cuándo usarlo**: En el constructor de una clase hija (para inicializar el padre) y dentro de metodos override (para acceder al metodo del padre).
- **Sintaxis**:
```js
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }
  describir() {
    return `Vehiculo ${this.marca}`;
  }
}

class Auto extends Vehiculo {
  constructor(marca, puertas) {
    super(marca);          // llama al constructor de Vehiculo
    this.puertas = puertas;
  }
  describir() {
    return `${super.describir()} con ${this.puertas} puertas`;
    // super.describir() llama al metodo del padre
  }
}
```
- **Metodos internos**:
| Metodo | Que hace | Ejemplo | Resultado |
|---|---|---|---|
| `super()` | Llama al constructor del padre | `super(marca)` | Inicializa `this.marca` |
| `super.metodo()` | Llama al metodo del padre | `super.describir()` | `"Vehiculo Toyota"` |
- **Errores comunes**:
  - Usar `super()` sin `extends`: tira `SyntaxError`.
  - Usar `this` antes de `super()` en el constructor: tira `ReferenceError`.
  - Llamar `super()` dos veces: solo se puede llamar una vez en el constructor.
- **Buenas practicas**:
  - Siempre llamar `super()` primero en el constructor de la hija.
  - Usar `super.metodo()` cuando queres extender el comportamiento del padre, no reemplazarlo.
  - No abusar de `super` en metodos: si el padre hace todo bien, no lo llames.

## override
- **Que es**: Redefinir un metodo de la clase padre en la hija, con el mismo nombre pero comportamiento diferente. Es como un hijo que hereda el gusto por el asado pero lo come con chimichurri en vez de salsa criolla.
- **Cuándo usarlo**: Cuando la clase hija necesita un comportamiento distinto al del padre para ese metodo. Si el padre ya hace lo que necesitas, no lo pises.
- **Sintaxis**:
```js
class Animal {
  hablar() {
    return 'Sonido generico';
  }
}

class Gato extends Animal {
  hablar() {              // override: mismo nombre, otro comportamiento
    return 'Miau';
  }
}
```
- **Metodos internos**: Ninguno propio (es simplemente redefinir un metodo existente).
- **Errores comunes**:
  - Cambiar el nombre del metodo al hacer override: no se pisa, se crea uno nuevo.
  - No llamar `super.metodo()` cuando necesitas el comportamiento original.
  - Hacer override sin querer: si la hija define un metodo con el mismo nombre que el padre, se pisa automaticamente.
- **Buenas practicas**:
  - Solo hacer override cuando el comportamiento realmente cambia.
  - Documentar que es override con un comentario si no es obvio.
  - Usar `super.metodo()` para reutilizar lo que hace el padre y agregar algo mas.

## instanceof
- **Que es**: Un operador que comprueba si un objeto es de una clase o viene de alguna de sus clases padre. Es como preguntar "este perro es un animal?" y la respuesta es si, porque Perro hereda de Animal.
- **Cuándo usarlo**: Cuando necesitas saber de que tipo es un objeto, especialmente con herencia. Por ejemplo, en una funcion que recibe un Animal y quiere saber si es un Perro o un Gato.
- **Sintaxis**:
```js
class Animal {}
class Perro extends Animal {}

const firulais = new Perro();

firulais instanceof Perro;    // true
firulais instanceof Animal;   // true (viene de Animal)
firulais instanceof Array;    // false
```
- **Metodos internos**: Ninguno propio (es un operador del lenguaje).
- **Errores comunes**:
  - Confundir con `typeof`: `typeof` devuelve string (`"object"`), `instanceof` devuelve boolean.
  - Olvidar que mira la cadena de herencia: un Perro instanceof Animal es `true`.
  - Usar con primitivos: `"hola" instanceof String` es `false` (usa `typeof` para primitivos).
- **Buenas practicas**:
  - Usar `instanceof` cuando necesites comportamiento distinto segun el tipo.
  - No abusar: si tenes muchos `instanceof` encadenados, tal vez necesitas un patron distinto.
  - Combinar con polimorfismo: en vez de `instanceof`, preferi que cada clase tenga su propio metodo.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-clase-basica.js` | class, constructor, propiedades, metodos, privados, getters, static |
| `ejemplos/02-herencia.js` | extends, super, override, instanceof |
| `ejemplos/03-getters-setters.js` | validacion con setters, getters calculados |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-rectangulo.js` | clase Rectangulo con area, perimetro, esCuadrado |
| `ejercicios/ej-02-cuenta.js` | cuenta bancaria con campo privado y getter |
| `ejercicios/ej-03-herencia.js` | vehiculos con herencia y override |
| `ejercicios/ej-04-banco.js` | banco que maneja cuentas con Map |
