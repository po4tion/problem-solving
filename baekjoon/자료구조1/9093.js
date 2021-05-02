// 9093번 단어 뒤집기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const testCase = +input.shift();
  let answer = '';

  for (let i = 0; i < testCase; i++) {
    answer +=
      input[i]
        .split(' ')
        .map((x) => x.split('').reverse().join(''))
        .join(' ') + '\n';
  }

  console.log(answer);
});
