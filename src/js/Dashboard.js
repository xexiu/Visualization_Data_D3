/* eslint-disable padding-line-between-statements */

import '../css/dashboard.css';
import Circles from '../js/components/Circles';
import Devices from '../js/components/Devices';
import DataModel from '../js/model/DataModel';
import { buildDomElement } from '../js/utils/DOMVirtual';
import { getValues } from '../js/utils/objectUtils';

function buildWrapper({ metricName }) {
	const container = document.querySelector('.d3__metrics');
	const wrapper = buildDomElement('div', `d3__wrapper--${metricName}`);
	container.appendChild(wrapper);
}

export default class Dashboard {
	constructor() {
		this.model = new DataModel();
		this.circles = new Circles();
		this.devices = new Devices();
	}

	init() {
		this.createChildren(this.model);
	}

	createChildren() {
		Array.from(getValues(this.model.getData())).forEach((data) => {
			const {
				getMetricName,
				getMetricColor,
				getDevicesValues,
				getDevicesTotalValue,
				getDevices
			} = this.model;
			const objToDraw = {
				metricName: getMetricName(data),
				metricColor: getMetricColor(data),
				devicesValues: getDevicesValues(data),
				devicesTotalValue: getDevicesTotalValue(data),
				devices: getDevices(data)
			};

			buildWrapper(objToDraw);

			this.circles.drawCircles(objToDraw);
			this.devices.drawDevices(objToDraw);
		});
	}
}
