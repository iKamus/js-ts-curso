// 02-dates.js -- Date
// Las fechas en JS se guardan como un numero gigante (milisegundos), pero vos las lees como calendario.

const ahora = new Date();
console.log('ahora:', ahora);

// Meses van de 0 a 11: agosto = 7.
// Este es el clasico error: enero es 0 y diciembre es 11, como los indices de los arrays.
const fecha = new Date(2026, 7, 15);
console.log('anno:', fecha.getFullYear());   // 2026
console.log('mes:', fecha.getMonth());      // 7 (agosto)
console.log('dia:', fecha.getDate());       // 15
console.log('dia semana:', fecha.getDay()); // 6 (sabado; domingo = 0)

// Desde un string ISO
// El formato estandar tipo "2026-08-15T10:30:00" tambien se entiende perfecto.
const iso = new Date('2026-08-15T10:30:00');
console.log(iso.toISOString());         // 2026-08-15T10:30:00.000Z
console.log(iso.toLocaleDateString());  // formato local (15/8/2026)
console.log(iso.getTime());             // milisegundos desde 1970

// Diferencia de tiempo en ms
// Para medir cuanto tardo algo, agarras el tiempo antes y despues, como con un cronometro.
const inicio = Date.now();
// ...algo que tarde un poco...
const fin = Date.now();
console.log('pasaron', fin - inicio, 'ms');

// Dias entre dos fechas
// Si restas dos fechas te da milisegundos; divides por los ms que tiene un dia y listo.
const d1 = new Date(2026, 0, 1);
const d2 = new Date(2026, 11, 31);
const dias = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log('dias entre:', dias); // 364
