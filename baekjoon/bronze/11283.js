const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = '';

rl.on('line', (value) => {
    input = value;
    rl.close();
}).on('close', () => {
    const comp = '가'.charCodeAt(0).toString(10);
    const comp_ = input.charCodeAt(0).toString(10);

    console.log(comp_ - comp + 1);
});
