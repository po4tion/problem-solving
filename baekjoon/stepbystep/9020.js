// 골드바흐의 추측
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  input.shift();

  input.map(input => {
    let partition = [];

    for (let i = 2; i <= input / 2; i++) {
      const leftNum = isPrime(i);
      const rightNum = isPrime(input - i);

      if (leftNum === -1 || rightNum === -1) {   // 소수인지 확인
        continue;
      }

      partition.push([leftNum, rightNum]);
    }

    if (partition.length > 1) {  // 골드바흐 파티션이 여러 가지인 경우
      const idx = sort(partition);

      return console.log(partition[idx][0], partition[idx][1]);
    }
    
    console.log(partition[0][0], partition[0][1]);
  });
});

function isPrime (x) {
  if (x <= 3) {
    return x;
  }

  if (x % 2 === 0 || x % 3 === 0) {
    return -1;
  }

  for (let i = 5; i <= Math.sqrt(x); i += 6) {
    if (x % i === 0 || x % (i + 2) === 0) {
      return -1;
    }
  }

  return x;
}

function sort (y) {
  const array = y;
  const arrayLen = array.length;
  let min = [];

  for (let i = 0; i < arrayLen; i++) {
    min.push(Math.abs(array[i][0] - array[i][1]));
  }

  const mathMin = Math.min(...min);
  
  return min.indexOf(mathMin);
}