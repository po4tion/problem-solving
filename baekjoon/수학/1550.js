// 1550 16진수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = '';

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const answer = parseInt(input, 16);

  console.log(answer);
});
