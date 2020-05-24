import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import logo from './img/newlogo.png';

export default class HomeBanner extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  </ol>
                  <div className="h-50 d-block carousel-inner">
                    <div className="carousel-item active">
                      <img src={bg1} style={{height:"500px",width:"100%",opacity:"0.3"}} alt="..." />
                      <div className="carousel-caption ">                        
                        <h3> <img src={logo} style={{height:"500px",width:"80%"}} alt="..." /></h3>
                        <h1><Link to="/product"><button className="btn btn-success">EXPLORE THE FASHION</button></Link></h1>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={bg2} style={{height:"500px",width:"100%",opacity:"0.3"}} alt="..." />
                      <div className="carousel-caption ">                        
                        <h3> <img src={logo} style={{height:"500px",width:"80%"}} alt="..." /></h3>
                        <h1><Link to="/product"><button className="btn btn-success">EXPLORE THE FASHION</button></Link></h1>
                      </div>
                    </div>
                  </div>
                
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
              </div>  
                
            </div>
        )
    }
}

