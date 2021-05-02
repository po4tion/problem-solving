// 팩토리얼
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = +line;
  rl.close();
}).on('close', () => {
  const answer = factorial(input);

  console.log(answer);
});

function factorial(value) {
  if (!value) return 1;

  return value * factorial(value - 1);
}
