/* eslint-disable padding-line-between-statements */
import '../../css/circles.css';
import Circles from '../adapters/CirclesAdapter';

export default class Circle extends Circles {
	constructor() {
		super(document.querySelector('.d3'));
	}
	drawCirclesInfo(data) {
		super.drawCirclesInfo(data);

		const values = Object.values(data[1]);
		const tatalValue = values[0] + values[1];

		this.arcs.append('text')
        .style('text-anchor', 'middle')
        .style('fill', '#b9b9b9')
        .text(data[0].toUpperCase());

		this.arcs.append('text')
        .style('text-anchor', 'middle')
        .attr('dy', '1em')
        .text(new Intl.NumberFormat().format(tatalValue));
	}
}
