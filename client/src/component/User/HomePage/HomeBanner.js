import React, { Component } from 'react';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg'

export default class HomeBanner extends Component {
    render() {
        return (
            <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="h-50 d-block carousel-inner">
              <div class="carousel-item active">
                <img src={bg1} style={{height:"500px",width:"100%",opacity:"0.7"}} alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg2} style={{height:"500px",width:"100%",opacity:"0.7"}} alt="..." />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
                
            </div>
        )
    }
}
