// 2004번 조합 0의 개수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => parseInt(x));
}).on('close', () => {
  const n = input[0],
    m = input[1],
    nm = input[0] - input[1],
    two = calc(n)[0] - (calc(m)[0] + calc(nm)[0]),
    five = calc(n)[1] - (calc(m)[1] + calc(nm)[1]),
    answer = Math.min(two, five);

  console.log(answer);
});

function calc(v) {
  let count_two = 0,
    count_five = 0;

  for (let i = 2; i <= v; i *= 2) count_two += parseInt(v / i);

  for (let i = 5; i <= v; i *= 5) count_five += parseInt(v / i);

  return [count_two, count_five];
}
