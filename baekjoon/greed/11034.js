// 11034번 캥거루 세마리2
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', function () {
  for (let i = 0; i < input.length; i++) {
    greed(input[i]);
  }
});

function greed(array) {
  let [A, B, C] = array;
  let answer = 0;

  // 바깥 캥거루 둘 모두의 간격이 1일 경우에는 점프를 못함
  while (!(range(A, B) === 1 && range(B, C) === 1)) {
    // 선택과정
    const move = range(A, B) < range(B, C) ? A : C;

    // 가치가 가장 높은 값(거리 최소)을 골라 적정성 점검을 한다.
    if (move === A) {
      A = B;
      B = B + 1;

      answer++;
    } else if (move === C) {
      C = B;
      B = B - 1;

      answer++;
    }
  }

  return console.log(answer);
}

// 두 캥거리 사이의 거리 구하기
function range(a, b) {
  return Math.abs(a - b);
}

/* 
  캥거루 세마리
  사막에 수직선 1개
  캥거루는 서로 다른 한 좌표 위
  좌표 중복 X

  1. 바깥쪽의 두 캥거루 중 한 마리가 점프 가능한지 check
  2. 가운데 수와 바깥 쪽 수 사이의 거리가 더 짧은 것 부터 check
  3. 캥거루가 점프 후에 바깥쪽 캥거루가 또 점프 할 수 있는지 check
  3-1. 중앙 캥거루와 바깥쪽 캥거루 사이가 최소인 바깥 캥거루를 선택
  3-2. 선택된 캥거루를 제외한 나머지 두 캥거루 사이로 이동
  3-3. 이동횟수가 최대가 되기 위해서는 중앙 캥거루와 바깥 캥거루 사이로 점프할 때 항상 외곽으로 이동해야 한다.

  선택과정 : 최대 몇번 움직이는지는 확인하려면 (바깥쪽 캥거루 - 중앙 캥거루) 값이 최소값을 가지는 캥거루를 고르면 됨
*/
