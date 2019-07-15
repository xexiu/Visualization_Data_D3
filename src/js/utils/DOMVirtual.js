/* eslint-disable padding-line-between-statements */
export function buildDomElement(element, className) {
	return Object.assign(document.createElement(element), {
		className
	});
}
