// #10707 수도요금
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const [a, b, c, d, p] = input;
  const xCompany = a * p;
  let yCompany = 0;

  if (c < p) yCompany = b + (p - c) * d;
  else yCompany = b;

  console.log(Math.min(xCompany, yCompany));
});
