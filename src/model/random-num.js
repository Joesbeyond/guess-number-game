function RandomNum(){

};

RandomNum.prototype.getRandomNum = function() {
  var randomNum="";
  for(var i = 0;i < 4; i++) {
    randomNum += Math.floor(Math.random()*10);
  }
  return randomNum;
};
module.exports = RandomNum;