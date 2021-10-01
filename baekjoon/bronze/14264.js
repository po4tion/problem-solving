// #14264 정육각형과 삼각형
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  const answer =
    ((3 * Math.sqrt(3) * Math.pow(input, 2)) / 2 -
      Math.sqrt(3) * Math.pow(input, 2)) /
    2;

  console.log(answer);
});

/*
Input
5

Output
10.825317547305485
*/
