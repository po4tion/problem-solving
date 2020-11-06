// 단어 정렬

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const testCase = input.shift();
  const words = {};

  for (let i = 0; i < testCase; i++) {
    words[input[i]] = input[i].length;
  }

  const wordsArray = [];

  for (const word in words) {
    wordsArray.push([word, words[word]]);
  }

  wordsArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      if (a[0] < b[0]) { return -1; }
      else if (a[0] > b[0]) { return 1; }
      return 0;
    }
  });

  let str = '';

  for (let i = 0; i < wordsArray.length; i++) {
    str += wordsArray[i][0] + '\n';
  }

  console.log(str);
});


/* 
조건 1: 길이가 짧은 것부터
조건 2: 길이가 같으면 사전 순으로
*/