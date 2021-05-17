// 2530번 인공지능 시계

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = input.concat(line.split(' ').map((x) => +x));
}).on('close', () => {
  const hourToSec = input[0] * 3600 + input[1] * 60 + input[2] + input[3],
    hour = parseInt(hourToSec / 3600, 10) % 24,
    min = parseInt((hourToSec % 3600) / 60, 10),
    sec = (hourToSec % 3600) % 60;

  console.log(hour, min, sec);
});
