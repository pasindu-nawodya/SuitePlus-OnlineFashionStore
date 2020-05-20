import React, { Component } from 'react';
import Footer from './Component/Footer';
import TitleBanner from './Component/TitleBanner';
import AddStockManagerForm from './Component/AddStockManagerForm';

export default class AddStockManager extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"ADD STOCK MANAGER"} />
        <AddStockManagerForm />
        <Footer />
        </div>
    )
    }
}