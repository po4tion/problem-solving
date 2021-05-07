let n = 20;

const store = [];

while (n !== 1 && n !== 2) {
  if (n === 3) {
    n = 4;
    break;
  }

  let r = parseInt(n % 3);

  if (!r) r = 4;

  n = parseInt((n - 1) / 3);

  store.push(r);
}

const answer = '' + n + store.reverse().join('');
console.log(answer);
