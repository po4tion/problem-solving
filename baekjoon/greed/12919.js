const { exit } = require('node:process');

// 12919번 A와 B 2 [Tier : Silver 2]
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];
let answer = false;

rl.on('line', function (line) {
  input.push(line.split(''));
}).on('close', function () {
  // 출력할 답
  calc(input[1]);

  if (answer) {
    console.log(1);
  } else {
    console.log(0);
  }
});

function calc(str) {
  if (input[0].length === str.length) {
    if (input[0].join('') === str.join('')) {
      answer = true;
    }
    exit;
    return;
  }

  if (str[0] === 'A' && str[str.length - 1] === 'B') {
    return;
  }

  if (str[str.length - 1] === 'A') {
    calc(str.slice(0, str.length - 1));
  }

  if (str[0] === 'B') {
    calc(str.slice(1, str.length).reverse());
  }
}

/* 
  문자열 S, T
  S를 T로 바꿈

  연산 방법
  1. 문자열의 뒤에 A를 추가
  2. 문자열의 뒤에 B를 추가하고 문자열을 뒤집는다

  출력 방법
  1. S를 T로 바꿀 수 있으면 1, 없으면 0

  선택 과정
  * 두 개의 연산 방법 중 한개를 선택

  적정성 점검
  * 선택한 연산 방법으로 인해 문자열 길이를 초과하지 않는지 점검

  해답 점검
  * S와 T 문자열이 같은지 확인

  A ~ A 연산 1
  A ~ B 연산불가
  B ~ A 연산 1, 연산 2
  B ~ B 연산 2
*/
