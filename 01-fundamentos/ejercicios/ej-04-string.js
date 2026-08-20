/*
Ejercicio 4 — Manipulacion basica de strings

Consigna: Transforma y consulta un texto usando metodos de string.

Texto inicial:
  const texto = '  JavaScript ES INCREIBLE  ';

Pasos:
1. Limpia los espacios de los extremos con trim() y guardalo en textoLimpio.
2. Convierte el texto limpio a mayusculas con toUpperCase() y guardalo en textoMayusculas.
3. Convierte el texto limpio a minusculas con toLowerCase() y guardalo en textoMinusculas.
4. Obtiene la longitud en caracteres del texto limpio (.length) y guardala en longitud.
5. Extrae los primeros 10 caracteres con slice(0, 10) y guardalos en primeros10.
6. Extrae los ultimos 9 caracteres con slice(-9) y guardalos en ultimos9.
7. Reemplaza 'INCREIBLE' por 'GENIAL' usando replace() y guardalo en textoReemplazado.
8. Imprime cada uno de los resultados con su respectiva etiqueta.

Tips:
- Los metodos de string nunca modifican el string original, siempre retornan uno nuevo.
- slice(inicio, fin) no incluye el indice del final.
- slice con indice negativo cuenta desde el final hacia atras.

Resultado esperado:
Texto limpio: 'JavaScript ES INCREIBLE'
Mayusculas: 'JAVASCRIPT ES INCREIBLE'
Minusculas: 'javascript es increible'
Longitud: 23
Primeros 10: 'JavaScript'
Ultimos 9: 'INCREIBLE'
Reemplazado: 'JavaScript ES GENIAL'
*/

const texto = '  JavaScript ES INCREIBLE  ';

// completa aqui
