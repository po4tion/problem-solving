// 벌집
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = parseInt(line);
}).on('close', function () {
  if (input === 1) {
    return console.log(1);
  }

  let first = 2;
  let answer = 1;

  while(input >= first) {
    first += 6 * answer++;
  }

  console.log(answer);
});

// 2
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = parseInt(line);
}).on('close', function () {
  if (input === 1) {
    return console.log(1);
  }

  let first = 2;
  let last = 7;
  let i = 1;

  while(input >= 2) {
    if (input >= first && input <= last) {
      return console.log(i+1);
    } else {
      first += 6 * i;
      last += 6 * (i+1);
    }
    i++;
  }
});