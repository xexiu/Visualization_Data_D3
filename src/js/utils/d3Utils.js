/* eslint-disable padding-line-between-statements */
import * as d3 from 'd3';

const DEFAULT_WIDTH = 50;
const DEFAUTL_HEIGHT = 50;

export function shortValuesD3(a, b) {
	return a < b ? d3.ascending(a, b) : d3.descending(a, b);
}

export function buildSVG(selector = '', width = DEFAULT_WIDTH, height = DEFAUTL_HEIGHT) {
	return d3.select(selector)
        .append('svg')
        .attr('width', width)
		.attr('height', height)
		.attr('class', 'd3-svg');
}

export function buildArc(innerRadius = DEFAULT_WIDTH, outerRadius = DEFAUTL_HEIGHT) {
	return d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
}

export function buildPie() {
	return d3.pie()
		.sort(shortValuesD3)
		.value(d => d);
}

export function interpolateAngles(arc, d) {
	const dimension = d;
	const i = d3.interpolate(dimension.startAngle + 0.1, dimension.endAngle);

	return (t) => {
		dimension.endAngle = i(t);
		return arc(dimension);
	};
}
