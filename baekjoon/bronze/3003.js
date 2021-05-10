const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [],
    answer = '';

rl.on('line', (line) => {
    input = line.split(' ').map((v) => parseInt(v, 10));
}).on('close', () => {
    const chess = {
        0: 1,
        1: 1,
        2: 2,
        3: 2,
        4: 2,
        5: 8,
    };

    for (let i = 0; i < 6; i++) {
        answer += chess[i] - input[i] + ' ';
    }

    console.log(answer);
});
