import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#008272"}}>
            
                <Link to="/"><div className="navbar-brand text-white"><b>SuitePlus</b></div></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li className="nav-item active">
                        <Link to="/"><div className="nav-link text-white"><b>Dashboard </b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li className="nav-item active">
                        <Link to="/productList"><div className="nav-link text-white"><b>Production List</b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
   
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active" >                                
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <b>Item Operation</b>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/additem" ><div className="dropdown-item">Add Product</div></Link>
                                    <Link to="/productList"><div className="dropdown-item" >Product List</div></Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="productList"><div className="dropdown-item">Remove Item</div></Link>                         
                                </div>
                            </li>
                        </ul>
                        
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active" >                                
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon classNameName="faicons" icon={faUser} /><span>&nbsp;&nbsp;</span>
                                    <b>Pasindu Nawodya</b>
                                </a>

                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-item">Stock Manager</div>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item" href="#">Account Setting</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                    <button className="btn btn-success my-2 my-sm-0" type="submit"> 
                                        <FontAwesomeIcon className="faicons" icon={faSignOutAlt} />
                                        Logout
                                        </button>
                                    </a>
                                </div>
                            </li>
                        </ul>                        
                    </form>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                </div>
            </nav>
        )
    }
}
