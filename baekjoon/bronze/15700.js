// #15700 타일 채우기 4
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const [N, M] = input;
  const answer = (BigInt(N) * BigInt(M)) / 2n;

  console.log(answer + '');
});

/* 
Input
1 2

Output
1
*/
