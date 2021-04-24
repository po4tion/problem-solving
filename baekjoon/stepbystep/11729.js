// 하노이 탑 이동 순서
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;
let output = '';
let count = 0;

rl.on('line', function (line) {
  input = +line;
}).on('close', function () {
  hanoi(input);
  
  console.log(count + '\n' + output.trim());
});

function hanoi (input, a = 1, b = 2, c = 3) {
  if (input === 1) {
    output += a + ' ' + c + '\n';
    count++;
  } else {
    hanoi(input - 1, a, c, b);
    output += a + ' ' + c + '\n';
    count++;
    hanoi(input - 1, b, a, c);
  }
}


/* 
원반이 1개 일때와 2개 일때 순서를 바탕으로 일련의 규칙을 세워 풀음. 
출력 첫째 줄에 이동 횟수를 적지 않는 바람에 왜 틀렸는지 한참 찾았다.
*/
