const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const testCase = parseInt(input[0]);    // 테스트 케이스의 개수
    let count;                              // 연속된 O의 점수
    let sum;                                // N번 문제의 총 점수
    let sumArray = [];                      // 출력을 위해 배열에 합을 저장
    let chatSum = '';                       // console.log 간소화를 위해 string으로 저장
    
    for (let i = 0; i < testCase; i++) {    
        sum = 0;               // sum을 다시 0으로 되돌려줘야 그 다음번 OX들의 합들을 처음부터 구할 수 있다.
        count = 0;             // count를 다시 0 으로 되돌려줘야 그 전에 count 되어 있던 값이 초기화된다. 
        if (input[i + 1].includes('O')) {          // 먼저 문자 'O'이 입력된 값에 존재하는지 확인한다.
            let j = 0;

            while (j < input[i + 1].length){
                if (input[i + 1][j].indexOf('O') !== -1) {   // indexOf는 array에 'O' 값이 있는지 확인 후 없으면 -1을 반환한다.
                    count++;                        // 연속된 'O'의 점수들을 저장한다.
                    sum += count;                   // N번 문제의 총합을 알기 위해 count된 값들을 저장한다.
                } else {
                    count = 0;                  // 'O'값이 아니라면 count를 0으로 초기화 해줘야한다. 1점부터 다시 시작해야 하기 때문에..
                }
                j++;
            }
        }

        sumArray.push(sum);
        chatSum += sumArray[i] + "\n";
    }
    
    console.log(chatSum);
    process.exit();
});