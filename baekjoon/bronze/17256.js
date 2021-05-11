const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input.push(values.split(' ').map((value) => parseInt(value, 10)));
}).on('close', () => {
    const a = input.shift();
    const c = input.shift();

    console.log(`${c[0] - a[2]} ${c[1] / a[1]} ${c[2] - a[0]}`);
});
