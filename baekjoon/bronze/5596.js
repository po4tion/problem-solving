// 5596번 시험점수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (value) => {
  input.push(value.split(' ').map((x) => +x));
}).on('close', () => {
  const answer = input.map((el) => {
    return el.reduce((acc, cur) => acc + cur);
  });

  console.log(Math.max(...answer));
});
