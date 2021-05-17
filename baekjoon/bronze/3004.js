// 3004번 체스판 조각

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = +line;
  rl.close();
}).on('close', () => {
  let [x, y] = [Math.floor(input / 2 + 1), Math.ceil(input / 2 + 1)];

  console.log(x * y);
});
