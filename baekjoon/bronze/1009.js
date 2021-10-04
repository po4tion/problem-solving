// #1009 분산처리
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => +x));
}).on('close', () => {
  const testCase = input.shift()[0];
  let answer = '';

  for (let i = 0; i < testCase; i++) {
    const pows = [];
    let k = 1,
      pow = 0;

    // 반복되는 일의 자리 수를 찾기
    while (true) {
      pow = ('' + Math.pow(input[i][0], k)).split('');
      const popNum = +pow.pop();

      if (pows.includes(popNum)) break;
      else pows.push(popNum);

      k++;
    }

    let index = (input[i][1] % pows.length) - 1;

    if (index === -1) index = pows.length - 1;

    answer += (pows[index] ? pows[index] : 10) + '\n';
  }

  console.log(answer);
});

/* 
[Input]
5
1 6
3 7
6 2
7 100
9 635
[Output]
1
7
6
1
9
*/
