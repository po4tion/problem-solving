// 분해합
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', function (line) {
  input = +line;

  rl.close();
}).on('close', function () {
  let sum = 0;
  let constructor = [];

  for (let i = 1; i < input; i++) {
    const str = String(i).split('').map(x => +x);

    sum = str.reduce((acc, calc) => (acc += calc), i);

    if (input === sum) {
      constructor.push(i);
    }
  }
  
  if (constructor.length === 0) {
    return console.log(0);
  }

  constructor.sort((a, b) => a - b);

  console.log(constructor[0]);
});