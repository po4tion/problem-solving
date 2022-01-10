const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', () => {
  const [cardN] = input[0],
    pack = [...input[1]],
    store = [pack[0]];
  let n = 0,
    min = 0;

  const minNum = (_n, count = 1) => {
    if (store[_n]) return store[_n];

    while (count <= Math.floor((_n + 1) / 2)) {
      if (count === 1) min = minNum(_n - count) + minNum(count - 1);

      min =
        minNum(_n - count) + minNum(count - 1) < min
          ? minNum(_n - count) + minNum(count - 1)
          : min;

      count++;
    }

    return min;
  };

  for (let i = 0; i < cardN; i++) {
    const min_num = minNum(i);
    store[i] = pack[i] < min_num ? pack[i] : min_num;
  }

  console.log(store[cardN - 1]);
});
