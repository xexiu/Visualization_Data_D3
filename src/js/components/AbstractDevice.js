/* eslint-disable max-len */
/* eslint-disable padding-line-between-statements */

import { buildDomElement } from '../utils/DOMVirtual';
import { getPercentatge } from '../utils/mathsUtils';

export default class AbstractDevice {
	constructor(model) {
		this.model = model;
	}
	showInfo(data, index, deviceIndex) {
		const {
			getDevice,
			getDeviceValue,
            getDevicesTotalValue,
            getMetricName
		} = this.model;

		// percent = obtained * 100 / total --> 12 * 100 / 20 = 60%
		const container = document.querySelector(`.d3__wrapper${index}`);
		const tablet = buildDomElement('span', `d3__${getDevice(data[1], deviceIndex)}--${getMetricName(data[0])}`, getDevice(data[1], deviceIndex));
		const percent = buildDomElement('span', `d3__${getDevice(data[1], deviceIndex)}--percent`, `${getPercentatge(getDeviceValue(data[1], deviceIndex), getDevicesTotalValue(data[1]))}%`);
		const value = buildDomElement('span', `d3__${getDevice(data[1], deviceIndex)}--value`, `${new Intl.NumberFormat().format(getDeviceValue(data[1], deviceIndex))}€`);

		container.appendChild(tablet);
		container.appendChild(percent);
		container.appendChild(value);
	}
}
