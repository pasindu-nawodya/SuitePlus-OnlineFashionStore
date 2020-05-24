import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
            userId:"5ec76f0b133ca45fccadc01a"
        }
    }

    //fetch category 
    componentDidMount(){
        fetch('http://localhost:4000/category')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoaded:true,
                    items:json,
                    count:0,
                })
            });
    }




    render() {

        var {isLoaded,items} = this.state;

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: "#008272"}}>
            
                <Link to="/"><div className="navbar-brand text-white"><b>SuitePlus</b></div></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li className="nav-item active">
                        <Link to="/"><div className="nav-link text-white"><b>Home</b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
   
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active" >                                
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <b>Products</b>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/product" ><div className="dropdown-item">All Product</div></Link>
                                    {items.map(item=>(
                                        <Link to={"/filterProduct/"+item.cdesc}><div className="dropdown-item" key={item._id}>{item.cdesc}</div></Link>
                                    ))}
                                    <div className="dropdown-divider"></div>
                                    <Link to="/discount"><div className="dropdown-item">Discount Products</div></Link>                         
                                </div>
                            </li>
                        </ul>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    
                    <li className="nav-item active">


                    <Link to={`/wishlist/${this.state.userId}`}><div className="nav-link text-white"><b>Whishlist</b><span className="sr-only">(current)</span></div></Link>

                    </li>
                        
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active" >                                
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon classNameName="faicons" icon={faUser} /><span>&nbsp;&nbsp;</span>
                                    <b>Pasindu Nawodya</b>
                                </a>

                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to={`/mycart/${this.state.userId}`}><a className="dropdown-item" href="#">My Cart</a></Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/payment/add"><div className="dropdown-item">Payment Setting</div></Link>
                                    <Link to="/useraccount"><a className="dropdown-item" href="#">Account Setting</a></Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                    <Link to="/userLogin">
                                    <button className="btn btn-success my-2 my-sm-0" type="submit"> 
                                        <FontAwesomeIcon className="faicons" icon={faSignOutAlt} />
                                        Logout
                                    </button>
                                    </Link>
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
