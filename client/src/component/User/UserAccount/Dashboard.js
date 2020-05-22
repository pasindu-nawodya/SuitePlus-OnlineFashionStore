import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import Slider from './Component/Slider';
import Cards from './Component/Cards';
import Footer from './Component/Footer';

export default class Dashboard extends Component {
    render() {

        const value=[{headers :"Available Stock",values : "200"},
            {headers :"Total Stock Value",values : "200"},
            {headers :"Category Count",values : "200"}];

        return (

            <div>
            <Slider />
            <div class="container">
            <Cards body={value} />
        </div>
        <Footer />

        </div>
    )
    }
}