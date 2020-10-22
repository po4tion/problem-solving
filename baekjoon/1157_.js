const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    const charList = {};

    for(const element of input.toUpperCase()) {
        charList[element] = charList[element] ? charList[element] + 1 : 1;
    }

    const maxNum = Math.max.apply(null, Object.values(charList));           // 배열의 max값을 가져오기 위해서는 apply() 함수를 사용해야 한다.

    let hChar = '';
    let count = 0;

    for (const element in charList) {                       // 문자열로 키가 지정된 속성을 사용
        if (maxNum === charList[element]) {
            hChar = element;
            count++;
        }
    }

    if (count > 1) {
        console.log("?");
    } else {
        console.log(hChar);
    }
});