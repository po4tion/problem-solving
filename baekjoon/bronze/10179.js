// #10179 쿠폰
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const maxLength = input.shift();
  let str = '';

  for (let i = 0; i < maxLength; i++)
    str += `$${(input[i] * 0.8).toFixed(2)}\n`;

  console.log(str);
});
