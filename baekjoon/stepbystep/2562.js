const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function () {
    let maxNum = input[0];
    let count = 1;                  // input[0]가 maxNum일 경우 대비.

    for (let i = 0; i < 8; i++) {
        if (maxNum < input[i + 1]) {
            maxNum = input[i + 1];
            count = i + 2;
        }
    }
    console.log(maxNum + "\n" + count);
    process.exit();
});
