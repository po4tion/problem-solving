const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let testInput = [];                // 테스트 케이스 개수 T
let input = [];                    // 각 줄의 A와 B를 쌍으로 저장하는 배열(string)
let inputInt = [];                 // A와 B를 더해 저장하는 배열
let sum = '';                      // 채점시간을 고려해 출력은 string으로 한다. console.log를 간소화 시키기 위해서...

rl.on('line', function (line) {
    testInput.push(line);          // string으로 저장
}).on('close', function () {
    let testCase = parseInt(testInput[0]);
    
    for (let i = 0; i < testCase; i++) {
        input.push(testInput[i + 1].split(' '));
        inputInt.push(parseInt(input[i][0]) + parseInt(input[i][1]));
    }
    
    for (let j = 0; j < testCase; j++) {
        if (j + 1 === testCase) {
            sum += `Case #${j + 1}: ${inputInt[j]}`;
        } else {
            sum += `Case #${j + 1}: ${inputInt[j]}\n`;
        }
        
    }
    console.log(sum);
    process.exit();
});
