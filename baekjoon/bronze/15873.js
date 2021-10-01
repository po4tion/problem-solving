// #15873 공백 없는 A+B
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = '';

rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  const len = input.length;

  if (len === 2) console.log(+input[0] + +input[1]);
  else if (len === 4) console.log(20);
  else {
    if (input[1] === '0') console.log(10 + +input[2]);
    else if (input[2] === '0') console.log(+input[0] + 10);
  }
});

/* 
Input
37

Output
10
 */
