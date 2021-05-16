// 2420번 사파리월드

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
  rl.close();
}).on('close', () => {
  const answer = Math.abs(input[0] - input[1]);

  console.log(answer);
});
