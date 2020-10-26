// 네 번째 점
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x)));
}).on('close', function () {
  const firstDot = input.shift();
  const secondDot = input.shift();
  const thirdDot = input.shift();
  let fourthDot = [];

  // 0 번째 인덱스를 x좌표, 1 번째 인덱스를 y좌표라 생각하자.
  for (let i = 0; i < 2; i++) {
    if (firstDot[i] === secondDot[i]) {
      fourthDot.push(thirdDot[i]);
    } else if (firstDot[i] === thirdDot[i]) {
      fourthDot.push(secondDot[i]);
    } else {
      fourthDot.push(firstDot[i]);
    }
  }

  console.log(...fourthDot);
});