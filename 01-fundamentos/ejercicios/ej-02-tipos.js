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

3) Responde con booleanos (guarda en variables con nombre descriptivo):
   - esVerdadero1: ¿valor1 se comporta como verdadero? (guarda el resultado de
    Boolean(valor1))
   - esVerdadero2: ¿valor2 se comporta como verdadero?
   - esVerdadero3: ¿valor3 se comporta como verdadero?
   - esVerdadero5: ¿valor5 se comporta como verdadero?

4) Para el paso 3, imprime cada resultado con un console.log que
   diga algo como:
   "valor1 = '42' → Boolean: true"

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
