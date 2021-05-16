// 1212번 8진수 2진수
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split('').map((x) => BigInt(x));
  rl.close();
}).on('close', () => {
  let answer = '';
  const len = input.length;

  for (let i = 0; i < len; i++) {
    answer += binary(input[i], i);
  }

  console.log(answer);
});

function binary(num, i) {
  let x = parseInt(num, 8);
  let y = x.toString(2);
  let len = y.length;

  if (i == 0) return y;
  else if (len < 2) return '0' + '0' + y;
  else if (len < 3) return '0' + y;
  else return y;
}
