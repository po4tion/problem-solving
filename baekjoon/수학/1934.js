// 1934번 최소공배수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', () => {
  const testCase = input.shift();
  let answer = '';

  for (let i = 0; i < testCase; i++) {
    answer += least(Math.max(...input[i]), Math.min(...input[i])) + '\n';
  }

  console.log(answer);
});

function least(a, b) {
  const [a_, b_] = [a, b];
  let r;

  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return (a_ * b_) / a;
}
