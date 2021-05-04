// 9613번 GCD 합
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = '';

rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  console.log(input);
});
