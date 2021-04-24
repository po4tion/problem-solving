// 별 찍기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;
let stars = 0;

rl.on('line', function (line) {
  input = +line;
  stars = Array.from(Array(input), () => Array(input).fill(' '));

  rl.close();
}).on('close', function () {
  starPattern(input);

  let output = '';

  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      output += stars[i][j];
    }
    output += '\n';
  }

  console.log(output);
});

function starPattern (input, idxA = 0, idxB = 0) {
  if (input === 1) {
    stars[idxA][idxB] = '*'
    return;
  }
  
  const divide = input / 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        continue;
      }
      starPattern(divide, (divide * i) + idxA, (divide * j) + idxB);
    }
  }
}