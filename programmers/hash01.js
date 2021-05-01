// 해시 - 완주하지 못한 선수

// tried - 1 (정확성 테스트는 pass, 효율성 테스트 fail)
// 문제의 핵심은 해시의 충돌(Collision)을 어떠한 방법으로 해결할 것인가?

// const participant = ['leo', 'kiki', 'eden'];
const participant = ['mislav', 'stanko', 'mislav', 'ana'];
// const completion = ['eden', 'kiki'];
const completion = ['stanko', 'ana', 'mislav'];

const runner = {};
let answer = '';

for (let i of participant) {
  if (runner.hasOwnProperty(i)) {
    runner[i] += 1;
  } else {
    runner[i] = 1;
  }
}

for (let j of completion) {
  runner[j] -= 1;
}

for (let k in runner) {
  if (runner[k] > 0) {
    answer = k;
  }
}

console.log(answer);
