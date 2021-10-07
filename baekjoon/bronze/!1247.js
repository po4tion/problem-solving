// #1247 부호
const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = [];

rl.on('line', (line) => {
  input.push(BigInt(line));
}).on('close', () => {
  let answer = '';

  while (input.length) {
    let sum = 0n;
    const testSet = input.shift();

    for (let i = 0; i < testSet; i++) sum += input.shift();

    if (sum > 0) answer += '+' + '\n';
    else if (sum < 0) answer += '-' + '\n';
    else answer += '0' + '\n';
  }

  console.log(answer);
});

/* 
[Input]
3
0
0
0
10
1
2
4
8
16
32
64
128
256
-512
6
9223372036854775807
9223372036854775806
9223372036854775805
-9223372036854775807
-9223372036854775806
-9223372036854775804
[Output]
0
-
+
*/
