const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => BigInt(value));
    rl.close();
}).on('close', () => {
    const add = input[0] + input[1];

    console.log(add.toString());
});
