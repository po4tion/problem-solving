// #16428 A/B - 3
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => BigInt(x));
}).on('close', () => {
  const [A, B] = input;
  let q, r;

  q = A / B;
  r = A % B;

  if (A < 0) {
    if (B > 0) {
      q += -1n;
      r += B;
    } else if (B < 0) {
      q += 1n;
      r -= B;
    }
  }

  if (A === 0) {
    q = 0;
    r = 0;
  }

  console.log(q + '\n' + r);
});

/* 
Input
5 2

Output
2
1

Input
7 -3

Output
-2
1
*/
