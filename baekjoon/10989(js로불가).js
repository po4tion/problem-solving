// 수 정렬하기 (계수정렬)

const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', function (line) {
  input.push(+line);
  
}).on('close', function () {
  const testCase = input.shift();
  const cntArray = new Array(Math.max(...input) + 1).fill(0);
  
  // 입력받은 각 숫자들의 중복개수를 저장. 입력받은 숫자들을 cntArray의 인덱스로 활용.
  for (let i = 0; i < testCase; i++) {
    cntArray[input[i]] += 1;
  }

  // cntArray를 누적합 배열로 변환. 누적합의 0번째 인덱스는 그 전의 값이 없으니 조심.
  for (let i = 1; i < cntArray.length; i++) {
    cntArray[i] += cntArray[i - 1];
  }

  const answer = [];

  for (let i = 0; i < testCase; i++) {
    answer[cntArray[input[i]] - 1] = input[i];            // 인덱스는 0부터 시작하므로 -1.
    cntArray[input[i]] -= 1;
  }

  let str = '';
  
  for (let i = 0; i < testCase; i++) {
    str += answer[i] + '\n';
  }

  console.log(str);
});

/* 
메모리 시간 초과 때문에 풀지 못함.
*/