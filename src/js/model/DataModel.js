/* eslint-disable padding-line-between-statements */
import { dataJSON } from '../../../data/smarthphone_tablet';
import { sum } from '../utils/mathsUtils';

export default class DataModel {
	constructor() {
		this.data = dataJSON;
	}

	getMetric() {
		// all object metric
	}

	getMetricName(data) {
		// name of the metric -> revenue
		return data || 'No metric name!';
	}

	getDevicesTotalValue(data) {
		// 3000 + 8000
		return data && Object.values(data).slice(0, 2).reduce(sum);
	}

	getDeviceValue(data, index) {
		// 3000
		return data && Object.values(data).splice(0, 2)[index];
	}

	getDevicesValues(data) {
		// [3000, 8000]
		return data && Object.values(data).slice(0, 2);
	}

	getDevice(data, index) {
		// tablet
		return data && Object.keys(data)[index];
	}

	getMetricColor(data) {
		// ['#ecc54d', '#af5e2c']
		return (data && data.color) || '';
	}

	getData() {
		return this.data;
	}

	setData(data) {
		this.data = data;
	}
}
