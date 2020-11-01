// 영화감독 숌
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', function (line) {
  input = +line;
  
  rl.close();
}).on('close', function () {
  let count = 0;
  let i = 666;

  while (true) {
    const str = String(i++);

    if (str.includes('666')) {
      count++;
    }

    if (count === input) {
      return console.log(str);
    }
  }
});