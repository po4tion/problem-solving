const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
    if ((input[1] - 45) >= 0) {
        console.log(input[0], input[1] - 45);
    } else{
        if(input[0] === 0) {
            console.log(input[0] + 23, input[1] + 15);
        } else {
            console.log(input[0] - 1, input[1] + 15);
        }
    }
    process.exit();
});