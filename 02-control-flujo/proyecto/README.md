# Proyecto — Adivina el numero

## Consigna

Crear un juego "Adivina el numero" donde el programa tiene un numero secreto y el intento del usuario esta hardcodeado. El programa compara ambos y responde si es mayor, menor o correcto.

Esto integra: condicionales if/else, comparaciones, operadores logicos (&&), y el operador ternario.

## Requisitos

1. Definir un `numeroSecreto` (por ejemplo 7).
2. Definir un `intento` (por ejemplo 5).
3. Usar if / else if / else para comparar:
   - Si el intento es igual al secreto: "Correcto!"
   - Si el intento es menor: "El numero es mayor".
   - Si el intento es mayor: "El numero es menor".
4. Usar un ternario para guardar en una variable `resultado` el texto "acierto" o "fallo".
5. Usar un operador && (short-circuit) para imprimir un mensaje extra solo si el intento es par: "Tu intento era par".

## Tips

- Para el ternario, la sintaxis es: `condicion ? valorSiVerdadero : valorSiFalso`.
- Para el && short-circuit: `condicion && console.log('mensaje')` ejecuta el console.log solo si la condicion es verdadera.
- Recuerda que `===` compara valor y tipo (no confundir con `=` que asigna).

## Resultado esperado

Con `numeroSecreto = 7` e `intento = 5`:

```
Tu numero: 5
El numero es mayor
Tu intento era par
Resultado: fallo
```

Con `numeroSecreto = 7` e `intento = 7`:

```
Tu numero: 7
Correcto!
Tu intento era impar
Resultado: acierto
```

Con `numeroSecreto = 7` e `intento = 9`:

```
Tu numero: 9
El numero es menor
Tu intento era impar
Resultado: fallo
```
