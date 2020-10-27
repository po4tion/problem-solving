// 택시 기하학
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', function (line) {
  input = +line;
}).on('close', function () {
  euclid(input);
  taxi(input);
});

function euclid (x) {
  return console.log((x**2 * Math.PI).toFixed(6));
}

function taxi (x) {
  return console.log(((2 * x)**2 / 2).toFixed(6));
}