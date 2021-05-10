const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input.push(values);
}).on('close', () => {
    if (input.length > 0) console.log('비와이');
});
