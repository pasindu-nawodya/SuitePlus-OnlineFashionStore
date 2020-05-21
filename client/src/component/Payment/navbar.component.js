import React, {Component} from "react";
import {Link} from "react-router-dom";


class Navbar extends Component{

    render() {

        return(

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/payment/add" className="navbar-brand" href="#"> Payment Section </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link to="/payment/add" className="nav-link">Make Payment</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/payment/history" className="nav-link" >Payment List</Link>
                        </li>

                    </ul>

                </div>
            </nav>

        )
    };

}
export default Navbar;
