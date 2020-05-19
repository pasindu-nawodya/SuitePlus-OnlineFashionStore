import React, { Component } from 'react';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import TitleBanner from './Component/TitleBanner';
import StockManagerTable from "./Component/StockManagerTable";

export default class StockManagerListTable extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"StockManager List"} />
        <StockManagerTable />
        <Footer />
        </div>
    )
    }
}