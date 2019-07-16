/* eslint-disable padding-line-between-statements */

import { scaleOrdinal } from 'd3';
import {
	buildSVG,
	buildArc,
	buildPie,
	interpolateAngles
} from '../utils/d3Utils';

const WIDTH = 250;
const HEIGHT = 250;
const INNER_RADIUS = 110;
const OUTER_RADIUS = 117;
const HALF_SECOND = 500;

export default class AbstractCircle {
	drawCircles({ metricName, metricColor, devicesValues, devicesTotalValue }) {
		const canvas = buildSVG(`.d3__wrapper--${metricName}`, WIDTH, HEIGHT);
		const arc = buildArc(INNER_RADIUS, OUTER_RADIUS);
		const pie = buildPie();
		const color = scaleOrdinal().range(metricColor);
		const group = canvas.append('g').attr('transform', 'translate(125,125)');
		const arcs = group.selectAll('.arc')
			.data(pie(devicesValues))
			.enter()
			.append('g')
			.attr('class', 'arc');

		arcs.append('path')
			.attr('d', arc)
			.attr('fill', d => color(d.value))
			.transition()
			.duration(HALF_SECOND)
			.attrTween('d', d => interpolateAngles(arc, d));

		arcs.append('text')
			.style('text-anchor', 'middle')
			.style('fill', '#b9b9b9')
			.text(metricName.toUpperCase());

		arcs.append('text')
			.style('text-anchor', 'middle')
			.attr('dy', '1em')
			.text(new Intl.NumberFormat().format(devicesTotalValue));
	}
}
