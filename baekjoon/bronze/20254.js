const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => parseInt(value, 10));
    rl.close();
}).on('close', () => {
    const sum =
        56 * input.shift() +
        24 * input.shift() +
        14 * input.shift() +
        6 * input.shift();

    console.log(sum);
});
