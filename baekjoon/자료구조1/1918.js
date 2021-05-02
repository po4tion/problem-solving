// 1918번 후위 표기식
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input = input.concat(line.split(''));
}).on('close', function () {
  const stack = [];
  let answer = '',
    sub;

  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 'A' && input[i] <= 'Z') answer += input[i];
    else if (input[i] === '(') stack.push(input[i]);
    else if (input[i] === ')') {
      while (true) {
        sub = stack.pop();
        if (sub === '(') break;
        answer += sub;
      }
    } else {
      while (stack.length && ops(stack[stack.length - 1], input[i]) >= 0)
        answer += stack.pop();
      stack.push(input[i]);
    }
  }
  while (stack.length) answer += stack.pop();
  console.log(answer);
});

// 우선순위 함수
function ops(a, b) {
  const operand = {
    '(': 0,
    '+': 1,
    '-': 1,
    '/': 2,
    '*': 2,
  };

  if (operand[a] > operand[b]) return 1;
  else if (operand[a] < operand[b]) return -1;
  else return 0;
}
