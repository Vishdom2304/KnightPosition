const read = require('readline-sync')

let p = read.question('Input x-coordinate: ')
console.log(p)
let q = read.question('Input y-coordinate: ')
console.log(q)

let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

for (let i = 0; i < 8; i++) {
   
  let x = Number(p) + X[i];
  let y = Number(q) + Y[i];

  // count valid moves
  //console.log(x + ' ' + y);
  if (x >= 1 && y >= 1 && x <= 8 && y <= 8)
      console.log(x + ' ' + y);
}
