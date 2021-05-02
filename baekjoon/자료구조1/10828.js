// 10828번 스택
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  const orders = +input.shift();
  const stack = [];
  let answer = '';

  for (let i = 0; i < orders; i++) {
    if (input[i][0] === 'push') {
      stack.push(input[i][1]);
    } else if (input[i][0] === 'pop') {
      if (stack.length !== 0) {
        answer += stack.pop() + '\n';
      } else {
        answer += -1 + '\n';
      }
    } else if (input[i][0] === 'size') {
      answer += stack.length + '\n';
    } else if (input[i][0] === 'empty') {
      if (stack.length === 0) {
        answer += 1 + '\n';
      } else {
        answer += 0 + '\n';
      }
    } else {
      if (stack.length === 0) {
        answer += -1 + '\n';
      } else {
        answer += stack[stack.length - 1] + '\n';
      }
    }
  }

  console.log(answer);
});
