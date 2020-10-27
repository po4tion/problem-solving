// 직각삼각형
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x))); // 6 8 10

  const inputLen = input.length;

  if (input[inputLen -1 ][0] === 0) {
    input.pop();
    rl.close();
  }
}).on('close', function () {
  input.map(x => {
    const a = x[0];
    const b = x[1];
    const c = x[2];

    const output = isRightAngled(a, b, c, x);
    
    console.log(output);
  });
});

function isRightAngled (a, b, c, x) {
  const max = Math.max(a, b, c);
  const xyCalc = x.filter(y => y !== max);
  const isRight = (xyCalc[0]**2 + xyCalc[1]**2 === max**2) ? 'right' : 'wrong';

  return isRight;
}


/* 
피타고라스의 정리를 이용하여 풀이함.
 */