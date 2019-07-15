/* eslint-disable class-methods-use-this */
/* eslint-disable padding-line-between-statements */
import * as d3 from 'd3';
import '../../css/circle.css';
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

export default class Circle {
	constructor(model) {
		this.model = model;
	}
	drawCircle(data, index) {
		const {
			getMetricName,
			getMetricColor,
			getDevicesValues,
			getDevicesTotalValue
		} = this.model;

		const canvas = buildSVG(`.d3__wrapper${index}`, WIDTH, HEIGHT);
		const arc = buildArc(INNER_RADIUS, OUTER_RADIUS);
		const pie = buildPie();
		const color = d3.scaleOrdinal().range(getMetricColor(data[1]));
		const group = canvas.append('g').attr('transform', 'translate(125,125)');
		const arcs = group.selectAll('.arc')
            .data(pie(getDevicesValues(data[1])))
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
			.text(getMetricName(data[0]).toUpperCase());

		arcs.append('text')
			.style('text-anchor', 'middle')
			.attr('dy', '1em')
			.text(new Intl.NumberFormat().format(getDevicesTotalValue(data[1])));
	}
}
