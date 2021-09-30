// 10039번 평균 점수
const rl = require('readline').createInterface(process.stdin, process.stdout);
const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const sum = input.reduce((acc, cur) => {
    if (cur < 40) cur = 40;

    return acc + cur;
  }, 0);

  console.log(Math.floor(sum / 5));
});
