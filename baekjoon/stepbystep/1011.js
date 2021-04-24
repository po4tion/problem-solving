// Fly me to the Alpha Centauri
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x))); // 0 3, 1 5, 45 50
}).on('close', function () {
  const testCase = input.shift();

  for (let i = 0; i < testCase; i++) {
    const x = input[0][0];
    const y = input[0][1];
    input.shift();

    const range = y - x;
    let sum = 0;
    let cnt = 1;

    while(true) {
      if (range <= cnt * cnt) {
        break;
      } else {
        cnt++;
      }
    }
    
    if (range === cnt * cnt) {  // 거리가 제곱수일 경우
      sum = cnt + (cnt-1);
    } else if (range <= Math.floor(((cnt-1) * (cnt-1) + (cnt * cnt)) / 2)) {   // 거리가 제곱수 사이에 있을 경우 and 작동회수가 한 횟수 낮을 경우
      sum = cnt + (cnt-2);
    } else {
      sum = cnt + (cnt-1);
    }

    console.log(sum);  
  }
});