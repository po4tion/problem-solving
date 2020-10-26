// 직각삼각형
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
  console.log();
});