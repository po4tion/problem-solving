// 2845번 파티가 끝나고 난 뒤
const rl = require('readline').createInterface(process.stdin, process.stdout);

let giver = [],
  answer = '';

rl.on('line', (value) => {
  giver.push(value.split(' ').map((x) => parseInt(x, 10)));
}).on('close', () => {
  const [L, P] = giver.shift(),
    sum = L * P;
  giver = giver.shift();

  for (let i = 0; i < giver.length; i++) {
    answer += giver[i] - sum + ' ';
  }

  console.log(answer);
});
