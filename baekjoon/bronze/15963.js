// #15963 CASIO
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const [N, M] = input;

  if (N === M) console.log(1);
  else console.log(0);
});

/* 
Input
1 1

Output
1

Input
1 0

Output
0
*/
