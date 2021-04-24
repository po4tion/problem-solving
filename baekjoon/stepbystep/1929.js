// 소수 구하기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map(x => +x);
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

  let output = '';

  for (let k = 0; k < primeNumbers.length; k++) {
    output += primeNumbers[k] + '\n';
  }

  console.log(output);
});