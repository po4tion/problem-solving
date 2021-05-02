// 9021번 괄호
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const testCase = input.shift();
  let answer = '';

  for (let i = 0; i < testCase; i++) {
    const stack = [];
    let fail = 1;

    input[i].split('').map((x) => {
      if (x === '(') stack.push(x);
      else {
        if (stack.length) stack.pop();
        else fail = 0;
      }
    });

    if (fail && !stack.length) answer += 'YES' + '\n';
    else answer += 'NO' + '\n';
  }

  console.log(answer);
});
