var CheckInput = require('./model/check-input');
var readline = require('readline');

function startGame() {

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//for(var i = 6; i > 0; i--) {
rl.question("please input Four digit?", function(answer) {

  var checkInput = new CheckInput();
  var checkedTrue = checkInput.getInputNumber(answer);
 // var returnTips = new ReturnTips(1234, answer);

  if (checkedTrue) {
  	console.log("congratulations!");
  }else{
  	console.log("that's good:", answer);
  }
  rl.close();
});	
//}

}

startGame();