// 2004번 조합 0의 개수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => parseInt(x));
}).on('close', () => {
  let count = 0,
    answer = [];
  input.push(input[0] - input[1]);

  while (input[0] >= 5) {
    count += parseInt(input[0] / 5);
    input[0] /= 5;
  }
  answer.push(count);
  count = 0;

  while (input[2] >= 5) {
    count += parseInt(input[2] / 5);
    input[2] /= 5;
  }
  answer.push(count);
  count = 0;

  while (input[1] >= 5) {
    count += parseInt(input[1] / 5);
    input[1] /= 5;
  }
  answer.push(count);

  console.log(answer[0] - answer[1] * answer[2]);
});
