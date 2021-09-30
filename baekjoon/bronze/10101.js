// 10101번 삼각형 외우기
const rl = require('readline').createInterface(process.stdin, process.stdout);
const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const [a, b, c] = input;

  if (a === 60 && b === 60 && c === 60) console.log('Equilateral');
  else if (a + b + c !== 180) console.log('Error');
  else if (a + b + c === 180 && a !== b && a !== c && b !== c)
    console.log('Scalene');
  else console.log('Isosceles');
});
