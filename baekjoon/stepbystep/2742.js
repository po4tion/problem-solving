const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;
let sum = '';

rl.on('line', function (line) {
    input = parseInt(line);

    for (let i = input; i > 0; i--) {
        if (i === 1) {               // 어떤 숫자를 입력받아도 마지막 인자는 1.
            sum += 1;                // sum 안의 값들이 이미 string이기 때문에 자동형변환이 일어나 정수 값인 1을 더해도 값이 string으로 나온다.
        } else {
            sum += i + "\n";
        }
    }

    console.log(sum);
    rl.close();
});