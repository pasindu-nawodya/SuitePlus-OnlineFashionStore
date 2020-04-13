import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import Slider from './Component/Slider';

export default class Dashboard extends Component {
    render() {
        return (
        
            <div>    
                <NavBar />                   
                <Slider />
            </div>
        )
    }
}
