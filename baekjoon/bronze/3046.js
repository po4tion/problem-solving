const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => parseInt(value, 10));
    rl.close();
}).on('close', () => {
    const answer = 2 * input[1] - input[0];

    console.log(answer);
});
