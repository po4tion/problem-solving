const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (values) => {
    input = values.split(' ');
    rl.close();
}).on('close', () => {
    const a = BigInt(input[0]);
    const b = BigInt(input[1]);
    const multiply = a * b;
    console.log(multiply.toString());
});

/* 
    null 값을 String()은 null로 리턴해주지만 toString()은 null을 읽지 못해 오류 발생

    이 문제는 JS로 시간초과 문제를 해결하지 못함. FFT로 해보면 풀릴수도?
*/
