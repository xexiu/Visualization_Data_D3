/* eslint-disable padding-line-between-statements */

import { buildDomElement } from '../utils/DOMVirtual';
import { getPercentatge } from '../utils/mathsUtils';

export default class AbstractDevice {
	drawDevices({ metricName, deviceName, deviceValue, devicesTotalValue }) {
		// percent = obtained * 100 / total --> 12 * 100 / 20 = 60%
		const percentValue = getPercentatge(deviceValue, devicesTotalValue);
		const container = document.querySelector(`.d3__wrapper--${metricName}`);
		const device = buildDomElement('span', `d3__${deviceName}--${metricName}`, deviceName);
		const percent = buildDomElement('span', `d3__${deviceName}--percent`, `${percentValue}%`);
		const value = buildDomElement('span', `d3__${deviceName}--value`, `${deviceValue}€`);

		container.appendChild(device);
		container.appendChild(percent);
		container.appendChild(value);
	}
}
