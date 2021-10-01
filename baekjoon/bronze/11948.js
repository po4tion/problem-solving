// #11948 과목선택
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const sorting = (a, b) => a - b;
  const ft = input
    .slice(0, 4)
    .sort(sorting)
    .slice(1)
    .reduce((acc, cur) => acc + cur);
  const to = input.slice(4).sort(sorting).slice(1)[0];

  console.log(ft + to);
});

/*
Input
100
34
76
42
10
0

Output
228
*/
