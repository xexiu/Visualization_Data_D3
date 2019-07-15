/* eslint-disable padding-line-between-statements */
import Tablet from '../components/Tablet';
import Smartphone from '../components/Smartphone';

export default class DevicesAdapter {
	constructor(model) {
		this.tablet = new Tablet(model);
		this.smartphone = new Smartphone(model);
	}

	drawDevices(data, index) {
		this.tablet.showInfo(data, index);
		this.smartphone.showInfo(data, index);
	}

	drawDevicesMetrics() {
		throw new Error('Not implemented method drawDevicesMetrics');
	}
}
