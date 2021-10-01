// #13866 팀 나누기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  input.sort((a, b) => a - b);

  const a = input.shift() + input.pop();
  const b = input.shift() + input.pop();

  console.log(Math.abs(a - b));
});

/*
Input
4 7 10 20

Output
7
*/
