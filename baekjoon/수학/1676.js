// 1676번 팩토리얼 0의 개수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0,
  answer = 0;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  while (input >= 5) {
    answer += parseInt(input / 5);
    input /= 5;
  }
  console.log(answer);
});

/* 
  팩토리얼 표를 보면 입력된 수를 5로 나눈 수다. 25부터 2개씩 증가
*/
