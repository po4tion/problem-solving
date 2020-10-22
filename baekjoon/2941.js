const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    const croatia = [
        'c=', 'c-', 'd-', 's=', 'dz=', 'z=', 'lj', 'nj'
    ];

    let count = 0;
    console.log(typeof(input));
    croatia.map(x => {
        let judge = false;
         do {
            judge = input.includes(x);

            if(judge) {
                input = input.replace(x, ' ');
                count++;
            } 
        } while (judge !== false);
    });

    const len = input.replace(/(\s*)/g, "");
    
    console.log(count + len.length);
    process.exit();
});