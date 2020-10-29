// 체스판 다시 칠하기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {




  console.log(input);
});