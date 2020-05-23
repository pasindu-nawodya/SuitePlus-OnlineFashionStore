import React, { Component } from 'react';
import TitleBanner from './Component/TitleBanner';
import AddItemForm from './Component/AddItemForm';

export default class AddItem extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"ADD PRODUCT"} />
                <AddItemForm />
            </div>
        )
    }
}
