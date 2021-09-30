// 5893번 17배
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  const answer = BigInt('0b' + input) * 17n;
  console.log(typeof answer);
  console.log(answer.toString(2));
});

/*
INPUT
10110111

OUTPUT
110000100111
*/
