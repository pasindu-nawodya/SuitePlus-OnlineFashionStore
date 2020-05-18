import React, { Component } from 'react';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import TitleBanner from './Component/TitleBanner';
import CategorieTable from "./Component/CategorieTable";

export default class CategorieListTable extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"Category List"} />
        <CategorieTable />
        <Footer />
        </div>
    )
    }
}