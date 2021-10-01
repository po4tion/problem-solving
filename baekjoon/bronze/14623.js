// #14623 감정이입
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const multi = BigInt('0b' + input[0]) * BigInt('0b' + input[1]);

  console.log(multi.toString(2));
});

/* 
Input
1010
11

Output
11110
*/
