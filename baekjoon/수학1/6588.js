// 6588번 골드바흐의 추측
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];
const result = [];
let answer = '';
let fail = false;

rl.on('line', (line) => {
  if (line === '0') {
    rl.close();
  }
  input.push(+line);
}).on('close', () => {
  const maxNum = Math.max(...input);

  for (let i = 0; i <= maxNum; i++) {
    result[i] = i;
  }

  for (let i = 2; i <= maxNum; i++) {
    if (result[i] === 0) continue;

    for (let j = i + i; j <= maxNum; j += i) {
      result[j] = 0;
    }
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 3; j <= input[i]; j++) {
      if (result[j] && result[input[i] - j]) {
        fail = true;
        answer += `${input[i]} = ${result[j]} + ${result[input[i] - j]}\n`;
        break;
      }
    }
    if (!fail) answer += `"Goldbach's conjecture is wrong."\n`;
  }

  console.log(answer);
});
