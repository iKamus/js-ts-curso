# Proyecto Modulo 07 -- Contador de palabras

## Contexto
Viste Set y Map: dos colecciones especiales para guardar valores unicos y pares clave-valor. Ahora es momento de juntar todo en algo practico: analizar un texto, contar cuantas veces aparece cada palabra, encontrar la mas comun, y sacar las letras repetidas con Set.

## Que vas a hacer
Vas a crear un programa que tome un texto, cuente la frecuencia de cada palabra con Map, encuentre la palabra mas comun, y deduplic las letras del texto con Set.

## Requisitos funcionales
1. Declara un texto con const:
   ```js
   const texto = 'hola mundo hola javascript hola mundo hola';
   ```

2. Crea un Map de frecuencias. Recorre el texto splitteado por espacio y guarda cada palabra como clave y la cantidad de apariciones como valor.
   Usa el patron: `mapa.set(palabra, (mapa.get(palabra) || 0) + 1)`

3. Muestra las frecuencias con un for...of que imprima cada entrada como `${palabra}: ${cantidad}`.

4. Encuentra la palabra mas comun: recorre el Map y queda con la que tiene mayor valor. Muestra el resultado como `La palabra mas comun es: "X" (N veces)`.

5. Crea un Set con las letras del texto (sin espacios). Muestra el Set como array ordenado con `[...set].sort()`.

6. Muestra cuantas letras unicas tiene el texto: `El texto tiene X letras unicas`.

## Tips
- Para dividir el texto en palabras: `texto.split(' ')`.
- Para sacar los espacios del texto (para las letras): `texto.replaceAll(' ', '')` o `texto.split('').filter(c => c !== ' ')`.
- El Set automaticamente elimina duplicados: si el texto tiene "h" tres veces, el Set solo guarda una.
- Para encontrar el maximo, podes ir comparando con una variable que guarde el maximo hasta el momento.
- No olvides que `Set` no tiene `.length`, usa `.size`.
- Primero divide, despues cuenta, despues busca el maximo. Paso a paso.

## Criterios de evaluacion
- El Map se crea correctamente con las frecuencias de cada palabra.
- Las frecuencias se muestran en el formato correcto (`palabra: cantidad`).
- La palabra mas comun se identifica correctamente.
- El Set de letras unicas se muestra ordenado.
- Se usa Map para frecuencias y Set para deduplicar letras.
- Se usan const y let correctamente.

## Resultado esperado
--- Frecuencias ---
hola: 4
mundo: 2
javascript: 1
--- Palabra mas comun ---
La palabra mas comun es: "hola" (4 veces)
--- Letras unicas ---
[ 'a', 'c', 'd', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v' ]
El texto tiene 16 letras unicas
