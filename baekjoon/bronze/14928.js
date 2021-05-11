const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (value) => {
    input = BigInt(value);
    rl.close();
}).on('close', () => {
    const answer = input % 20000303n;

    console.log(answer.toString());
});

/* 
    시간 초과
*/
