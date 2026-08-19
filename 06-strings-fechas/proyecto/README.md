# Proyecto Modulo 06 -- Generador de contrasenas

## Contexto
Ya tenes las bases: metodos de string para manipular texto, Math para generar numeros aleatorios, y Date para saber que dia es. Ahora es momento de juntar TODO en algo practico: un generador de contrasenas que combines, modifiques y adaptes a tu gusto.

## Que vas a hacer
Vas a crear un programa que genere contrasenas aleatorias de distintas longitudes y niveles de seguridad, usando string methods, Math.random, Math.floor y la formula de aleatorio entre min y max.

## Requisitos funcionales

1. Crea una funcion `generarPassword(longitud)` que devuelva una contrasena aleatoria.

2. La contrasena debe usar estos caracteres:
   - Minusculas: `'abcdefghijklmnopqrstuvwxyz'`
   - Mayusculas: `'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`
   - Numeros: `'0123456789'`
   - Simbolos: `'!@#$%^&*'`

3. La contrasena debe tener exactamente la longitud que se pida.

4. Crea una segunda funcion `generarPasswordSegura(longitud)` que:
   - Asegure que la contrasena tenga al menos 1 minuscula, 1 mayuscula, 1 numero y 1 simbolo.
   - Para eso, podes generar la contrasena primero y despues verificar que cumpla. Si no cumple, generala de nuevo (o armala obligando que tenga al menos uno de cada tipo).

5. Muestra en pantalla:
   - 3 contrasenas de 8 caracteres
   - 3 contrasenas de 12 caracteres
   - 3 contrasenas seguras de 16 caracteres

6. Usa `padStart` para que las contrasenas cortas (menos de 10 caracteres) se muestren alineadas con ceros a la izquierda en el console.log (esto es solo estetico, es parte del ejercico de formateo).

## Estructura del archivo

El archivo `generador.js` tiene la plantilla incompleta. Completa las partes marcadas con `// completa aca`.

## Tips

- Para elegir un caracter al azar, usa la formula: `Math.floor(Math.random() * caracteres.length)`. Eso te da un indice valido dentro del string de caracteres.
- Para asegurar que la contrasena segura tenga al menos uno de cada tipo, podes:
  - Generar primero una contrasena aleatoria normal.
  - Despues verificar con `includes` si tiene al menos una minuscula, una mayuscula, un numero y un simbolo.
  - Si no tiene todo, generala de nuevo (o reemplaza posiciones especificas).
- Recorda que los strings son inmutables: no podes hacer `password[0] = 'X'`. Para "modificar" un caracter, genera un nuevo string concatenando.
- Usa `padStart` solo para mostrar, no para la contrasena en si.

## Resultado esperado

```
=== Generador de contrasenas ===

Contrasenas de 8 caracteres:
aK9$dF2!
mP3&xL1!
7hR#kQ2$

Contrasenas de 12 caracteres:
aK9$dF2!xQ4m
nP3&zL1!wR8
7hR#kQ2$eY5

Contrasenas seguras de 16 caracteres:
aK9$dF2!xQ4mNp3z
nP3&zL1!wR8kQ2$e
7hR#kQ2$eY5mP3&x

(Notas: los resultados son aleatorios, pero deben cumplir las longitudes
y las restricciones de cada tipo.)
```
