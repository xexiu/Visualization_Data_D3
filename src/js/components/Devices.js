/* eslint-disable padding-line-between-statements */
import AbstractDevice from '../adapters/AbstractDevice';
import '../../css/devices.css';

export default class Devices extends AbstractDevice {
	drawDevices(obj) {
		Array.from(obj.devices || []).forEach(_ => {
			const device = Object.assign(obj, {
				deviceName: _[0],
				deviceValue: _[1]
			});
			super.drawDevices(device);
		});
	}
}
