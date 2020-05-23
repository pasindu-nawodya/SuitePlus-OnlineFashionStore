import React, { Component } from 'react';
import AllItem from './Component/AllItem';
import TitleBanner from './Component/TitleBanner';

export default class AllProduct extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"Available Item in Stock"} />
                <AllItem />
            </div>
        )
    }
}
