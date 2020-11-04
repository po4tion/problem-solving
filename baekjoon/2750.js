// 수 정렬하기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  const testCase = input.shift();

  input.sort((a,b) => a - b);

  for (let i = 0; i < testCase; i++) {
    console.log(input[i]);
  }
});