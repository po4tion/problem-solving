// #21598 SciComLove
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  const input = +line;
  let answer = '';

  for (let i = 0; i < input; i++) {
    if (i === input - 1) answer += 'SciComLove';
    else answer += 'SciComLove' + '\n';
  }

  console.log(answer);
  rl.close();
});

/* 
[Input]
1
[Output]
SciComLove

[Input]
2
[Output]
SciComLove
SciComLove
*/
