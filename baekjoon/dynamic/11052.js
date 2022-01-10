const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', () => {
  const [cardN] = input[0],
    pack = [...input[1]],
    store = [pack[0]];
  let n = 0,
    max = 0;

  const maxNum = (_n, count = 1) => {
    if (store[_n]) return store[_n];

    while (count <= Math.floor((_n + 1) / 2)) {
      max =
        maxNum(_n - count) + maxNum(count - 1) > max
          ? maxNum(_n - count) + maxNum(count - 1)
          : max;

      count++;
    }

    return max;
  };

  for (let i = 0; i < cardN; i++) {
    const max_num = maxNum(i);
    max = 0;
    store[i] = pack[i] > max_num ? pack[i] : max_num;
  }

  console.log(store[cardN - 1]);
});
