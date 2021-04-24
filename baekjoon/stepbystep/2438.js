const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;
let sum = '';   

rl.on('line', function (line) {
    input = parseInt(line);

    for (let i = 0; i < input; i++) {
        for (let j = 0; j <= i; j++) {
            sum += "*";
        }
        if (i !== input - 1) {
            sum += "\n";
        } // 맨 마지막 줄에는 개행이 필요없다.
    }

    console.log(sum);
    rl.close();
});