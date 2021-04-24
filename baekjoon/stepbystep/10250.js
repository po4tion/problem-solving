// ACM 호텔
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x)));
}).on('close', function () {
  const testCase = input[0];

  for (let i = 0; i < testCase; i++) {
    let H = input[i + 1][0];
    const temp = H;
    const W = input[i+1][1];
    const N = input[i+1][2];
    

    if (N > W * H) {                 // 예외처리
      return -1;
    }
  
    let cnt = 1;   // w 위치
  
    while (N > H) {
      cnt++;
      H = H + temp;
    }
  
    let answer = 0;
    if (cnt < 10) {
      answer = `${(N % temp) !== 0 ? N % temp : temp}0${cnt}`;
    } else {
      answer = `${(N % temp) !== 0 ? N % temp : temp}${cnt}`;
    }
    console.log(answer);
  }
});