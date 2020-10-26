// 직사각형에서 탈출
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
  const x = input.shift();
  const y = input.shift();
  const w = input.shift();
  const h = input.shift();

  console.log(isShortest(x, y, w, h));
});

function isShortest (x, y, w, h) {
  let contest = [];

  contest.push(x);
  contest.push(w - x);
  contest.push(y);
  contest.push(h - y);

  return Math.min(...contest);
}