// #10768 특별한 날
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const [month, day] = input;

  if (month < 2) console.log('Before');
  else if (2 < month) console.log('After');
  else {
    if (day < 18) console.log('Before');
    else if (day > 18) console.log('After');
    else console.log('Special');
  }
});
