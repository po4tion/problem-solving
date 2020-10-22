const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';                     // 값들을 저장하고 다시 꺼내어 저장
let temp = '';                      // front와 end키를 더하여 저장
let firstKey = '';                  // while문 비교를 위해 필요한 초깃값 저장
let frontKey = '';                  // 앞자리
let endkey = '';                    // 뒷자리

rl.on('line', function (line) {
    input = line;
    firstKey = line;
}).on('close', function () {
    let cycle = 0;              // 사이클 N

    while(parseInt(temp) !== parseInt(firstKey)) {   // 01 과 1을 string으로 비교하면 다르다고 나오므로 정수화해준다.
        if (input < 10) {
            input = '0' + parseInt(input);          // input의 십의 자리가 0자리일 경우 문제가 발생하므로 정수화로 십의 자리를 지우고 더해준다.
        }

        frontKey = input[1];                                      // 앞자리
        endkey = String(parseInt(input[0]) + parseInt(input[1])); // 뒷자리

        if (endkey < 10) {
            endkey = '0' + endkey;
        }
        
        temp = frontKey + endkey[1];
        input = temp;
        cycle++;
    }
    console.log(cycle);
    process.exit();
});