const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
  const A = input.shift();
  const B = input.shift();
  const V = input.shift();

  const answer = Math.ceil((V - A) / (A - B)) + 1;

  console.log(answer);
});