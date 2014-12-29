var CheckInput = require('./model/check-input');
var ReturnTips = require('./model/return-tips');
var RandomNum = require('./model/random-num');
var readline = require('readline');
var _ = require('lodash');

function startGame() {

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("please input Four digit?", function(answer) {

  var randomNum = new RandomNum();
  var randomNumOne = randomNum.getRandomNum();
  console.log(randomNumOne);
  /*var checkInput = new CheckInput();
  var checkedTrue = checkInput.getInputNumber(answer);*/
  var answerArray = _.toArray(answer);
  var randomArray = _.toArray(randomNumOne);
  var returnTips = new ReturnTips(randomArray, answerArray);

  console.log(returnTips.getReturnTips());
  rl.close();
});	
}

startGame();