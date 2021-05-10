const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = '';

rl.on('line', (value) => {
    input = value;
    rl.close();
}).on('close', () => {
    console.log(`${input}??!`);
});
