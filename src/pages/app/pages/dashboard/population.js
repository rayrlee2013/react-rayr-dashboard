/**
 * Created by Rayr Lee on 2019/6/19.
 */

import React from 'react';
import * as d3 from 'd3';
import {Datasource, Loading} from 'components';

@Datasource('population')
export default class extends React.Component {

    map = null;

    mapData = null;

    state = {
        status: false
    }

    componentDidMount() {

        let t = this;

        d3.json('https://www.easy-mock.com/mock/5d0b41feb16ec30f933be171/heibaizhu_api/china_map_data').then(data => {
            t.mapData = data;
            t.setState({
                status: true
            });
            t.updateChart(t.mapData);
        });

        window.addEventListener('resize', t.resizeFn.bind(t), false);

    }

    resizeFn() {
        this.updateChart(this.mapData);
    }

    updateChart(mapData) {

        if (!mapData) {
            return;
        }

        const {population, area} = this.props.sourceData;

        let t = this;

        if (t.map) {
            t.map.remove();
        }

        let oBox = this.refs.d3_map;

        let w = oBox.clientWidth;
        let h = oBox.clientHeight;

        let proj = d3.geoMercator();
        let path = d3.geoPath().projection(proj);

        let color = d3.scaleQuantize().domain([1, 2000]).range(d3.schemeBlues[9]);

        this.map = d3.select(oBox).append('svg').attr('width', w).attr('height', h);

        proj.center([107, 41])
        proj.translate([w / 2 + 20, h / 2 - 40]);
        proj.scale(h);

        let china = this.map.append('svg').attr('id', 'china');


        china.selectAll('path')
            .data(mapData.features)
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
    }

    componentWillUnmount() {
        this.map.remove();
        this.map = null;
        this.mapData = null;
        window.removeEventListener('resize', this.resizeFn.bind(this), false);
    }

    render() {
        return (
            <div ref="d3_map" style={{height: 400}}>
                {!this.state.status && <Loading>地图正在加载...</Loading>}
            </div>
        )
    }
}
