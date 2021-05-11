const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (value) => {
    input = +value;
    rl.close();
}).on('close', () => {
    console.log(input * 4);
});
