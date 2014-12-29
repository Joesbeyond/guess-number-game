jest.dontMock('../src/model/return-tips');
jest.dontMock('lodash');

describe('ReturnTips()',function() {
	describe('#getReturnTips',function() {
		it('should return correct tips', function() {

			var ReturnTips = require('../src/model/return-tips');
			var randomNum = [1, 2, 3, 4];
			var answer = [1, 4, 5, 6];

			var returnTips = new ReturnTips(randomNum, answer);
			var result = returnTips.getReturnTips();

			expect(result).toBe('1A1B');

		});
	});
});	