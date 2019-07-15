/* eslint-disable padding-line-between-statements */
import Devices from '../adapters/Devices';

export default class Device extends Devices {
	drawDevice(data) {
		console.log('Device', data);
	}
}
