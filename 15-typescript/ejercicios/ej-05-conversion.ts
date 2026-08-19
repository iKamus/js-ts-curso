/*
Ejercicio 5 — Migrar un ejercicio de JS a TS
Imagina que tenes una receta hecha a ojo y ahora le pones medidas
exactas. Eso es migrar a TypeScript: mismo plato, pero con tipos.
Toma la clase Rectangulo del modulo 08 y reescribila en TS.

Paso a paso:
1) Crea la clase Rectangulo con un constructor que reciba
   base: number y altura: number, y los guarde con this.base = base;
   (En TS las propiedades de la clase se declaran arriba con su tipo:
     base: number;
     altura: number;
   y el constructor los asigna.)
2) El constructor valida los datos: si base <= 0 o altura <= 0,
   tira un error con throw new Error('...')
3) Agrega los metodos con su tipo de retorno:
   - area(): number         -> base * altura
   - perimetro(): number    -> 2 * (base + altura)
   - esCuadrado(): boolean  -> base === altura
4) Instancia un rectangulo 4x6 y otro 5x5 con new, y muestra los
   resultados con el formato de abajo.

Resultado esperado:
area 4x6=24 perimetro=20 esCuadrado=false
area 5x5=25 perimetro=20 esCuadrado=true
*/

// completá acá
