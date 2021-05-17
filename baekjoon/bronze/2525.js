// 2525번 오븐 시계

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = input.concat(line.split(' ').map((x) => parseInt(x, 10)));
}).on('close', () => {
  const hourToMin = input[0] * 60 + input[1] + input[2],
    hour = parseInt(hourToMin / 60, 10) % 24,
    min = hourToMin % 60;

  console.log(hour, min);
});
