const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let answer = [];
let sum = '';

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const testCase = parseInt(input[0]);
    for (let i = 0; i < testCase; i++) {
      answer.push(input[i + 1].split(' ').map(x => parseInt(x)));
      sum += answer[i][0] + answer[i][1] + "\n";
    }
    console.log(sum);
    process.exit();
});
