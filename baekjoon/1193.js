// 분수찾기
const readline = require('readline');
const { start } = require('repl');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
  input = parseInt(line);
}).on('close', function () {
  let n = 1;
  let sum = 0;
  let startNum = 0;

  if (input === 1) {
    return '1/1';
  }

  while(sum < input) {
    n++;
    sum = (n * (n + 1)) / 2;
  }

  startNum = sum - (n-1);

  let array = [];
  let temp = n;
  let num = 1;

  if (n % 2 !== 0) {
    for (let i = startNum; i <= input; i++) {
      array.push(`${temp}/${num}`);
      temp--;
      num++;
    }
  } else {
    for (let i = startNum; i <= input; i++) {
      array.push(`${num}/${temp}`);
      temp--;
      num++;
    }
  }
  
  console.log(array[input-startNum]);
  
});

// hanmailco34
var a = Number(input);
var count = 0;

while(a > 0) {
	count++;
	a -= count;
}

if(count % 2 ==0) {
	console.log(`${count + a}/${1 + -a}`);
}
else {	
	console.log(`${1 + -a}/${count + a}`);
}
