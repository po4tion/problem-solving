// #11943 파일 옮기기
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => +x));
}).on('close', () => {
  const [first, second] = input,
    a = first[0] + second[1],
    b = first[1] + second[0];

  console.log(Math.min(a, b));
});

/* 
Input
1 2
3 4

Output
5
*/
