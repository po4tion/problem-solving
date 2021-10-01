// #15921 수찬은 마린보이야!!
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => +x));
}).on('close', () => {
  const [len, practice] = input;

  if (!len[0]) {
    console.log('divide by zero');
    return;
  }

  const store = {};

  practice.forEach((x) => {
    if (store[x]) store[x]++;
    else store[x] = 1;
  });

  const avg = practice.reduce((acc, cur) => acc + cur) / len[0];

  let sum = 0;

  for (let v in store) sum += v * (store[v] / len[0]);

  console.log((avg / sum).toFixed(2));
});

/* 
Input
5
5 10 10 15 20

Output
1.00
*/
