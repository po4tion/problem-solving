const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((v) => parseInt(v, 10));
  rl.close();
}).on('close', () => {
  let answer = input[0] * (input[1] - 0.99);

  console.log(Math.ceil(answer));
});
