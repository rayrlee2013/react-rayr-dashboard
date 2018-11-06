/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Icon, Input} from 'components';

export default function () {
    return (
        <form className="sidebar-form">
            <div className="input-group">
                <Input placeholder="Search..." autocomplete="off" name="q" onChange={(value) => {
                    console.log(value);
                }}/>
                <span className="input-group-btn">
                    <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                        <Icon name="search"/>
                    </button>
                </span>
            </div>
        </form>
    )
}

