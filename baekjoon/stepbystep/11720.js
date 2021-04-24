const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let sum = 0;

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const num = input[0];
    input.shift();

    const numList = input[0].split('').map(x => parseInt(x));

    for (let i = 0; i < num; i++) {
        sum += numList[i];
    }

    console.log(sum);
    process.exit();
});