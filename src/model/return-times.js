function ReturnTimes(result, times) {
  this.result = result;
  this.times = times;
}

ReturnTimes.prototype.printResult = function () {
  var resultText = '';

  if(this.result === '4A0B') {
    resultText = 'congratulations!';
  } else if (this.times === 0) {
    resultText = 'your answer is ' + this.result +'\ngame over!';
  } else {
    resultText = 'sorry! your answer is ' + this.result +
          '\nyou can try again!' + 'but you only have ' +
          this.times + ' times!';
  }

  return resultText;
};

module.exports = ReturnTimes;
