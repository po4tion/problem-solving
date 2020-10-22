const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(x => parseInt(x)); // 'line'에 console.log를 기입하면 입력을 계속 받는 도중에도 출력이 된다.
}).on('close', function () {
    console.log(input[0] + input[1]); // 'close'에 console.log를 기입하면 모든 입력이 끝나고 컨트롤 + D키를 통해 입력을 끝내면 출력된다.
    process.exit(); // Node.js는 이벤트 루프에 보류중인 추가 작업이 없으면 Node.js 프로세스가 자체적으로 종료되므로 대부분의 상황에서 실제로 process.exit()를 명시적으로 호출할 필요는 없다.
});