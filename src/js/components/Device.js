/* eslint-disable padding-line-between-statements */
import Devices from '../adapters/DevicesAdapter';

export default class Device extends Devices {
	drawDevicesInfo(data) {
		console.log('Constructor Device');
		super.drawDevicesInfo(data);

		// const svg = document.querySelector('.d3__circle');
		// const devices = Object.entries(data[1]).slice(0, 2);
		// const wrapper = Object.assign(document.createElement('div'), {
		// 	className: 'd3__devices'
		// });
		// const devicesTablet = Object.assign(document.createElement('div'), {
		// 	className: 'd3__devices--tablet'
		// });
		// const tablet = Object.assign(document.createElement('div'), {
		// 	className: 'd3__tablet'
		// });
		// const tabletValue = Object.assign(document.createElement('div'), {
		// 	className: 'd3__tablet--value'
		// });
		// devicesTablet.appendChild(tablet);
		// devicesTablet.appendChild(tabletValue);
		// wrapper.appendChild(devicesTablet);

		// const devicesSmartphone = Object.assign(document.createElement('div'), {
		// 	className: 'd3__devices--smartphone'
		// });
	}
}
