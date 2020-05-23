import React, { Component } from 'react';
import image from './img/shirt.jpg';
import Selected from './SelectedProduct';
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ProductDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
        }
    }

    //have to pass selected product id to here
    componentDidMount(){
        fetch('http://localhost:4000/product/5ec830e9ea1ed7311c4b4a2a')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
            })

            console.log(json)
        });
    }


    render() {

        var {isLoaded,items} = this.state;

        if(!isLoaded){
            return (<center>                    
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h5> <b><br />Wait ! Data Is Loading ... </b></h5>
                    </center>
            )
        }


        return (
            <div>
                <main role="main">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 style={{fontSize:"30px"}}><b>Product Details</b></h1>                        
                        </div>            
                    </section>
                </main>
                <main role="main" >
                    <section className="text-center mt-5"  style={{height:'100%'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg mt-5">
                                    <img src={image} style={{width:'50%'}} />
                                </div>
                                <div className="col-lg">
                                <br />
                                <br />
                                <table className="table text-left">
                                      
                                    <tr>
                                        <th>Product Name :</th>
                                        <th>{items.pname}</th>
                                    </tr>                                     
                                    <tr>
                                        <th>Price :</th>
                                        <th>
                                            <p style={{color:"red"}}><strike>Rs. {items.pprice} </strike>/=</p>
                                            Rs. {items.pprice*(100-items.pdiscount)/100}/=
                                        </th>
                                    </tr>                                     
                                    <tr >
                                        <th>Discount :</th>
                                        <td>{items.pdiscount}%</td>
                                    </tr> 
                                    <tr>
                                        <th>Size :</th>
                                        <th><h5><span class="badge badge-secondary">&nbsp;{items.psize}&nbsp;</span></h5></th>
                                    </tr> 
                                    <tr>
                                        <th>Available Amount :</th>
                                        <th>{items.pqty}</th>
                                    </tr> 
                                    <tr>
                                        <th>Tags :</th>
                                        <th>
                                            <h5>
                                                <span className="badge badge-secondary">{items.pcategory}</span>&nbsp;|&nbsp;
                                                 <span className="badge badge-secondary">{items.prange}</span>
                                            </h5>
                                        </th>
                                    </tr>  
                                    <tr>
                                        <th>Description :</th>
                                        <th>{items.pdesc}</th>
                                    </tr> 
                                    <tr>                                        
                                        <th colSpan="2">
                                            <center>
                                                <button className="btn btn-success mr-3">&nbsp;&nbsp;<FontAwesomeIcon className="faicons" icon={faCartPlus} /> &nbsp; ADD TO CART &nbsp;&nbsp;</button>
                                                <button className="btn btn-danger ml-3"><FontAwesomeIcon className="faicons" icon={faHeart} />&nbsp;ADD TO WISHLIST</button>
                                            </center>
                                        </th>
                                    </tr>                         
                                </table>                                
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
                <Selected/>
            </div>
        )
    }
}
