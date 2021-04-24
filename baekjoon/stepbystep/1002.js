// 터렛
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x)));
}).on('close', function () {
  input.shift();

  input.map(x => {
    const x1 = x[0],
          y1 = x[1],
          r1 = x[2],
          x2 = x[3],
          y2 = x[4],
          r2 = x[5];

    const adjoin = joins(x1, y1, r1, x2, y2, r2);
  
    console.log(adjoin);
  });

});

function joins (x1, y1, r1, x2, y2, r2) {
  const distance = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);

  
  if (distance === 0 && r1 === r2) { 
    return -1; // 두 원이 서로 만나는 점이 무한대인 경우
  } else if (Math.abs(r1 - r2) < distance && distance < r1 + r2 ) {
    return 2; // 두 원이 서로 만나는 점이 두 개인 경우
  } else if (distance === r1 + r2 || distance === Math.abs(r1 - r2)) {
    return 1; // 두 원이 서로 만나는 점이 한 개인 경우, distance === Math.abs(r1 - r2) && distance !== 0 을 원래는 해줘야 하는데 if문 처음에 무한대를 확인하므로 여기서는 제외함.
  } else {
    return 0;  // 두 원이 서로 만나는 점이 없는 경우
  }
}


/* 
두 원의 내접과 외접하는 경우를 생각하여 풀이함.
*/