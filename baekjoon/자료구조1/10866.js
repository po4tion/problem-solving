// 10866번 덱
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  const orders = +input.shift();
  const deque = [];
  let answer = '';

  for (let i = 0; i < orders; i++) {
    if (input[i][0] === 'push_front') {
      deque.unshift(input[i][1]);
    } else if (input[i][0] === 'push_back') {
      deque.push(input[i][1]);
    } else if (input[i][0] === 'pop_front') {
      answer += (deque.length ? deque.shift() : -1) + '\n';
    } else if (input[i][0] === 'pop_back') {
      answer += (deque.length ? deque.pop() : -1) + '\n';
    } else if (input[i][0] === 'size') {
      answer += deque.length + '\n';
    } else if (input[i][0] === 'empty') {
      answer += (deque.length ? 0 : 1) + '\n';
    } else if (input[i][0] === 'front') {
      answer += (deque.length ? deque[0] : -1) + '\n';
    } else {
      answer += (deque.length ? deque[deque.length - 1] : -1) + '\n';
    }
  }

  console.log(answer);
});
