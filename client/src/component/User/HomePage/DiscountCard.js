import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class DiscountCard extends Component {
    render() {
        return (
            <div>
                <center>
                <div className="card text-center w-75">
                    <div class="card-header">
                        <h3><b>Discount Available Items</b></h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">We offer some discount end of the season</h5>
                        <p className="card-text">To get that Benefits Click the Discount Button Below</p>
                        <Link to="/discount"><button className="btn btn-danger">Discounts</button></Link>
                    </div>
                    <div className="card-footer text-muted">
                        Get the benefits
                    </div>
                </div>
                </center>
            </div>
        )
    }
}
