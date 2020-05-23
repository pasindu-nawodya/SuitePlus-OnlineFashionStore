import React, { Component } from 'react';import image from './img/shirt.jpg';
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class HomepageProducts extends Component {
    render() {
        return (
            <div>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="alert alert-secondary text-center" role="alert">
                            <b>Feautured Products</b>
                        </div>
                        <div className="row">
                            {/* map function */}
                            <div className="col-md-4">
                                <div class="card mb-4 shadow-sm">
                                    <img src={image} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <p className="card-text">Product Name</p>
                                        <div className="d-flex flex-row-reverse bd-highlight"> 
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-success"><FontAwesomeIcon className="faicons" icon={faCartPlus} /> &nbsp;BUY</button>
                                                <button type="button" className="btn btn-sm btn-danger"><FontAwesomeIcon className="faicons" icon={faHeart} />&nbsp;LOVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                 </div>    
               </div>
            </div>
        )
    }
}
