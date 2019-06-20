/**
 * Created by Rayr Lee on 2019/6/19.
 */

import React from 'react';
import * as d3 from 'd3';
import {Datasource} from 'components';

@Datasource('population')
export default class extends React.Component {

    map = null;

    componentDidMount() {

        const {population, area} = this.props.sourceData;

        let oBox = this.refs.d3_map;

        let w = oBox.clientWidth;
        let h = oBox.clientHeight;

        let proj = d3.geoMercator();
        let path = d3.geoPath().projection(proj);

        let color = d3.scaleQuantize().domain([1, 2000]).range(d3.schemeBlues[9]);

        this.map = d3.select(oBox).append('svg').attr('width', w).attr('height', h);

        proj.center([107, 41])
        proj.translate([w / 2, h / 2 - 40]);
        proj.scale(h);

        let china = this.map.append('svg').attr('id', 'china');

        d3.json('/json/china.json').then(data => {
            china.selectAll('path')
                .data(data.features)
                .enter()
                .append('path')
                .transition()
                .attr('d', path)
                .attr('fill', function (d) {
                    var n = Number(population[d.properties.adcode][2017]);
                    var c = Number((n / area[d.properties.adcode]).toFixed(0));
                    return color(c);
                })
                .attr('stroke', 'white')
                .attr('stroke-linejoin', 'round');
        });
    }

    render() {
        return (
            <div ref="d3_map" style={{height: 400}}></div>
        )
    }
}
