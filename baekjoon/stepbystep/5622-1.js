const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close', function () {
    let str = '';
    input.map(x => {
        if (x.charCodeAt() - 65 < 3) {
            str += 2;
        } else if (x.charCodeAt() - 65 < 6) {
            str += 3;
        } else if (x.charCodeAt() - 65 < 9) {
            str += 4;
        } else if (x.charCodeAt() - 65 < 12) {
            str += 5;
        } else if (x.charCodeAt() - 65 < 15) {
            str += 6;
        } else if (x.charCodeAt() - 65 < 19) {
            str += 7;
        } else if (x.charCodeAt() - 65 < 22) {
            str += 8;
        } else {
            str += 9;
        }
    })

    let time = 0;

    str.split('').map(x => {
        time += parseInt(x) + 1;
    })
    console.log(time);

    process.exit();
});