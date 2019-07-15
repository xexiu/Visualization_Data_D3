/* eslint-disable padding-line-between-statements */

import '../css/dashboard.css';
import Circle from '../js/components/Circle';
import Device from '../js/components/Device';
import DataModel from '../js/model/DataModel';

export default class Dashboard {
	constructor() {
		this.model = new DataModel();
		this.circle = new Circle();
		this.device = new Device();
	}
	init() {
		this.createChildren();
	}
	createChildren() {
		const dataModel = this.model.getData();

		// circle
		if (dataModel) {
			Object.entries(dataModel).forEach(data => {
				this.circle.drawCircle(data);
				this.device.drawDevice(data);
			});
		}
	}
}
