let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = 0;
let getNumber = function () {
  rl.question('Enter Number : ', function (answer) {
    if (answer == 'stop') {
      console.log('Sum of All Numbers =' + result);
      return rl.close();
    }
    result += parseInt(answer);
    getNumber();
  });
};

getNumber();
