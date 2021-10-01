// #13136 Do Not Touch Anything
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const [height, width, range] = input;
  const answer = Math.ceil(height / range) * Math.ceil(width / range);

  console.log(answer);
});

/*
Input
7 9 3

Output
9
*/
