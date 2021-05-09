// 2338번 긴자리 계산
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(BigInt(line));
}).on('close', () => {
  const A = input.shift();
  const B = input.shift();

  let answer = '';

  // 덧셈
  answer += A + B + '\n';
  // 뺄셈
  answer += A - B + '\n';
  // 곱셈
  answer += A * B;

  console.log(answer);
});
