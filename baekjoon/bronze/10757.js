const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => BigInt(value));
}).on('close', () => {
    const answer = input[0] + input[1];

    console.log(answer.toString());
});
