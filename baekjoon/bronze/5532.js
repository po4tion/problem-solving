// 5532번 방학 숙제

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const [L, A, B, C, D] = input;
  let idx = 1,
    x,
    y;

  while (true) {
    x = C * idx;
    y = D * idx;

    if (x >= A && y >= B) break;

    idx++;
  }

  const answer = L - idx;

  console.log(answer);
});
