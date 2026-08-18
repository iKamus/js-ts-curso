/*
Ejercicio 1 — Clase Rectángulo
Creá una clase Rectangulo. Una clase es como un molde: definís la forma
una vez, y después hacés todos los rectángulos que quieras con new.

Paso a paso:
1) Creá la clase con un constructor que reciba base y altura y las
   guarde así: this.base = base; this.altura = altura;
   (this se refiere al rectángulo que estás armando, como decir
   "este rectángulo en particular".)
2) Agregale estos métodos (funciones de la clase):
   - area()      → devuelve base * altura (cuántos metros cuadrados
                    tiene el terreno)
   - perimetro() → devuelve 2 * (base + altura) (la vuelta completa)
   - esCuadrado()→ devuelve true si base === altura (un cuadradito
                    perfecto) y false si no
3) Creá dos rectángulos con new:
   - uno de 4x6
   - otro de 5x5
4) Mostrá los resultados con el formato:
   "area 4x6=24 perimetro=20 esCuadrado=false"

Resultado esperado:
area 4x6=24 perimetro=20 esCuadrado=false
area 5x5=25 perimetro=20 esCuadrado=true
*/

// completá acá