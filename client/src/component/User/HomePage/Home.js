import React, { Component } from 'react';
import HomeBanner from './HomeBanner';
import DiscountCard from './DiscountCard';
import Selected from './HomepageProducts';

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeBanner />
                <br />
                <DiscountCard/>
                <br />
                <Selected />
            </div>
        )
    }
}
