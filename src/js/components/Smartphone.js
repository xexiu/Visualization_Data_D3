/* eslint-disable padding-line-between-statements */

import AbstractDevice from './AbstractDevice';
import '../../css/smartphone.css';

export default class Smartphone extends AbstractDevice {
	constructor(model) {
		super(model);
		this.model = model;
	}
	showInfo(data, index) {
		super.showInfo(data, index, 1);
	}
}
