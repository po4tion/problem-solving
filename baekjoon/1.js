const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
    console.log();
    process.exit();
});
// ---------------------------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(x => parseInt(x));

    rl.close();
});
// ---------------------------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
  console.log();
});

// --------------------------------------------------------------------
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map(x => parseInt(x));
}).on('close', function () {
  console.log();
});