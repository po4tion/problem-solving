// 10845번 큐
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  const orders = +input.shift();
  const queue = [];
  let answer = '';

  for (let i = 0; i < orders; i++) {
    if (input[i][0] === 'push') {
      queue.push(input[i][1]);
    } else if (input[i][0] === 'pop') {
      if (queue.length === 0) {
        answer += -1 + '\n';
      } else {
        answer += queue.shift() + '\n';
      }
    } else if (input[i][0] === 'size') {
      answer += queue.length + '\n';
    } else if (input[i][0] === 'empty') {
      if (queue.length === 0) {
        answer += 1 + '\n';
      } else {
        answer += 0 + '\n';
      }
    } else if (input[i][0] === 'front') {
      if (queue.length === 0) {
        answer += -1 + '\n';
      } else {
        answer += queue[0] + '\n';
      }
    } else {
      if (queue.length === 0) {
        answer += -1 + '\n';
      } else {
        answer += queue[queue.length - 1] + '\n';
      }
    }
  }

  console.log(answer);
});
