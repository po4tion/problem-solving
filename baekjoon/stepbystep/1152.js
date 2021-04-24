const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;

rl.on('line', function (line) {
    input = line.trim().split(' ');
}).on('close', function () {
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '') {
            count++;
        }
    }
    console.log(count);
});