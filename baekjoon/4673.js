function d(n) {
    const num = String(n);
    let sum = n;

    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }

    return sum;
}

const limNum = 10000;                   // 양의 정수 이므로 0은 X
let numSave = [];
let str = '';

for (let j = 1; j <= limNum; j++) {
    numSave[d(j)] = true; 
}

for (let k = 1; k <= limNum; k++) {
    if (!numSave[k]) {
        str += k + "\n";
    }
}

console.log(str);