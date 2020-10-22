const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let oneDimen = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(x => parseInt(x)));    
}).on('close', function () {
    let intNum = input[0];                  // 정수의 개수 N
    oneDimen = input[1];
    let maxNum = minNum = oneDimen[0];       // 최댓값, 최솟값 초기화

    for(let i = 0; i < intNum; i++) {
        if (oneDimen[i] > maxNum) {
            maxNum = oneDimen[i];
        }
        if (oneDimen[i] < minNum) {
            minNum = oneDimen[i];
        }
    }
    console.log(minNum, maxNum);
    process.exit();
});