const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = parseInt(line);
}).on('close', function () {
    sum = 0;

    for (let i = 1; i <= input; i++) {
        sum += calc(i);
    }

    console.log(sum);
    process.exit();
});

function calc(x) {
    let cnt = 0;
    let temp = '';

    if ( (x > 0) && (x < 100)) {
        cnt++;
    }
    if (x > 99) {
        temp = String(x);
        if (temp[0] - temp[1] === temp[1] - temp[2]) {
            cnt++;
        }
    }

    return cnt;
}