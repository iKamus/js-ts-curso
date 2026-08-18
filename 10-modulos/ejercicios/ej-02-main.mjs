/*
Ejercicio 2 — Módulo ES con default y named

Ahora con ES Modules (la forma moderna). Acá hay dos tipos de export:
- los named exports (los que tienen nombre, se importan entre llaves {})
- el export default (UNO solo por archivo, se importa sin llaves,
  como el plato del día del comedor)

PARTE 1 — Crear el módulo:
1) Creá en la carpeta ejercicios un archivo nuevo llamado `datos.mjs`
   (la extensión .mjs es la que le avisa a Node que es un módulo ES).
2) Adentro definí lo que pide el ejercicio, fijándote en el ejemplo
   `lib/matematicas.mjs` para imitar los dos tipos de export:
   - export const lista = ['rojo', 'verde', 'azul'];   (named)
   - una función primerColor() que devuelva lista[0]       (named)
   - una función contar() que devuelva lista.length        (named)
   - una función version() que devuelva 'v1.0.0'           (default)
   Fijate: cada función usa la variable lista, que está en el mismo
   archivo. Ese es el módulo: código que vive en un archivo aparte.

PARTE 2 — Usar el módulo (en ESTE archivo):
3) Importá todo en UNA sola línea. Fijate cómo se importa en
   `uso-esm.mjs`: el default va sin llaves, los named van entre
   llaves {}. Tu módulo se llama `datos.mjs` y vive en esta
   misma carpeta.
4) Mostrá los resultados:
   - version()       → 'v1.0.0'
   - primerColor()   → 'rojo'
   - contar()        → 3

Corré: node ej-02-main.mjs

Resultado esperado:
v1.0.0
rojo
3
*/

// completá acá (import + llamadas)