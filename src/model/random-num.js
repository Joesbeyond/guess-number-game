var _ =require('lodash');
function RandomNum(){

};

RandomNum.prototype.getRandomNum = function() {
/*  var randomNum="";
  for(var i = 0;i < 4; i++) {
    randomNum += Math.floor(Math.random()*10);
  }
  return randomNum;
};*/
  var number = 0;
  var randomNum = [];

  while (randomNum.length < 4) {
    number = _.random(0, 9).toString();
    if (!_.contains(randomNum, number)) {
      randomNum.push(number);
    }
  }
  return randomNum;
};

module.exports = RandomNum;