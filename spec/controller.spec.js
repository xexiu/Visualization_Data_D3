import { isEven } from '../src/Controller.js.js';

describe('Controller', () => {
	it('should be able to lower case a string', () => {
		expect(isEven(2)).toBeTruthy();
	});
});
