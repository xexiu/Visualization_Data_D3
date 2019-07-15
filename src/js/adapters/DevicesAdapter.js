/* eslint-disable padding-line-between-statements */
import Tablet from '../devices/Tablet';
import Smartphone from '../devices/Smartphone';

export default class Devices {
	constructor() {
		this.tablet = new Tablet();
		this.smartphone = new Smartphone();
	}
	drawDevicesInfo(data) {
		this.tablet.showInfo(data);
		this.smartphone.showInfo(data);
	}
}
