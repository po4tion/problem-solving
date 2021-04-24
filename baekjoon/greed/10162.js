// 10162번 전자레인지
const rl = require('readline').createInterface(process.stdin, process.stdout);

let T = '';

rl.on('line', function (line) {
  T = parseInt(line);
  rl.close();
}).on('close', function () {
  // min -> sec 변환
  const A = 5 * 60;
  const B = 60;
  const C = 10;
  // 순환하기 위해 배열로
  const array = [A, B, C];
  let idx = 0;
  // 출력값
  const answer = [];

  // 3번 순회해야 함
  while (idx < 3) {
    // 버튼 A보다 요리시간이 많거나 적을 경우
    if (T >= array[idx]) {
      answer.push(parseInt(T / array[idx]));
      T = T % array[idx];
    } else {
      answer.push(0);
    }

    idx++;
  }

  if (T !== 0) {
    console.log(-1);
  } else {
    console.log(answer.join(' '));
  }
});

/* 
  a b c 버튼
  각 버튼마다 일정한 시간
  버튼 누를 때마다 +일정한 시간
  a 5분 b 1분 c 10초
  시간 T
  결론, a b c 누른 횟수의 합은 항상 최소

  T는 단위가 초이므로 abc 단위를 먼저 초로 바꾸고, 만약 3개의 버튼으로 시간을 맞출 수 없으면 return -1

  문제의 핵심은 가치가 가장 높은 값부터 선택과정을 거쳐 적정성 점검을 지나 해답 점검으로 정확한 값을 도출해내는 것
*/
