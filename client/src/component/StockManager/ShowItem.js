import React, { Component } from 'react';
import Footer from './Component/Footer';
import TitleBanner from './Component/TitleBanner';
import ShowItemForm from './Component/ShowItemForm';


export default class ShowItem extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"PRODUCT DETAILS"} />
                    <ShowItemForm />
                <Footer />                
            </div>
        )
    }
}
