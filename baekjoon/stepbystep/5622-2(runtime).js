const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close', function () {
    let sum = 0;
    input.map(x => {
        const num = x.charCodeAt() - 65;

        if (num === 18 || num === 21 || num === 24|| num === 25) {
            num -= 3;
        }
        
        sum += Math.floor(num/3) + 3;
    })
    
    console.log(sum);
    process.exit();
});