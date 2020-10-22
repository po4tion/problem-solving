const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];             // 입력 값 모두 저장
let caseKey = [];           // testCase 값과 keyValue 값 저장
let intKey = [];            // 수열 A 저장
let sum = '';               // console.log 간소화를 위한....

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    caseKey.push(input[0].split(' ').map(x => parseInt(x)));
    intKey.push(input[1].split(' ').map(y => parseInt(y)));

    let testCase = caseKey[0][0];       //  정수 N
    let keyValue = caseKey[0][1];       //  정수 X

    for (let i = 0; i < testCase; i++) {
        if (intKey[0][i] < keyValue) {
            sum += String(intKey[0][i]) + " ";
        }
    }

    console.log(sum);
    process.exit();
});
