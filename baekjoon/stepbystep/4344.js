const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let addNum = [];                        // 각 행에 속한 학생들의 총합 점수
let avgNum = [];                        // 평균 점수
let allAvg = [];                        // 평균을 넘는 학생의 비율 저장

rl.on('line', function (line) {
    input.push(line.split(' ').map(x => parseInt(x)));
}).on('close', function () {
    let testCase = parseInt(input[0]);
    let temp = [];
    let studNum;
    input.shift();

    for (let i = 0; i < testCase; i++) {
        input[i].shift();
        addNum.push(input[i].reduce((acc, cur) => acc + cur));
        avgNum.push(addNum[i] / input[i].length);           // 평균 저장

        temp = input[i];                 // 1차월 배열로 저장
        studNum = 0;                     // 학생 수 저장
        
        for (let j = 0; j < temp.length; j++) {
            if (avgNum[i] < temp[j]) {
                studNum++;
            }
        } // 평균을 넘는 학생의 수 구하기

        allAvg.push(((studNum / temp.length) * 100).toFixed(3)); // 소수점 셋째 자리
    }

    let str = '';
    
    for (let k = 0; k < allAvg.length; k++) {
        str += `${allAvg[k]}%\n`;
    }
    console.log(str);
    process.exit();
});