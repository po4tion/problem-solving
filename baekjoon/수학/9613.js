// 9613번 GCD 합
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', () => {
  const testCase = +input.shift();
  let answer = '';

  for (let i = 0; i < testCase; i++) {
    answer += calc(input[i][0], input[i].splice(1)) + '\n';
  }

  console.log(answer);
});

function calc(a, b) {
  let sum = 0;

  for (let i = 0; i < a - 1; i++)
    for (let j = i + 1; j < a; j++) sum += gcd(b[i], b[j]);

  return sum;
}

function gcd(x, y) {
  while (y) {
    [x, y] = [y, x % y];
  }

  return x;
}
