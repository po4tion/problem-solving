const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';
let sum = '';
let lowerCase = 26;

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    for (let i = 0; i < lowerCase; i++) {
        sum += input.indexOf(String.fromCharCode(97 + i)) + " ";
    } //97 a 122 z
    
    console.log(sum);
    process.exit();
});

// 고수의 풀이
/*
var arr = []
for (let i = 0; i < 26; i++) {
    arr.push(input.indexOf(String.fromCharCode(97 + i)))
}
console.log(arr.join(" "))
*/