// #1267 핸드폰 요금
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => Number(x)));
}).on('close', () => {
  const n = input.shift()[0];
  const call = [...input[0]];

  // 영식과 민식
  let ysik = 0,
    msik = 0;

  call.forEach((x) => {
    if (x % 30 === 0) {
      const div = x / 30 + 1;
      ysik += div * 10;
    } else {
      const div = Math.ceil(x / 30);
      ysik += div * 10;
    }

    if (x % 60 === 0) {
      const div = x / 60 + 1;
      msik += div * 15;
    } else {
      const div = Math.ceil(x / 60);
      msik += div * 15;
    }
  });

  if (ysik > msik) console.log(`M ${msik}`);
  else if (ysik < msik) console.log(`Y ${ysik}`);
  else console.log(`Y M ${msik}`);
});

/* 
[Input]
3
40 40 40
[Output]
M 45

[Input]
3
61 61 61
[Output]
Y M 90
*/
