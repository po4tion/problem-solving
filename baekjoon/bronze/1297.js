// 1297번 TV크기

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => +x);
}).on('close', () => {
  const diagonal = input.shift();

  const [x, y] = pythagoras(diagonal, input[0], input[1]);

  console.log(x, y);
});

function pythagoras(d, x, y) {
  return [
    Math.floor(
      Math.sqrt(Math.pow(d, 2) / (Math.pow(x, 2) + Math.pow(y, 2))) * x,
    ),
    Math.floor(
      Math.sqrt(Math.pow(d, 2) / (Math.pow(x, 2) + Math.pow(y, 2))) * y,
    ),
  ];
}
