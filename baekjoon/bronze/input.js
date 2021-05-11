const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ').map((value) => parseInt(value, 10));
    // input = [...input, values]
    rl.close();
}).on('close', () => {
    const answer = 1;

    console.log(answer);
});

/* 
    cmd 명령어 파일 만들기
    cd. > filename
    cd > filename
    type nul > filename
*/
