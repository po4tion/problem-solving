// #16431 베시와 데이지
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => +x));
}).on('close', () => {
  const [bessie, daisy, john] = input;

  // 거리 구하기
  const daisyDt = Math.abs(john[1] - daisy[1]) + Math.abs(john[0] - daisy[0]);
  const bessieDt = Math.ceil(
    (Math.abs(john[1] - bessie[1]) + Math.abs(john[0] - bessie[0])) / 2,
  );

  if (bessieDt > daisyDt) console.log('daisy');
  else if (bessieDt < daisyDt) console.log('bessie');
  else console.log('tie');
});

/*
Input
3 5
1 1
2 3

Output
bessie

Input
13 13
11 11
11 12

Output
daisy

Input
4 5
5 4
4 4

Output
tie
*/
