// 11656 접미사 배열
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = '';

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    answer.push(input.slice(i));
  }

  answer = answer.sort().join('\n');

  console.log(answer);
});
