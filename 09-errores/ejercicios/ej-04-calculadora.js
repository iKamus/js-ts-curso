/*
Ejercicio 4 — Calculadora con try/catch
Creá calcular(expresion) que reciba algo como '2+3' o '8*4'
(solo las operaciones +, -, *, /).
Pensalo como resolver una cuenta en el pizarrón: primero buscás el
signo, después separás los números a cada lado, y si algo no cierra,
avisás con un error en vez de inventar un resultado.

Paso a paso:
1) Buscá cuál operador tiene la expresión. Podés preguntar con includes:
   expresion.includes('+'), expresion.includes('-'), etc.
   (Ojo: el '-' va a aparecer solo en restas, los números son positivos.)
2) Separala en dos partes con split: expresion.split('+') te da un
   array con la parte de antes y la de después del signo.
3) Convertí las dos partes a número con Number(...) y operá según
   el operador que encontraste.
4) Tirame errores (throw new Error(...)) cuando algo no cierre:
   - si la expresión NO tiene ningún operador → 'Expresión inválida'
   - si el operador es '/' y el segundo número es 0 → 'No se puede dividir por cero'
5) Envolvé las llamadas en try/catch:
   - si funciona → mostrá 'Resultado: <número>'
   - si tira error → mostrá 'Error: <mensaje>'

Probá: '2+3', '10/2', '8*4', '2/0', 'abc'
Resultado esperado:
Resultado: 5
Resultado: 5
Resultado: 32
Error: No se puede dividir por cero
Error: Expresión inválida
*/

// completá acá