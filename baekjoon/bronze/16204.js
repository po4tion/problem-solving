// #16204 카드 뽑기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const [N, M, K] = input;
  let sum = 0;

  if (M >= K) sum += K;
  else sum += M;

  if (N - M >= N - K) sum += N - K;
  else sum += N - M;

  console.log(sum);
});

/* 
Input
4 3 2

Output
3

Input
10 0 10

Output
0

Input
5 3 3

Output
5
*/
