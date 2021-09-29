// 5575번 타임 카드
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (value) => {
  input.push(value.split(' ').map((x) => +x));
}).on('close', () => {
  let answer = '';

  input.forEach((obj) => {
    const [h1, m1, s1, h2, m2, s2] = obj;
    const time1 = s1 + m1 * 60 + h1 * 60 * 60,
      time2 = s2 + m2 * 60 + h2 * 60 * 60;
    const calculate = time2 - time1;

    const hour = Math.floor(calculate / 3600);
    const minute = Math.floor((calculate % 3600) / 60);
    const second = calculate % 60;

    answer += `${hour} ${minute} ${second} \n`;
  });

  console.log(answer);
});
