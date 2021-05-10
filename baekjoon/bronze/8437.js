const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (value) => {
    input.push(BigInt(value));
}).on('close', () => {
    const a = ((input[0] + input[1]) / 2n).toString();
    const b = ((input[0] - input[1]) / 2n).toString();

    console.log(`${a}\n${b}`);
});

/* BigInt 를 템플릿 리터럴에 넣으면 안된다. BigInt는 같은 자료형끼리만 계산해야 정확하다. 템플릿 리터럴에 BigInt가 들어가게 되면 type이 string으로 바뀌게 되므로
조심해야 한다. */

/* 
    BigInt 여러줄 출력을 어떻게 해야 하지? 답은 반복문 돌면서 clg 밖에 없는 건가?
*/

/* 
    이 문제 약 56분 걸림..... toString을 통해 6n이나 4n 뒤에 붙은 n을 제거해줘야 한다.
 */
