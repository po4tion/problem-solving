// 피보나치 수 5
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', function (line) {
  input = +line;
}).on('close', function () {
  const fibo = fibonacci(input);

  console.log(fibo);
});

function fibonacci (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}