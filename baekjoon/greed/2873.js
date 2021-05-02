// 2873번 롤러코스터
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', function () {
  const [line, row] = input.shift();
  const sum = 0;
  let answer = '';
  const start = input[0][0];
  const end = input[input.length - 1][input.length - 1];
  let min = input[0][1];
  const minArr = [0, 1];

  if (line % 2 === 1) {
    for (let i = 0; i < line; i++) {
      for (let j = 0; j < row - 1; j++) {
        if (i % 2 === 0) {
          answer += 'R';
        } else {
          answer += 'L';
        }
      }
      if (i !== line - 1) {
        answer += 'D';
      }
    }
  } else if (row % 2 === 1) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < line - 1; j++) {
        if (i % 2 === 0) {
          answer += 'D';
        } else {
          answer += 'U';
        }
      }
      if (i !== row - 1) {
        answer += 'R';
      }
    }
  } else if (line % 2 === 0 && row % 2 === 0) {
    // 최소값
    for (let i = 0; i < line; i++) {
      for (let j = 0; j < row; j += 2) {
        if (i % 2 === 0) {
          if (min > input[i][j + 1]) {
            min = input[i][j + 1];
            minArr[0] = i;
            minArr[1] = j + 1;
          }
        } else {
          if (min > input[i][j]) {
            min = input[i][j];
            minArr[0] = i;
            minArr[1] = j;
          }
        }
      }
    }
    console.log(minArr[0]);
    console.log(minArr[1]);

    Loop: for (let i = 0; i < minArr[0] + 1; i++) {
      for (let j = 0; j < row - 1; j++) {
        if (input[i][j] === input[minArr[0]][minArr[1]]) {
          answer = answer.slice(0, answer.length - 1);
          break Loop;
        }

        if (i % 2 === 0) {
          answer += 'R';
        } else {
          answer += 'L';
        }
      }

      answer += 'D';
    }
  }

  console.log(answer);
});

/* 
  부지는 직사각형

  R 행 C 열

  START - 가장 왼쪽 위 칸
  END - 가장 오른쪽 아래 칸

  이동경로
  * 현재 있는 칸과 위, 아래, 왼쪽, 오른쪽 인접한 칸으로 이동 가능
  * 각 칸은 한 번 방문 가능, 방문하지 않은 칸 있어도 됨
  * 각 칸에는 탑승자가 얻을 수 있는 기쁨을 나타낸 숫자가 적혀있다
  * 롤러코스터 탄 사람이 얻을 수 있는 기쁨은 지나간 칸의 기쁨의 합
  
  출력
  * 가장 큰 기쁨을 주는 롤러코스터의 움직임
*/
