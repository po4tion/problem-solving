const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let answer = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const testCase = parseInt(input[0]);
    for (let i = 1; i <= testCase; i++) {
      answer.push(input[i].split(' ').map(x => parseInt(x)));
    }

    for (let j = 0; j < testCase; j++) {
      console.log(answer[j][0] + answer[j][1]);
    }
    process.exit();
});