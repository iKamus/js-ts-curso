/*
Ejercicio 2 — El detective de tipos

Vas a recibir valores misteriosos y tu trabajo es: descubrir qué tipo
son, convertirlos cuando haga falta, y responder preguntas sobre ellos.
Todo con typeof, Number(), String(), Boolean(), parseInt y parseFloat.

Tienes estos valores:
*/

const valor1 = '42';
const valor2 = 0;
const valor3 = '';
const valor4 = '3.14cm';
const valor5 = null;
const valor6 = '100px';
const valor7 = true;

/*
Paso a paso:
1) Imprime typeof de cada valor (uno por línea, con etiqueta):
   - tipo de valor1: ...
   - tipo de valor2: ...
   etc.

2) Convierte y muestra:
   - Convierte valor1 a número con Number() y guárdalo en num1.
     Imprime: num1 y su tipo (typeof).
   - Convierte valor4 con parseFloat() y guárdalo en decimal1.
     Imprime: decimal1 y su tipo.
   - Convierte valor6 con parseInt() y guárdalo en entero1.
     Imprime: entero1 y su tipo.

3) Responde con booleanos: crea estas 4 variables usando Boolean():
   - const esVerdadero1 = Boolean(valor1);
   - const esVerdadero2 = Boolean(valor2);
   - const esVerdadero3 = Boolean(valor3);
   - const esVerdadero5 = Boolean(valor5);
   Boolean() convierte cualquier valor a true o false siguiendo las reglas
   de verdadero/falso que viste en la teoria.

4) Imprime cada resultado con este formato exacto:
   console.log(`valor1 = '${valor1}' → Boolean: ${esVerdadero1}`);
   console.log(`valor2 = ${valor2} → Boolean: ${esVerdadero2}`);
   console.log(`valor3 = '${valor3}' → Boolean: ${esVerdadero3}`);
   console.log(`valor5 = ${valor5} → Boolean: ${esVerdadero5}`);

Tips:
- typeof retorna un STRING, así que compara con typeof x === 'number'.
- parseFloat extrae el número decimal de un string: '3.14cm' → 3.14.
- parseInt extrae el entero de un string: '100px' → 100.
- Los valores que se comportan como falso son: false, 0, '', null, undefined, NaN.
  Todo lo demás se comporta como verdadero (incluido [], {} y el string '0').
- valor5 es null: typeof null es 'object' (bug histórico de JS).

Resultado esperado:
Tipo de valor1: string
Tipo de valor2: number
Tipo de valor3: string
Tipo de valor4: string
Tipo de valor5: object
Tipo de valor6: string
Tipo de valor7: boolean
num1 = 42, tipo: number
decimal1 = 3.14, tipo: number
entero1 = 100, tipo: number
valor1 = '42' → Boolean: true
valor2 = 0 → Boolean: false
valor3 = '' → Boolean: false
valor5 = null → Boolean: false
*/

// completa aqui

console.log(`Tipo de valor1: ${typeof(valor1)}`)
console.log(`Tipo de valor2: ${typeof(valor2)}`)
console.log(`Tipo de valor3: ${typeof(valor3)}`)
console.log(`Tipo de valor4: ${typeof(valor4)}`)
console.log(`Tipo de valor5: ${typeof(valor5)}`)
console.log(`Tipo de valor6: ${typeof(valor6)}`)
console.log(`Tipo de valor7: ${typeof(valor7)}`)

const num1 = Number(valor1)

console.log(`num1 = ${num1}, tipo: ${typeof(num1)}`)

const decimal1 = parseFloat(valor4)

console.log(`decimal1 = ${decimal1}, tipo: ${typeof(decimal1)}`)

const entero1 = parseInt(valor6)

console.log(`entero1 = ${entero1}, tipo: ${typeof(entero1)}`)