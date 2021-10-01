// #10797 10부제
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => +x));
}).on('close', () => {
  const month = input.shift().shift();
  const answer = input.shift().filter((x) => x === month).length;

  console.log(answer);
});

/*
Input
1
1 2 3 4 5

Output
1
*/
