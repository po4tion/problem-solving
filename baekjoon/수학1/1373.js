// 1373번 2진수 8진수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = '';

rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  let answer = '';

  while (input.length >= 3) {
    answer = parseInt(input.slice(input.length - 3), 2).toString(8) + answer;
    input = input.slice(0, input.length - 3);
  }

  if (input.length !== 0) {
    answer = parseInt(input, 2).toString(8) + answer;
  }

  console.log(answer);
});
