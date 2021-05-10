const rl = require('readline').createInterface(process.stdin, process.stdout);

let sum = 0;

rl.on('line', (value) => {
    sum += +value;
}).on('close', () => {
    const mins = parseInt(sum / 60, 10);
    const secs = sum % 60;

    console.log(`${mins}\n${secs}`);
});
