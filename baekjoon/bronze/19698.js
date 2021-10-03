// #19698 헛간 청약
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  const [N, W, H, L] = line.split(' ').map((x) => +x);
  const calc = Math.floor(W / L) * Math.floor(H / L);
  let answer = '';

  if (N <= calc) answer += N;
  else answer += calc;

  console.log(answer);
  rl.close();
});

/* 
Input
7 17 11 5

Output
6
*/
