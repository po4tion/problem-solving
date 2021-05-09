// 2558번 A+B-2
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input += +line;
}).on('close', () => {
  console.log(input);
});
