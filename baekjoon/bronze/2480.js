// 2480번 주사위 세개

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = {};

rl.on('line', (line) => {
  line.split(' ').map((x) => {
    if (input[x] === undefined) input[x] = 1;
    else input[x] += 1;
  });
  rl.close();
}).on('close', () => {
  const array = Object.keys(input).map((x) => +x);
  const len = array.length;
  let answer = 0;

  if (len === 1) answer = 10000 + array[0] * 1000;
  else if (len === 2) {
    if (input[array[0]] > input[array[1]]) answer = 1000 + array[0] * 100;
    else answer = 1000 + +array[1] * 100;
  } else {
    const MAX = Math.max(...array);

    answer = MAX * 100;
  }

  console.log(answer);
});
