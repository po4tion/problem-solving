// 4299번 AFC 윔블던

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
  rl.close();
}).on('close', () => {
  const a = parseInt((input[0] + input[1]) / 2),
    b = parseInt((input[0] - input[1]) / 2);

  if (b >= 0 && a + b === input[0] && a - b === input[1]) console.log(a, b);
  else console.log(-1);
});

/*
  틀린 이유
  
  a, b에 parseInt를 하지 않아 소수점 계산 ex) 5 2 => 3.5 1.5 골은 소수점이 나올 수가 없다. 3 1로 변환하고 3 + 1 = 4이므로 -1을 출력
*/
