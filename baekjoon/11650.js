// 좌표 정렬하기

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x)));
}).on('close', function () {
  const testCase = input.shift();

  input.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  let str = '';

  for (let i = 0; i < testCase; i++) {
    str += input[i][0] + ' ' + input[i][1] + '\n';
  }

  console.log(str);
});