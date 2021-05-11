const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (value) => {
    input = +value;
    rl.close();
}).on('close', () => {
    const answer_1 = parseInt(input * 0.78, 10);
    const answer_2 =
        parseInt(input * 0.2 * 0.78, 10) + parseInt(input * 0.8, 10);

    console.log(`${answer_1} ${answer_2}`);
});
