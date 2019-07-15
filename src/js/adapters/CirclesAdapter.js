/* eslint-disable padding-line-between-statements */
import * as d3 from 'd3';
import { buildDomElement } from '../utils/DOMVirtual';
import {
    shortValuesD3,
	buildSVG,
	buildArc,
	interpolateAngles
} from '../utils/d3Utils';

const WIDTH = 200;
const HEIGHT = 200;
const INNER_RADIUS = 90;
const OUTER_RADIUS = 100;
const HALF_SECOND = 500;

export default class Circles {
	constructor(container) {
		if (container) {
			const circles = buildDomElement('div', 'd3__circles');
			container.appendChild(circles);
		}
	}
	drawCirclesInfo(data) {
		const values = Object.values(data[1]);
		const canvas = buildSVG('.d3__circles', WIDTH, HEIGHT);
		const arc = buildArc(INNER_RADIUS, OUTER_RADIUS);
		const color = d3.scaleOrdinal().range(data[1].color || '');
		const group = canvas.append('g')
            .attr('transform', 'translate(100,100)');
		const pie = d3.pie()
            .sort(shortValuesD3)
			.value(d => d);
		canvas.attr('class', 'd3__circle');

		this.arcs = group.selectAll('.arc')
            .data(pie(values))
            .enter()
            .append('g')
			.attr('class', 'arc');

		this.arcs.append('path')
			.attr('d', arc)
			.attr('fill', d => color(d.value))
			.transition()
			.duration(HALF_SECOND)
			.attrTween('d', d => interpolateAngles(arc, d));

		return this;
	}
	drawMetrics() {
		throw new Error('Not implemented method drawMetrics');
	}
}
