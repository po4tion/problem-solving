const rl = require('readline').createInterface(process.stdin, process.stdout);

let sum = 0;

rl.on('line', (value) => {
    sum += +value;
}).on('close', () => {
    console.log(sum);
});
