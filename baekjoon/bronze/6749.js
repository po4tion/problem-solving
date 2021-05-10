const rl = require('readline').createInterface(process.stdin, process.stdout);

let subtract = [];

rl.on('line', (value) => {
    subtract = [...subtract, +value];
}).on('close', () => {
    console.log(2 * subtract[1] - subtract[0]);
});
