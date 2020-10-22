const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '));
}).on('close', function () {
    let testCase = input[0];
    input.shift();
    let temp = '';                      // 입력받은 문자열들을 저장
    let sum;                            // 각 문자들을 이어서 저장
    let conLog = [];                    // 출력 array.join으로 해보고 싶어서...

    for (let i = 0; i < testCase; i++) {
        sum = '';
        temp = input[i][1];

        for (let k = 0; k < temp.length; k++) {
            for (let j = 0; j < parseInt(input[i][0]); j++) {
                sum += temp[k];
            }
        }
        
        conLog.push(sum);
    }

    console.log(conLog.join('\n'));
    process.exit();
});

// 고수의 코드
/*
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift()
input.map(value => {
    const data = value.split(' ')
    const S = data[1]
    const R = Number(data[0])

    const array_r = S.toString().trim().split("")
    let answer= ""
    array_r.map(value => {
        let i = 1;
        while (i <= R){
            answer += value
            i++
        }
    })
    console.log(answer)

})
*/