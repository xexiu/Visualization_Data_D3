/* eslint-disable padding-line-between-statements */
import { dataJSON } from '../../../data/smarthphone_tablet';
import { sum } from '../utils/mathsUtils';
import { getValues, getEntries } from '../utils/objectUtils';

export default class DataModel {
	constructor() {
		this.data = dataJSON;
	}

	getMetric(data) {
		// all object metric
		return data;
	}

	getMetricName(data) {
		// name of the metric -> revenue
		return (data && data.metricName) || 'No metric name!';
	}

	getDevicesTotalValue(data) {
		// 3000 + 8000
		return getValues(data && data.devices).reduce(sum);
	}

	getDevicesValues(data) {
		// [3000, 8000]
		return getValues(data && data.devices);
	}

	getDevices(data) {
		// -> [Array(2), Array(2)]
		return data && getEntries(data.devices);
	}

	getMetricColor(data) {
		// ['#ecc54d', '#af5e2c']
		return (data && data.properties.color) || '';
	}

	getData() {
		// all data
		return this.data;
	}

	setData(data) {
		this.data = data;
	}
}
