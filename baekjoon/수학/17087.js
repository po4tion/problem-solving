// 17087번 숨바꼭질 6
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', () => {
  const N = input[0][0],
    S = input[0][1];
  input.shift();

  // 1차원 배열로 변경
  input = input[0];

  calc(N, S, input);
});

function calc(a, b, c) {
  // 수빈이의 위치로부터 동생들(N명)의 위치 값의 차
  const array = [];

  for (let i = 0; i < a; i++) {
    array.push(Math.abs(b - c[i]));
  }

  // 위치 값의 차들의 최대공약수를 구한다
  let num = array[0];

  for (let i = 1; i < array.length; i++) {
    num = gcd(num, array[i]);
  }

  console.log(num);
}

function gcd(x, y) {
  while (y) {
    [x, y] = [y, x % y];
  }

  return x;
}
