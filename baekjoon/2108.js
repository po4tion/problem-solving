// 통계학

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  const testCase = input.shift();
  input.sort((a, b) => a - b);   // 오름차순으로 정렬
  const avg = Math.round((input.reduce((acc, cur) => acc + cur) / testCase));
  const medianValue = input[Math.floor(testCase / 2)];
  const scope = input[input.length - 1] - input[0];

  const mode = {};

  for (let num of input) {
    if (mode[num]) {
      mode[num]++;
    } else {
      mode[num] = 1;
    }
  }
  
  const max = Math.max(...Object.values(mode)); // 최대 빈도수
  const sorts = [];

  for (let num in mode) {
    if (mode[num] === max) {
      sorts.push(num);
    }
  }

  let result = 0;

  if (sorts.length > 1) {
    sorts.sort((a, b) => a - b);
    result = sorts[1];
  } else {
    result = sorts[0];
  }

  console.log(avg);
  console.log(medianValue);
  console.log(result);
  console.log(scope);
});

// 객체에 for 문 사용할 때 그냥 for 문보다 for in 쓰면 시간이 더 빠르다.