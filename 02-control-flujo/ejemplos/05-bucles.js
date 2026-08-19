// 05-bucles.js — Bucles

// for — cuando sabes cuantas veces (como contar del 1 al 5 con los dedos)
for (let i = 1; i <= 5; i++) {
  console.log('i =', i);
}

// while — la condicion define el final (como seguir caminando mientras haya cuadras)
let n = 0;
while (n < 3) {
  console.log('n =', n);
  n++;
}

// do...while — ejecuta al menos una vez (como probar la sopa antes de decidir si sigues)
let m = 10;
do {
  console.log('m =', m);
  m++;
} while (m < 3); // la condicion es falsa pero igual corrio una vez

// break y continue
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;  // saltea el 3 (te saltas la cancion)
  if (i === 6) break;     // corta en el 6 (frenas la playlist de golpe)
  console.log(i);
}
// 1 2 4 5
