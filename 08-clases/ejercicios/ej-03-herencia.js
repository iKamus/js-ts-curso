/*
Ejercicio 3 — Herencia de vehiculos
Crea una clase base Vehiculo, y despues dos clases que "heredan" de ella.
La herencia es como los hijos que heredan rasgos de los padres: Auto y
Moto son Vehiculos (heredan su estructura), pero cada uno agrega sus
cosas propias.

Paso a paso:
1) Crea la clase Vehiculo(marca, anio) con un metodo describir() que
   devuelva: "Vehiculo <marca> del anio <anio>"
   (en el constructor: this.marca = marca; this.anio = anio;)
2) Crea la clase Auto que HEREDA de Vehiculo:
   - class Auto extends Vehiculo { ... }
- su constructor recibe (marca, anio, puertas). Primero tiene que
      llamar al constructor del padre con super(marca, anio). super es
      como avisar al padre: "primero armas tu parte, que yo despues
      pongo la mia". Despues guardas this.puertas = puertas.
   - pisa (override) el metodo describir() para que devuelva:
     "Auto <marca> (<anio>), <puertas> puertas"
3) Crea la clase Moto que hereda de Vehiculo:
   - igual que Auto pero con cilindrada en vez de puertas.
   - describir() devuelve: "Moto <marca> (<anio>), <cilindrada> cc"
4) Crea un Auto Toyota (2019, 4 puertas) y una Moto Honda (2021, 150 cc)
   y muestra el describir() de cada uno.

Tip: observa el README del modulo (secciones herencia y override) para
ver como funciona extends, super y override. El orden en el constructor
es importante: super() primero, despues this.

Resultado esperado:
Auto Toyota (2019), 4 puertas
Moto Honda (2021), 150 cc
*/

// completa aqui
