import { buildDomElement } from '../src/js/utils/DOMVirtual';

describe('DOMVirtual Utils', () => {
	const body = document.body;

	it('should create an element an append it to the document body', () => {
		const div = buildDomElement('div', 'my-class', 'Hello World');

		body.appendChild(div);

		const myClass = body.querySelector('.my-class');

		expect(myClass).toBeTruthy();
	});
});
