// #10156 과자
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const [k, n, m] = input,
    buy = k * n;
  let answer = 0;

  if (buy > m) answer = buy - m;
  else answer = 0;

  console.log(answer);
});
