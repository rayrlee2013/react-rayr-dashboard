/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Datasource} from 'components';

function MovieItem({item}) {
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.year}</td>
            <td>{item.directors[0].name}</td>
            <td>{item.rating.average}</td>
        </tr>
    )
}

@Datasource({
    url: 'in_theaters'
})
export default class extends Component {
    render() {
        const {subjects} = this.props.sourceData;
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>电影名称</th>
                        <th>上映时间</th>
                        <th>导演</th>
                        <th>豆瓣评分</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subjects.map((item) => <MovieItem key={item.id} item={item}/>)
                    }
                </tbody>
            </table>
        )
    }
}
