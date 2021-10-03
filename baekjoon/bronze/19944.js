// #19944 뉴비의 기준은 뭘까?
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  const [N, M] = line.split(' ').map((x) => +x);
  let answer = '';

  if (M === 1 || M === 2) answer += 'NEWBIE!';
  else if (N >= M) answer += 'OLDBIE!';
  else answer += 'TLE!';

  console.log(answer);
  rl.close();
});

/* 
Input
3 1
Output
NEWBIE!

Input
3 5
Output
TLE!

Input
3 3
Output
OLDBIE!
*/
