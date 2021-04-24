// 블랙잭
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x)));
}).on('close', function () {
  const n = input[0][0];
  const m = input[0][1];
  input.shift();
  const cards = input.shift();
  
  let add = 0;

  for (let i = 0; i <= n - 3; i++) {
    for (let j = i + 1; j <= n - 2; j++) {
      for (let k = j + 1; k <= n - 1; k++) {
        if (cards[i] + cards[j] + cards[k] <= m) {
          if (cards[i] + cards[j] + cards[k] > add) {
            add = cards[i] + cards[j] + cards[k];
          }
        }
      }
    }
  }

  console.log(add);
});