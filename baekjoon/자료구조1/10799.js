// 10799번 쇠막대기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];
const save = [];
let answer = 0;

rl.on('line', function (line) {
  input = input.concat(line.split(''));
}).on('close', function () {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      _push(input[i]);
    } else if (input[i] === ')' && input[i - 1] === ')') {
      save.pop();
      answer += 1;
    } else {
      _pop();
    }
  }

  console.log(answer);
});

function _push(char) {
  save.push(char);

  return;
}

function _pop(len) {
  save.pop();
  answer += save.length;

  return;
}
