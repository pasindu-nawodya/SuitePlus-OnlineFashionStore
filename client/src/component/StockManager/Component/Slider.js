
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Slider extends Component {
    render() {

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        return (
            <div>
              <main role="main">
                <section className="jumbotron text-center">
                  <div className="container">
                    <h1 style={{fontSize:"60px"}}><b>Stock Manager Dashboard</b></h1>           
                    <p className="lead text-muted"><b>Current Date: {date} </b></p>                
                    <p>
                      <Link to="/allitem"><div href="#" className="btn btn-primary my-2">Production List</div></Link>
                      <span>&nbsp;&nbsp;</span>
                      <Link to="/additem"><div href="#" className="btn btn-secondary my-2">Item Operation</div></Link>
                    </p>
                  </div>            
                </section>
              </main>
            </div>
        )
    }
}
