import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#008272"}}>

    <Link to="/"><div className="navbar-brand text-white"><b>SuitePlus</b></div></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav mr-auto">

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li class="nav-item active">
            <Link to="/"><div className="nav-link text-white"><b>Dashboard </b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li class="nav-item active">
            <Link to="/categoryList"><div className="nav-link text-white"><b>Category List </b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

        <li class="nav-item active">
            <Link to="/stockManagerList"><div className="nav-link text-white"><b>StockManager List </b><span className="sr-only">(current)</span></div></Link>
        </li>

        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown active" >                                
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <b>Admin Operation</b>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/addcategory" ><div className="dropdown-item">Add Category</div></Link>
            <Link to="/addstockManager"><div className="dropdown-item" >Add StockManager</div></Link>

                                    <div class="dropdown-divider"></div>
            <Link to="/categoryList" ><div className="dropdown-item">Remove Category</div></Link>
            <Link to="/stockManagerList"><div className="dropdown-item" >Remove StockManager</div></Link>

                                </div>
                            </li>
                        </ul>
                        
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown active" >                                
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon className="faicons" icon={faUser} /><span>&nbsp;&nbsp;</span>
                                    <b>Damsiri Dilanjan</b>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Admin</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <a class="dropdown-item" href="#">Account Setting</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">
                                    <button class="btn btn-success my-2 my-sm-0" type="submit"> 
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
