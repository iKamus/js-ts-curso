/*
Ejercicio 4 — Calculadora con try/catch
Crea calcular(expresion) que reciba algo como '2+3' o '8*4'
(solo las operaciones +, -, *, /).
Piensalo como resolver una cuenta en el pizarron: primero buscas el
signo, despues separas los numeros a cada lado, y si algo no cierra,
avisas con un error en vez de inventar un resultado.

Paso a paso:
1) Busca cual operador tiene la expresion. Puedes preguntar con includes:
   expresion.includes('+'), expresion.includes('-'), etc.
   Tip: ojo con el signo menos: si el numero es negativo, el '-' aparece
   al inicio. Por ahora asumi que los numeros son positivos.
2) Separala en dos partes con split. Por ejemplo:
   expresion.split('+') te da un array con la parte de antes y la de
   despues del signo.
3) Convierte las dos partes a numero con Number(...) y opera segun
   el operador que encontraste.
4) Tira errores (throw new Error(...)) cuando algo no cierre:
   - si la expresion NO tiene ningun operador → 'Expresion invalida'
   - si el operador es '/' y el segundo numero es 0 → 'No se puede dividir por cero'
   Tip: si despues del split el array tiene largo 1, significa que
   no habia operador.
5) Envuelve las llamadas en try/catch:
   - si funciona → muestra 'Resultado: <numero>'
   - si tira error → muestra 'Error: <mensaje>'

Prueba: '2+3', '10-5', '8*4', '2/0', 'abc'

Resultado esperado:
Resultado: 5
Resultado: 5
Resultado: 32
Error: No se puede dividir por cero
Error: Expresion invalida
*/

// completa aqui
