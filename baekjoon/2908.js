const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const revNum = []

    input.map(x => {
        revNum.push(parseInt(x.split('').reverse().join('')));
    })
    const maxNum = Math.max.apply(null, revNum);
    console.log(maxNum);
});