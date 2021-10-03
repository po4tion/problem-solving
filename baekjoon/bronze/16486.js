// #16486 운동장 한 바퀴
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const [d1, d2] = input;
  const circle = d2 * 2 * 3.141592;
  const square = 2 * d1;

  console.log(circle + square);
});

/*
Input
13
8

Output
76.265472
*/
