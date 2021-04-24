// 아래 코드의 문제점은 마지막 N번째 숫자를 출력함에 있어 개행이 생기기 때문에 출력의 모양이 애매하다.
/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;
let sum ='';

rl.on('line', function (line) {
    input = parseInt(line);
    
    for (let i = 0; i < input; i++) {
        sum += (i + 1) + "\n";
    }

    console.log(sum);
    rl.close();
});
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;
let sum ='';

rl.on('line', function (line) {
    input = parseInt(line);
    
    for (let i = 0; i < input; i++) {
        if (i + 1=== input) {
            sum += (i + 1);
        } else {
            sum += (i + 1) + "\n";
        }
    }

    console.log(sum);
    rl.close();
});
