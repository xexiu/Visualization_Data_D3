/* eslint-disable padding-line-between-statements */
export function sum(a, b) {
	return a + b;
}

export function getPercentatge(deviceValue, devicesTotalValue) {
	const num = (deviceValue * 100) / devicesTotalValue;

	return num.toFixed();
}
