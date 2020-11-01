// 체스판 다시 칠하기
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];
let count = 0;
const chessWhite =  [
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W']
];
const chessBlack =  [
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B']
];

rl.on('line', function (line) {
  if (count < 1) {
    input = line.split(' ').map(x => +x);
    count++;
  } else {
    input.push(line.split(''));
  }
}).on('close', function () {
  const n = input.shift();
  const m = input.shift();
  count = ((n - 8) + 1) * ((m - 8) + 1);

  let height = 0;
  let width = 0;
  let diffNums = [];

  while (count > 0) {
    let diffNum_1 = 0;
    let diffNum_2 = 0;

    for (let i = height; i < 8 + height; i++) {
      for (let j = width; j < 8 + width; j++) {
        if (input[i][j] !== chessWhite[i - height][j - width]) {
          diffNum_1++;
        }

        if (input[i][j] !== chessBlack[i - height][j - width]) {
          diffNum_2++;
        }         
      }
    }

    diffNums.push(diffNum_1);
    diffNums.push(diffNum_2);

    if (width === m - 8) {
      width = 0;
      if (height !== n - 8) {
        height++;
      }
    } else {
      width++;
    }

    count--;
  }

  console.log(Math.min(...diffNums));
});


/* 
 처음 문제를 풀었을 때 W로 시작하면 classWhite랑 비교를, B로 시작하면 classBlack과 비교를 해서 제출했을 때 틀렸다.
이 문제의 함정은 W로 시작한다 해도 black 체스판으로 페인트칠을 다시할 경우 다시칠하는 경우의 수가 더 적을수도 있다는 것이다.
*/