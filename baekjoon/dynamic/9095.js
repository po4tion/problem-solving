// 9095번 1, 2, 3 더하기

const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input.push(+line);
  if (input.length === input[0] + 1) rl.close();
}).on('close', () => {
  const testCase = input.shift(),
    dp = [, 1, 2, 4],
    MAX = Math.max(...input);

  for (let i = 4; i <= MAX; i++) dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];

  let answer = '';

  for (let i = 0; i < testCase; i++) answer += dp[input[i]] + '\n';

  console.log(answer);
});
