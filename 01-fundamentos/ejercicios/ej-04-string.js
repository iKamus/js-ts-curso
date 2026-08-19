/*
Ejercicio 4 -- Manipulador de texto

Vas a recibir un texto y vas a usar TODOS los metodos de string que
aprendiste para transformarlo, analizarlo y reformatearlo.
Esto es como una cadena de produccion: cada paso le hace una
operacion distinta al texto.

Texto de trabajo:
*/

const texto = '  JavaScript ES increible para aprender programacion  ';

/*
Pasos (uno por console.log):

1) Limpia los espacios de los extremos (trim) y guárdalo en textoLimpio.
   Imprime: "Texto limpio: 'JavaScript ES increible para aprender programacion'"

2) Convierte todo a minusculas y guárdalo en textoMin.
   Imprime: "Minusculas: 'javascript es increible para aprender programacion'"

3) Convierte todo a mayusculas y guárdalo en textoMay.
   Imprime: "Mayusculas: 'JAVASCRIPT ES INCREIBLE PARA APRENDER PROGRAMACION'"

4) Cuenta cuantos caracteres tiene el texto limpio (sin espacios extra).
   Imprime: "Longitud: 50"

5) Chequea si el texto contiene la palabra "JavaScript" (con la J
   mayuscula, sobre el texto limpio).
   Imprime: "Contiene JavaScript: true"

6) Chequea si el texto empieza con "Java" (sobre textoLimpio).
   Imprime: "Empieza con Java: true"

7) Chequea si el texto termina con "programacion" (sobre textoLimpio).
   Imprime: "Termina con programacion: true"

8) Busca la posicion de la primera "a" en textoLimpio.
   Imprime: "Primera 'a' en posicion: 1"

9) Recorta los primeros 10 caracteres de textoLimpio con slice(0, 10).
   Imprime: "Recorte: 'JavaScript'"

10) Recorta los ultimos 4 caracteres de textoLimpio con slice(-4).
    Imprime: "Ultimos 4: 'cion'"

11) Reemplaza "increible" por "genial" en textoLimpio (con replace).
    Imprime: "Reemplazado: 'JavaScript ES genial para aprender programacion'"

12) Reemplaza todas las "a" por "4" en textoLimpio (con replaceAll).
    Imprime: "Reemplazado all: 'J4v4Script ES increible p4r4 4prender progr4m4cion'"

13) Divide el textoLimpio en un array por el espacio y guárdalo en palabras.
    Imprime: "Palabras: [ 'JavaScript', 'ES', 'increible', 'para', 'aprender', 'programacion' ]"

14) Cuenta cuantas palabras hay (usa .length sobre el array palabras).
    Imprime: "Tiene 6 palabras"

Tips:
- Aplica trim ANTES de cualquier otra operacion sobre el texto.
- indexOf retorna -1 si no encuentra el substring.
- Recuerda: los strings son inmutables, cada metodo devuelve uno nuevo.
- replace solo cambia la primera aparicion; replaceAll cambia todas.
- split(' ') separa por espacios: 'hola mundo'.split(' ') -> ['hola', 'mundo']

Resultado esperado:
Texto limpio: 'JavaScript ES increible para aprender programacion'
Minusculas: 'javascript es increible para aprender programacion'
Mayusculas: 'JAVASCRIPT ES INCREIBLE PARA APRENDER PROGRAMACION'
Longitud: 50
Contiene JavaScript: true
Empieza con Java: true
Termina con programacion: true
Primera 'a' en posicion: 1
Recorte: 'JavaScript'
Ultimos 4: 'cion'
Reemplazado: 'JavaScript ES genial para aprender programacion'
Reemplazado all: 'J4v4Script ES increible p4r4 4prender progr4m4cion'
Palabras: [ 'JavaScript', 'ES', 'increible', 'para', 'aprender', 'programacion' ]
Tiene 6 palabras
*/

// completa aqui
