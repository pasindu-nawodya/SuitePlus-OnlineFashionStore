import React, { Component } from 'react';
import Footer from './Component/Footer';
import TitleBanner from './Component/TitleBanner';
import UpdateItemForm from './Component/UpdateItemForm';

export default class AddItem extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"UPDATE PRODUCT"} />
                    <UpdateItemForm />
                <Footer />
            </div>
        )
    }
}
