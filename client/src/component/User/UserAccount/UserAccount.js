import React, { Component } from 'react';
import TitleBanner from './Component/TitleBanner';
import UserAccoutTable from "./Component/UserAccountTable";

export default class StockManagerListTable extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"MY ACCOUNT"} />
                <UserAccoutTable />
            </div>
    )
    }
}