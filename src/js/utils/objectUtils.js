/* eslint-disable padding-line-between-statements */
export function isEmpty(x) {
	return !x || (x.constructor !== Number && Object.keys(x).length === 0);
}

export function getValues(obj) {
	if (isEmpty(obj)) {
		throw new Error('getValues param is undefined, null or empty');
	}

	return Object.values(obj);
}

export function getKeys(obj) {
	if (isEmpty(obj)) {
		throw new Error('getKeys param is undefined, null or empty');
	}

	return Object.keys(obj);
}

export function getEntries(obj) {
	if (isEmpty(obj)) {
		throw new Error('getEntries param is undefined, null or empty');
	}

	return Object.entries(obj);
}
