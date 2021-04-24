// 설탕 배달
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
  input = parseInt(line)
}).on('close', function () {
  let remainder = input % 5;
  let answer = Math.floor(input/5);

  while (answer >= 0) {
    if (remainder % 3 === 0) {
      return console.log(answer + (remainder / 3));
    } else {
      answer -= 1;
      remainder += 5;
    }
  }
  console.log(-1);
});