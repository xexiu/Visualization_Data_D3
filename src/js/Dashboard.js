/* eslint-disable padding-line-between-statements */

import '../css/dashboard.css';
import ShapesAdapter from './adapters/ShapesAdapter';
import DevicesAdapter from '../js/adapters/DevicesAdapter';
import DataModel from '../js/model/DataModel';
import { buildDomElement } from '../js/utils/DOMVirtual';

function buildWrapper(index) {
	const container = document.querySelector('.d3__metrics');
	const wrapper = buildDomElement('div', `d3__wrapper${index}`);
	container.appendChild(wrapper);
}

export default class Dashboard {
	constructor() {
		this.model = new DataModel();
		this.shapesAdapter = new ShapesAdapter(this.model);
		this.deviceAdapter = new DevicesAdapter(this.model);
		this.wrapper = buildWrapper;
	}

	init() {
		this.createChildren(this.model);
	}

	createChildren(model) {
		Object.entries(model.getData()).forEach((data, index) => {
			this.wrapper(index);

			this.shapesAdapter.drawShapes(data, index);
			this.deviceAdapter.drawDevices(data, index);
		});
	}
}
