var _ = require('lodash');
function ReturnTips(randomNum, answer) {
	this.randomNum = randomNum;
	this.answer = answer;
};

ReturnTips.prototype.getReturnTips = function() {
	var countA = 0;
	var countB = 0;
	
	for (var i = 0; i < this.answer.length; i++) {
		if (this.answer[i] === this.randomNum[i]){
			 countA += 1;
		}else {
			if (_.contains(this.randomNum, this.answer[i])) {
				countB += 1;
			};
		}
	};
	return countA  + 'A' + countB + 'B';
};

module.exports = ReturnTips;