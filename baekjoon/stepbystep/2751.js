// 수 정렬하기 2
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];
let str = '';

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  const testCase = input.shift();

  input.sort((a,b) => a - b);

  for (let i = 0; i < testCase; i++) {
    str += input[i] + '\n';
  }

  console.log(str);
});