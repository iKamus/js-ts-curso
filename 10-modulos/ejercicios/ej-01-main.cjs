/*
Ejercicio 1 — Crear y usar un modulo CommonJS

En este ejercicio vas a armar tu primer modulo, como cuando separas el
material en una carpeta nueva para no perder nada. Un modulo es un
archivo que "exporta" cosas para que otros archivos las usen.

PARTE 1 — Crear el modulo:
1) Creá en la carpeta ejercicios un archivo nuevo llamado `utilidades.cjs`
   (un archivo de texto comun y corriente con esa extension).
2) Adentro define tres funciones:
   - saludar(nombre)       → devuelve "Hola, <nombre>!"
   - capitalizar(texto)    → devuelve la primera letra en mayuscula
                             mas el resto igual (como en el modulo 06)
   - contarPalabras(texto) → devuelve la cantidad de palabras:
                             cortás por espacios y contas los pedazos
                             (usá split, la herramienta del modulo 06)
3) Al final del archivo exportalas TODAS juntas en un objeto.
   Fijate como se exporta en `lib/matematicas.cjs`: module.exports
   es el "paquete" que le vas a entregar al que lo pida. Imita ese
   patron con tus tres funciones.

PARTE 2 — Usar el modulo (en ESTE archivo):
4) Importa el paquete. Fijate como se consume en `uso-cjs.cjs`
   (con require y la ruta relativa, que empieza con ./).
   Tu modulo se llama `utilidades.cjs` y vive en esta misma carpeta.
5) Usa las tres funciones con estos valores y muestra los resultados:
   - saludar('Ana')
   - capitalizar('el clima es lindo')
   - contarPalabras('hola mundo js')

Corre: node ej-01-main.cjs

Resultado esperado:
Hola, Ana!
El clima es lindo
3
*/

// completá acá (require + llamadas)
