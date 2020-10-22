const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function () {
    let sum = 1;                            // 곱셈을 해야하므로 1로 초기화를 한다.
    let str = '';

    for (let i = 0; i < input.length; i++) {
        sum *= input[i];
    }

    sum = String(sum);                      // indexOf 함수를 사용해야 하므로 String으로 바꿔준다.

    for (let j = 0; j <= 9; j++) {
        let idx = -1;
        let count = 0;
        do {
            idx = sum.indexOf(j, idx + 1);
            
            if (idx !== -1) {
                count++;
            }
        } while (idx !== -1);
        str += count + "\n";
    }

    console.log(str);
    process.exit();
});