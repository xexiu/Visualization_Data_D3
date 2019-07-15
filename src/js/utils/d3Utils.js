/* eslint-disable padding-line-between-statements */
import * as d3 from 'd3';

export function shortValuesD3(a, b) {
	return a < b ? d3.ascending(a, b) : d3.descending(a, b);
}

export function buildSVG(selector, width, height) {
	return d3.select(selector)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
}

export function buildArc(innerRadius, outerRadius) {
	return d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
}

export function interpolateAngles(arc, d) {
	const dimension = d;
	const i = d3.interpolate(dimension.startAngle + 0.1, dimension.endAngle);

	return (t) => {
		dimension.endAngle = i(t);
		return arc(dimension);
	};
}
