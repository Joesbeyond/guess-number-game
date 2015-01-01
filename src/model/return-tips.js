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
	var countAB =  countA  + 'A' + countB + 'B';
	return countAB ;
}; 

ReturnTips.prototype.getResult = function(countAB, times ,correctAnswer) {
	if (countAB === '4A0B') {
		return 'congratulations!';
	} else {
		
		if (times === 0) {
			return '您输入的次数已用尽，天才如你一般，再接再厉！正确答案是' + correctAnswer
		} else {
			return countAB + '\n请再尝试，你还有' + times + '次机会';			
		}

	};
};
module.exports = ReturnTips;
