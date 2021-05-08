// 1463번 1로 만들기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0,
  idx = 0;

rl.on('line', (line) => {
  input = +line;
}).on('close', () => {
  // 입력받은 길이 N 만큼의 배열을 0으로 초기화
  const init = Array.from({ length: input }, () => 0),
    cnt = 1;
  init[0] = 0;

  while (++idx < input) {
    init[idx] = cnt + init[idx - 1];

    // 3과 2로 나눠지는 수들 조심(6, 12....)
    // else if 썻다가 틀림
    if ((idx + 1) % 2 === 0) {
      init[idx] = Math.min(init[idx], cnt + init[(idx + 1) / 2 - 1]);
    }

    if ((idx + 1) % 3 === 0) {
      init[idx] = Math.min(init[idx], cnt + init[(idx + 1) / 3 - 1]);
    }
  }

  let answer = init[init.length - 1];

  console.log(answer);
});

/* 
  Tip : 다이나믹 Bottom-up
*/
