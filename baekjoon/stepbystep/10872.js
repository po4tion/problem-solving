// 팩토리얼
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', function (line) {
  input = +line;
}).on('close', function () {
  const fact = factorial(input);

  console.log(fact);
});

function factorial (n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}