const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => parseInt(value, 10));
    rl.close();
}).on('close', () => {
    const business = input[0] * input[1],
        economic = input[2] * input[3];

    console.log(business + economic);
});
