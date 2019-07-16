/* eslint-disable padding-line-between-statements */
import {
	ascending,
	descending,
	select,
	arc,
	pie,
	interpolate
} from 'd3';

const DEFAULT_WIDTH = 50;
const DEFAUTL_HEIGHT = 50;

export function shortValuesD3(a, b) {
	return a < b ? ascending(a, b) : descending(a, b);
}

export function buildSVG(selector = '', width = DEFAULT_WIDTH, height = DEFAUTL_HEIGHT) {
	return select(selector)
        .append('svg')
        .attr('width', width)
		.attr('height', height)
		.attr('class', 'd3-svg');
}

export function buildArc(innerRadius = DEFAULT_WIDTH, outerRadius = DEFAUTL_HEIGHT) {
	return arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
}

export function buildPie() {
	return pie()
		.sort(shortValuesD3)
		.value(d => d);
}

export function interpolateAngles(_arc, d) {
	const dimension = d;
	const i = interpolate(dimension.startAngle + 0.1, dimension.endAngle);

	return (t) => {
		dimension.endAngle = i(t);
		return _arc(dimension);
	};
}
