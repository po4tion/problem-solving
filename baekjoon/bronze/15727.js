const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (value) => {
    input = value;
    rl.close();
}).on('close', () => {
    const answer = Math.ceil(input / 5);

    console.log(answer);
});

/* 
    1~5이동하는 건 4칸 이동하는 것.
*/
