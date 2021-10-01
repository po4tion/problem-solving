// #14470 전자레인지
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const [A, B, C, D, E] = input;

  if (A < 0) {
    const first = Math.abs(A) * C;
    const second = D;
    const third = B * E;

    console.log(first + second + third);
  } else {
    const first = (B - A) * E;

    console.log(first);
  }
});

/* 
Input
-10
20
5
10
3

Output
120
*/
