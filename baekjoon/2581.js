// 소수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  const m = input.shift();
  const n = input.shift();
  let primeNumbers = [];

  for (let i = m; i <= n; i++) {
    let isNotPrime = 0;

    if (i <= 1) {
      continue;
    } else if (i <= 3) {
      primeNumbers.push(i);
      continue;
    }

    if (i % 2 === 0 || i % 3 === 0) {
      continue;
    }

    for (let j = 5; j <= Math.sqrt(i); j += 6) {
      if (i % j === 0 || i % (j + 2) === 0) {
        isNotPrime++;
        break;
      }
    }

    if (isNotPrime !== 0) {
      continue;
    }

    primeNumbers.push(i);
  }

  if (primeNumbers.length === 0) {
    return console.log(-1);
  }

  const primeNumbersSum = primeNumbers.reduce((acc, prime) => acc + prime); // 소수들의 합
  const primeNumberMin = Math.min(...primeNumbers);  // 소수들 중 최솟값

  console.log(primeNumbersSum);
  console.log(primeNumberMin);
});