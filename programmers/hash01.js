// 해시 - 완주하지 못한 선수

// tried - 1 (정확성 테스트는 pass, 효율성 테스트 fail)
// 문제의 핵심은 해시의 충돌(Collision)을 어떠한 방법으로 해결할 것인가?

// const participant = ['leo', 'kiki', 'eden'];
// const participant = ['mislav', 'stanko', 'mislav', 'ana'];
// const completion = ['eden', 'kiki'];
// const completion = ['stanko', 'ana', 'mislav'];
// const start = {};
// const dist = {};

// let idx = 0;

// let answer = '';

// // 키, 값 넣어주기
// for (let part of participant) {
//   start[idx] = part;
//   idx++;
// }

// idx = 0;

// // 키, 값 넣어주기
// for (let comp of completion) {
//   dist[idx] = comp;
//   idx++;
// }

// for (let part in start) {
//   for (let comp in dist) {
//     if (Object.is(start[part], dist[comp])) {
//       start[part] = true;
//       dist[comp] = undefined;
//     }
//   }
// }

// for (let part in start) {
//   if (start[part] !== true) {
//     answer = start[part];
//   }
// }

// console.log(start);
// console.log(dist);
// console.log(answer);

// tried - 2
const participant = ['leo', 'kiki', 'eden'];
// const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['eden', 'kiki'];
// const completion = ['stanko', 'ana', 'mislav'];
let answer = '';
participant.sort();
completion.sort();

console.log(participant);
console.log(completion);

completion.forEach((el, idx) => {
  if (el !== participant[idx]) {
    answer = participant[idx];
  }
});

if (answer === '') {
  answer = participant.pop();
}

console.log(answer);
