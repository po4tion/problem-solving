// #15680 연세대학교
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  if (input) console.log('Leading the Way to the Future');
  else console.log('YONSEI');
});

/* 
Input
0

Output
YONSEI
*/
