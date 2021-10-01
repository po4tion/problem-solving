// #11282 한글
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  const answer = 44031 + input;

  console.log(String.fromCharCode(answer));
});

/* 
Input
11172

Ouput
힣
*/
