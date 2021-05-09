// 2475번 검증수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => parseInt(x, 10));
}).on('close', () => {
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    sum += input[i] * input[i];
  }

  const answer = sum % 10;

  console.log(answer);
});
