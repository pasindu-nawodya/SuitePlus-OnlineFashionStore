import React, { Component } from 'react';
import TitleBanner from './Component/TitleBanner';
import StockManagerAccountTable from "./Component/StockManagerAccountTable";

export default class StockManagerAccount extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"MY ACCOUNT"} />
				<StockManagerAccountTable />
			</div>
    )
    }
}