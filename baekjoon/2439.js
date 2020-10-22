const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;
let sum = '';   

rl.on('line', function (line) {
    input = parseInt(line);

    for (let i = input - 1; i >= 0; i--) {
        for (let j = i; j > 0; j--) {
            sum += " ";
        }

        for (let k = 0; k < input - i; k++) {
            sum += "*";
        }

        if (i !== 0) {
            sum += "\n";
        } // 맨 마지막 줄에는 개행이 필요없다.
    }

    console.log(sum);
    rl.close();
});