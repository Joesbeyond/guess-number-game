var CheckInput = require('./model/check-input');
var ReturnTips = require('./model/return-tips');
var RandomNum = require('./model/random-num');
var readline = require('readline');
var _ = require('lodash');


function startGame() {
  var times = 6;
  console.log('請輸入四個不重复的数字！！');
  var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
  var randomNum = new RandomNum(); 
  var correctAnswer = randomNum.getRandomNum();

  rl.on('line', function(answer) {

  times -= 1;
  var checkInput = new CheckInput();
  // console.log(correctAnswer);
  var answerArray = _.toArray(answer);
  var checked = checkInput.getInputNumber(answerArray);
  if(checked) {
      console.log('please  input no repeat Four digit!');
  }
  var returnTips = new ReturnTips(correctAnswer, answerArray);
  var tips = returnTips.getReturnTips();
  var result = returnTips.getResult(tips,times,correctAnswer);
   if(result === 'congratulations!' || times === 0) {
      console.log(result);
      rl.close();
    } else {
      console.log(result);
    }
    });	
}

startGame();