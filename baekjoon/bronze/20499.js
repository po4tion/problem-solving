// #20499 Darius님 한타 안 함?
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  const [K, D, A] = line.split('/').map((x) => +x);
  let answer = '';

  if (K + A < D || D === 0) answer += 'hasu';
  else answer += 'gosu';

  console.log(answer);
  rl.close();
});

/* 
Input
0/5/3
Output
hasu

Input
12/4/5
Output
gosu

Input
0/0/1
Output
hasu
*/
