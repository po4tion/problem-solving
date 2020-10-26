// 베트르랑 공준
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(+line);

  if (input.indexOf(0) !== -1) {
    rl.close();
  }
}).on('close', function () {
  input.pop(); // 맨 마지막 0 제거

  const result = input.map(x => bertrands(x));
  let output = '';

  for (let i = 0; i < result.length; i++) {
    output += result[i] + '\n';
  }

  console.log(output);
});

function bertrands (inputs) {
  let count = 0 ;
  
  for (let i = inputs + 1; i <= inputs * 2; i++) {
    let isNotPrime = 0;

    if (i <= 1) {
      continue;
    } else if (i <= 3) {
      count++;
      continue;
    }
    
    if (i % 2 === 0 || i % 3 === 0) {
      continue;
    }

    for (let j = 5; j <= Math.sqrt(i); j += 6) {
      if (i % j === 0 || i % (j+2) === 0) {
        isNotPrime++;
        break;
      }
    }

    if (isNotPrime !== 0) {
      continue;
    }

    count++;
  }
  return count;
}