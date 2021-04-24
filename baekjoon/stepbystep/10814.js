// 나이순 정렬

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  const testCase = +input.shift();

  input.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
  });

  let str = '';

  for (let i = 0; i < testCase; i++) {
    str += input[i][0] + ' ' + input[i][1] + '\n';
  }

  console.log(str);
});

/* 
  조건1 : 나이순으로 정렬
  조건2 : 나이가 같으면 가입한 순으로 정렬
*/