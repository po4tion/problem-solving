// 소트인사이드

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input = line.split('').map(x => parseInt(x));
}).on('close', function () {
  input.sort((a, b) => b - a);

  console.log(input.join(''));
});