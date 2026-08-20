/*
Ejercicio 2 — Modulo ES con default y named

Ahora con ES Modules (la forma moderna). Hay dos tipos de export:
- los named exports (los que tienen nombre, se importan entre llaves {})
- el export default (UNO solo por archivo, se importa sin llaves,
  como el plato del dia del comedor)

PARTE 1 — Crear el modulo:
1) Crea en la carpeta ejercicios un archivo nuevo llamado `datos.mjs`
   (la extension .mjs es la que le avisa a Node que es un modulo ES).
2) Adentro define lo que pide el ejercicio, fijandote en el ejemplo
   `lib/matematicas.mjs` para imitar los dos tipos de export:
   - export const lista = ['rojo', 'verde', 'azul'];   (named)
   - una funcion primerColor() que devuelva lista[0]       (named)
   - una funcion contar() que devuelva lista.length        (named)
   - una funcion version() que devuelva 'v1.0.0'           (default)
   Observa: cada funcion usa la variable lista, que esta en el mismo
   archivo. Eso es el modulo: codigo que vive en un archivo aparte.

PARTE 2 — Usar el modulo (en ESTE archivo):
3) Importa todo en UNA sola linea. Observa como se importa en
   `uso-esm.mjs`: el default va sin llaves, los named van entre
   llaves {}. Tu modulo se llama `datos.mjs` y vive en esta
   misma carpeta.
4) Muestra los resultados:
   - version()       → 'v1.0.0'
   - primerColor()   → 'rojo'
   - contar()        → 3

Corre: node ej-02-main.mjs

Resultado esperado:
v1.0.0
rojo
3
*/

// completa aqui (import + llamadas)
