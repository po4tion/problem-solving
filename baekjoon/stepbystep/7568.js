// 덩치
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => +x));
}).on('close', function () {
  const count = input.shift();
  let ranking = '';

  for (let i = 0; i < count; i++) {
    let rank = 1;

    for (let j = 0; j < count; j++) {
      if (i === j) {
        continue;
      }

      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
        rank++;
      }
    }

    ranking += rank + ' ';
  }
  
  console.log(ranking);
});