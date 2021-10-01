// #16199 나이 계산하기
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => +x));
}).on('close', () => {
  const [born, current] = input;
  const sub = current[0] - born[0];
  const age = [];

  // 만 나이
  if (current[1] > born[1]) {
    age.push(sub);
  } else if (current[1] === born[1] && current[2] >= born[2]) {
    age.push(sub);
  } else age.push(sub - 1);

  // 세는 나이
  age.push(sub + 1);

  // 연 나이
  age.push(sub);

  let str = '';
  age.forEach((x) => (str += x + '\n'));
  console.log(str);
});

/* 
Input
2003 3 5
2003 4 5

Output
0
1
0

Input
2003 3 5
2004 1 1

Output
0
2
1

Input
2005 12 31
2007 1 1

Output
1
3
2
*/
