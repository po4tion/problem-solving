// #14924 폰 노이만과 파리
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const [S, T, D] = input;
  const meet = D / (S * 2);
  const fly = meet * T;

  console.log(fly);
});

/* 
Input
50 75 200

Output
150
*/
