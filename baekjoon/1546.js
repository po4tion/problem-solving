const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(x => parseInt(x)));     
}).on('close', function () {
    const subNum = input[0];
    const score = input[1];
    let maxNum = score.reduce((acc, cur) => acc > cur ? acc:cur); // 최댓값
    let mdfScore = [];
    let sum = 0;
    
    for (let i = 0; i < subNum; i++) {
        mdfScore = score.map(x => (x / maxNum) * 100);
        sum += mdfScore[i];
    }

    console.log((sum / subNum).toFixed(2));                 // 소수점 둘째자리
    process.exit();
});