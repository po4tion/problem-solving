// 2609번 최대공약수와 최소공배수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input;

rl.on('line', (line) => {
  input = line.split(' ').map((x) => parseInt(x));
}).on('close', () => {
  const a = Math.max(...input),
    b = Math.min(...input);
  let answer = euclidean(a, b).join('\n');

  console.log(answer);
});

function euclidean(a, b) {
  const [a_, b_] = [a, b];
  let r;

  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  // 최소공배수 = (A * B) / 최대공약수
  return [a, (a_ * b_) / a];
}
