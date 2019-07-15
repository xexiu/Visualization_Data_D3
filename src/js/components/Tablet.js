/* eslint-disable padding-line-between-statements */

import AbstractDevice from './AbstractDevice';
import '../../css/tablet.css';

export default class Tablet extends AbstractDevice {
	constructor(model) {
		super(model);
		this.model = model;
	}
	showInfo(data, index) {
		super.showInfo(data, index, 0);
	}
}
