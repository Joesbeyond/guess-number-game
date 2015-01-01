
function CheckInput() {
	//this.answer = answer;
};
CheckInput.prototype.getInputNumber = function(answerArray) {

		if(answerArray.length !== 4) {
			return true;
		}; 
		var nary=answerArray.sort(); 
		for(var i=0;i<answerArray.length;i++){ 
			
		if (nary[i]==nary[i+1]){  
			return true;
			} 
		} 
	};

module.exports = CheckInput;