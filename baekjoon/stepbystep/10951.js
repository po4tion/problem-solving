const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let sum = '';

rl.on('line', function (line) {
    input.push(line.split(' ').map(x => parseInt(x)));

}).on('close', function () {
    let i = 0;
    while(i < input.length) {
        sum += (input[i][0] + input[i][1]) + "\n";
        i++;
    }
    console.log(sum);
    process.exit();
});
