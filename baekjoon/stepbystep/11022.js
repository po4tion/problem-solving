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
    let testCase = parseInt(testInput[0]);  // testCase로 for문을 돌려야 하므로 정수로 바꿔준다.
    
    for (let i = 0; i < testCase; i++) {
        input.push(testInput[i + 1].split(' '));    // 공백으로 저장된 string들을 공백이 제거된 상태로 input 배열에 새로 저장한다.
        inputInt.push(parseInt(input[i][0]) + parseInt(input[i][1])); // input 배열의 요소들을 정수로 바꿔 더한 후에 inputInt 배열에 새로 저장한다.
    }
    
    for (let j = 0; j < testCase; j++) {
        if (j + 1 === testCase) {
            sum += `Case #${j + 1}: ${input[j][0]} + ${input[j][1]} = ${inputInt[j]}`;
        } else {
            sum += `Case #${j + 1}: ${input[j][0]} + ${input[j][1]} = ${inputInt[j]}\n`;
        }
        
    }
    console.log(sum);
    process.exit();
});
