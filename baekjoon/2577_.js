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
        } while (idx != -1);
        str += count + "\n";
    }

    console.log(str);
    process.exit();
});

/*
// 고수의 코드
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const result = Array.from({ length: 10 }, (v, i) => 0 );

(input[0] * input[1] * input[2]).toString().split("").map((n) => result[parseInt(n)]++);

result.forEach((n) => console.log(n));
*/

/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let mult = a*b*c;
    
    let splitted = mult.toString().split("");
    let arr = new Array(10).fill(0);
    
    for(let i = 0; i<splitted.length; i++){
        arr[splitted[i]]++;
    }
    
    for(let i = 0; i<10; i++){
        console.log(arr[i] )
    }
    
	
  process.exit();
});
*/