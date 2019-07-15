/* eslint-disable padding-line-between-statements */
import Circle from '../components/Circle';

export default class ShapesAdapter {
	constructor(model) {
		this.circle = new Circle(model);
	}

	drawShapes(data, index) {
		this.circle.drawCircle(data, index);
	}

	drawShapesMetrics() {
		throw new Error('Not implemented method drawShapesMetrics');
	}
}
