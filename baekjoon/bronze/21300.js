const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => parseInt(value, 10));
    rl.close();
}).on('close', () => {
    let sum = 0;

    for (let i = 0; i < input.length; i++) sum += 5 * input[i];

    console.log(sum);
});
