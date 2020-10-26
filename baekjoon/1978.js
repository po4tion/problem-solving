// 소수 찾기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x)));
}).on('close', function () {
  const testCase = input.shift();
  const primeNumbers = input.shift();
  let count = 0;

  primeNumbers.map(x => {
    if (x <= 1) {
      return;
    } else if (x <= 3) {
      count++;
      return;
    }

    if (x % 2 === 0 || x % 3 === 0) {
      return;
    }

    for (let i = 5; i <= Math.sqrt(x); i += 6) {
      if (x % i === 0 || x % (i + 2) === 0) {
        return;
      }
    } // 5 7 11 13 17 19  6의 배수에서 +- 1의 어떤 값이 소수이다.
    count++;
  });
  
  console.log(count);
});