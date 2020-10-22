const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let rmd = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function () {
    for (let i = 0; i < input.length; i++) {
        if (!rmd.includes(input[i] % 42)) {              // 값이 존재하지 않으면 false 반환
            rmd.push(input[i] % 42);
        }
    }

    console.log(rmd.length);    
    process.exit();
});

// 고수의 코드
/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
    const set = new Set();
    
    for(let i = 0; i<input.length; i++){
        set.add(input[i] % 42);
    }
    console.log(set.size)
  process.exit();
});
*/