// 부녀회장이 될테야
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  const testCase = input[0];
  input.shift();

  for (let i = 0; i < testCase; i++) {
    const k = input.shift();
    const n = input.shift();

    let floor = [];
    let array = [];

    for (let i = 0; i < n; i++) {
      floor.push(i+1);
    }

    array.push(floor);
    floor = [];

    let sum = 0;

    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        sum += array[i-1][j-1];
        floor.push(sum);
      }

      array.push(floor);
      floor = [];
      sum = 0;
    }

    console.log(array[array.length - 1][n - 1]);
  }
});