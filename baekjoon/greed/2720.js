// 2720번 세탁소 사장 동혁
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  // shift 메서드로 배열에 테스트 케이스 값만 남김
  let testCase = input.shift();

  // 거스름돈의 단위는 센트이므로 달러로 변환
  input = input.map((x) => x / 100);

  // 화폐 금액 정하기
  const quarter = 0.25;
  const dime = 0.1;
  const nickel = 0.05;
  const penny = 0.01;

  // 순환 배열
  const array = [quarter, dime, nickel, penny];
  let idx = 0;
  let jdx;

  // 해답
  let subAnswer;
  const answer = [];

  while (testCase > 0) {
    jdx = 0;
    subAnswer = [];
    let count = 4;

    // 0을 연속으로 출력하기 위해 무조건 4번 돌린다
    while (count > 0) {
      if (input[idx] >= array[jdx]) {
        subAnswer.push(parseInt(input[idx] / array[jdx]));

        input[idx] = +(input[idx] % array[jdx]).toFixed(2);
      } else {
        subAnswer.push(0);
      }
      jdx++;
      count--;
    }

    answer.push(subAnswer.join(' '));
    idx++;
    testCase--;
  }

  console.log(answer.join('\n'));
});

/* 
  거스름돈 문제.
  쿼터 $0.25
  다임 $0.10
  니켈 $0.05
  페니 $0.01 => 거스름돈을 나누지 못할 상황은 존재하지 않는다.

  거스름돈은 항상 $5.00 이하
  거스름돈 C의 단위는 센트(100센트 = 1달러)이므로 달러로 변환
  가치가 가장 높은 것부터 선택
*/
