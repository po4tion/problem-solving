// #14935 FA
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = 0;

rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  const store = [];
  let count = 0;
  const fx = (num) => {
    if (count > 0) return;
    const array = num.split('');
    const result = array[0] * array.length;

    if (store.length) {
      if (result === store[store.length - 1]) count++;

      store.push(result);
    } else store.push(result);

    fx(result + '');
  };

  fx(input);

  if (count) console.log('FA');
});

/* 
Input
932

Output
FA
*/
