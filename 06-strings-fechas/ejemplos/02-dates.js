// 02-dates.js — Date
// Las fechas en JS se guardan como un número gigante (milisegundos), pero vos las leés como calendario.

const ahora = new Date();
console.log('ahora:', ahora);

// ¡meses van de 0 a 11! agosto = 7
// Che, este es el clásico error: enero es 0 y diciembre es 11, como los índices de los arrays.
const fecha = new Date(2026, 7, 15);
console.log('año:', fecha.getFullYear());   // 2026
console.log('mes:', fecha.getMonth());      // 7 (agosto)
console.log('día:', fecha.getDate());       // 15
console.log('día semana:', fecha.getDay()); // 6 (sábado; domingo = 0)

// desde un string ISO
// El formato estándar tipo "2026-08-15T10:30:00" también se entiende perfecto.
const iso = new Date('2026-08-15T10:30:00');
console.log(iso.toISOString());         // 2026-08-15T10:30:00.000Z
console.log(iso.toLocaleDateString());  // formato local (15/8/2026)
console.log(iso.getTime());             // milisegundos desde 1970

// diferencia de tiempo en ms
// Para medir cuánto tardó algo, agarrás el tiempo antes y después, como con un cronómetro.
const inicio = Date.now();
// ...algo que tarde un poco...
const fin = Date.now();
console.log('pasaron', fin - inicio, 'ms');

// días entre dos fechas
// Si restás dos fechas te da milisegundos; dividís por los ms que tiene un día y listo.
const d1 = new Date(2026, 0, 1);
const d2 = new Date(2026, 11, 31);
const dias = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log('días entre:', dias); // 364