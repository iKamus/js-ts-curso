/*
Ejercicio 2 — Tipos y conversiones
Acá el tema es cambiar de "material": convertir texto a número y de vuelta,
como pasar de anotado en papel a guardado en la calculadora.

Ya te dejé dos variables listas:
  const numeroTexto = '123';   // ojo: está ENTRE COMILLAS, o sea que es un TEXTO
  const b = true;              // un sí/no (booleano)

Lo que tenés que hacer, paso a paso:
1) Convertí numeroTexto a número y guardalo en una variable nueva llamada numero.
   Ojo: '123' es un TEXTO, así que no lo podés sumar directamente. Hay una
   herramienta para cambiar de material, la viste en ejemplos/02-tipos.js
   (fijate en la parte de "Conversiones"). Buscala y usala.
2) Sumá numero + 1 y guardalo en una variable nueva llamada resultado.
   Si no convertiste bien, acá te vas a dar cuenta: el resultado sería raro.
3) Convertí b a texto y guardalo en una variable nueva llamada bTexto.
   Misma idea que el paso 1, pero para el otro lado: del sí/no al texto.
4) Imprimí con typeof cada una de las tres variables: numero, resultado y bTexto.
   typeof te dice de qué tipo es cada valor (number, string, boolean...),
   como la etiqueta del frasco que dice qué hay adentro.

Formato de salida (en una línea por variable):
  numero=123 type=number
  resultado=124 type=number
  bTexto=true type=string

Resultado esperado:
numero=123 type=number
resultado=124 type=number
bTexto=true type=string
*/

const numeroTexto = '123';
const b = true;

// completá acá
