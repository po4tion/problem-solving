const rl = require('readline').createInterface(process.stdin, process.stdout);

let sum = 0;

rl.on('line', (values) => {
    values.split(' ').map((value) => (sum += +value));
    rl.close();
}).on('close', () => {
    console.log(sum);
});
