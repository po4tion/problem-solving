const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => parseInt(value, 10));
    rl.close();
}).on('close', () => {
    const [n1, n2, n12] = input;

    const answer = ((n1 + 1) * (n2 + 1)) / (n12 + 1) - 1;

    console.log(Math.floor(answer));
});
