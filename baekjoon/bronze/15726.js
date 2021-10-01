// #15726 이칙연산
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const [A, B, C] = input;
  const first = Math.floor((A * B) / C);
  const second = Math.floor((A / B) * C);

  console.log(Math.max(first, second));
});

/* 
Input
32 16 8

Output
64
*/
