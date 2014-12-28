 jest.dontMock('../src/model/check-input');

describe('CheckInput()',function() {
	describe('#getInputNumber', function() {
		it('should return correct number',function() {

		var CheckInput = require('../src/model/check-input');

		var checkInput = new CheckInput();
		var answer = '1234';
		var result = checkInput.getInputNumber(answer);

		expect(result).toBe(true);
	}); 
 });
});
 