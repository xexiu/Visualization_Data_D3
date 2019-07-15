/* eslint-disable padding-line-between-statements */
export function buildDomElement(element, className, text) {
	return Object.assign(document.createElement(element), {
		className,
		innerText: text || ''
	});
}
