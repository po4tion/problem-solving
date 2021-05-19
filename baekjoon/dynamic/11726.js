// 11727번 2xn 타일링

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  const answer = [, 1, 2];

  for (let i = 3; i <= input; i++)
    answer[i] = (answer[i - 1] + answer[i - 2]) % 10007;

  console.log(answer[input]);
});
