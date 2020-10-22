const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = parseInt(line);
}).on('close', function () {
    if (input > 89) {
      console.log("A");
    } else if (input > 79) {
      console.log("B");
    } else if (input > 69) {
      console.log("C");
    } else if (input > 59) {
      console.log("D");
    } else {
      console.log("F");
    }
    process.exit();
});