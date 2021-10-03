// #17388 와글와글 숭고한
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', (line) => {
  const univ = ['Soongsil', 'Korea', 'Hanyang'];
  const input = line.split(' ').map((x) => +x);
  const sum = input.reduce((acc, cur) => acc + cur);
  let answer = '';

  if (sum >= 100) answer += 'OK';
  else {
    const minNum = Math.min(...input);
    const idx = input.indexOf(minNum);

    answer += univ[idx];
  }

  console.log(answer);
  rl.close();
});

/* 
Input
31 41 59

Output
OK

Input
1 2 3

Output
Soongsil

Input
19 8 9

Output
Korea

Input
45 33 21

Output
Hanyang
*/
