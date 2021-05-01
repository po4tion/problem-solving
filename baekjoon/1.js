const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((x) => parseInt(x));
}).on('close', function () {
  console.log();
  process.exit();
});
// ---------------------------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((x) => parseInt(x));

  rl.close();
});
// ---------------------------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((x) => parseInt(x));
}).on('close', function () {
  console.log();
});

// --------------------------------------------------------------------
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((x) => parseInt(x));
}).on('close', function () {
  console.log();
});

// -----------------------------------------------------------------
// concat 으로 1차원 배열 만들어서 풀기 가능
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];
let test;

rl.on('line', function (line) {
  test = input.concat(line.split('').map((x) => parseInt(x)));
}).on('close', function () {
  console.log(test);
});

// fs 모듈 사용
var fs = require('fs');
var input = fs.readFileSync('dev/stdin.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
