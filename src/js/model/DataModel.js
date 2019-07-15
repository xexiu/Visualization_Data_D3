/* eslint-disable padding-line-between-statements */
import { dataJSON } from '../../../data/smarthphone_tablet';

export default class DataModel {
	constructor() {
		this.data = dataJSON;
	}

	getData() {
		return this.data;
	}

	setData(data) {
		this.data = data;
	}
}
