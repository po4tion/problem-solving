// #17362 수학은 체육과목입니다 2
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  const finger = [1, 2, 3, 4, 5, 4, 3, 2];
  let num = 1;

  while (num <= input) num += 8;

  num -= 8;
  const answer = input - num;

  console.log(finger[answer]);
});

/*
Input
3

Output
3

Input
1000

Output
2
*/
