import React, { Component } from 'react';
import Footer from './Component/Footer';
import TitleBanner from './Component/TitleBanner';
import AddCategorieForm from './Component/AddCategorieForm';

export default class AddItem extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"ADD CATEGORY"} />
        <AddCategorieForm />
        <Footer />
        </div>
    )
    }
}