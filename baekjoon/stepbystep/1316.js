const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const testCase = input[0];
    input.shift();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let idx = -1;
        while (true) {
            idx = input[0].indexOf(input[0][i], idx + 1);

            if(idx === -1) {
                break;
            } else {
                count++;
            }

            if (count > 1) {
                if (i - idx === -1) {

                }
            }
        }
        
    }

    console.log(input);
    process.exit();
});