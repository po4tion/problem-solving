// 2752번 세수정렬

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
  rl.close();
}).on('close', () => {
  input.sort((a, b) => a - b);

  console.log(...input);
});
