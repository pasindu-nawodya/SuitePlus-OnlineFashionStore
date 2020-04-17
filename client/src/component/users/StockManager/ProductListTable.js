import React, { Component } from 'react';
import ProductTable from './Component/ProductTable';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import TitleBanner from './Component/TitleBanner';

export default class ProductListTable extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <TitleBanner TitleName={"Product List"} />
                <ProductTable />
                <Footer />
            </div>
        )
    }
}
