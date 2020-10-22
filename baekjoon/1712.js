// 손익분기점
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
    const firstCost = input[0];
    const sellingPrice = input[2] - input[1]; // 한대에 대한 수입
    let breakEvenPoint = 0;

    if (sellingPrice > 0) {
      breakEvenPoint = Math.floor(firstCost / sellingPrice) + 1;
      console.log(breakEvenPoint);
    } else {
      console.log(-1);
    }
});