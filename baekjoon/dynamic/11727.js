// 11727번 2xn 타일링2

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0,
  v = 1;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  const answer = [, 1];

  for (let i = 2; i <= input; i++) {
    answer[i] = (answer[i - 1] * 2 + v) % 10007;
    v *= -1;
  }

  console.log(answer[input]);
});
