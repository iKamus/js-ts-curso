/*
Ejercicio 1 — Crear y usar un módulo CommonJS

En este ejercicio vas a armar tu primer módulo, como cuando separás el
material en una carpeta nueva para no perder nada. Un módulo es un
archivo que "exporta" cosas para que otros archivos las usen.

PARTE 1 — Crear el módulo:
1) Creá en la carpeta ejercicios un archivo nuevo llamado `utilidades.cjs`
   (podés crearlo con tu editor, o con un script; es un archivo de texto
   común y corriente).
2) Adentro definí tres funciones:
   - saludar(nombre)       → devuelve "Hola, <nombre>!"
   - capitalizar(texto)    → devuelve la primera letra en mayúscula
                             más el resto igual (como en el módulo 06)
   - contarPalabras(texto) → devuelve la cantidad de palabras:
                             cortás por espacios y contás los pedazos
                             (las herramientas están en el módulo 06)
3) Al final del archivo exportalas TODAS juntas en un objeto.
   Fijate cómo se exporta en `lib/matematicas.cjs`: module.exports
   es el "paquete" que le vas a entregar al que lo pida. Imitá ese
   patrón con tus tres funciones.

PARTE 2 — Usar el módulo (en ESTE archivo):
4) Importá el paquete. Fijate cómo se consume en `uso-cjs.cjs`
   (con require y la ruta relativa, que empieza con ./).
   Tu módulo se llama `utilidades.cjs` y vive en esta misma carpeta.
5) Usá las tres funciones con estos valores y mostrá los resultados:
   - saludar('Ana')
   - capitalizar('el clima es lindo')
   - contarPalabras('hola mundo js')

Corré: node ej-01-main.cjs

Resultado esperado:
Hola, Ana!
El clima es lindo
3
*/

// completá acá (require + llamadas)