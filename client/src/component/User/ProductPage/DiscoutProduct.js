import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import image from './img/shirt.jpg';
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class DiscoutProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
            count:0,
            wishlist:[],
            userId:"5ec76f0b133ca45fccadc01a"
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/product')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
            })

            console.log(json)
        });
        this.updateWishlistState();

    }

    //-----update state of wishlist------
    updateWishlistState = () =>{
        fetch('http://localhost:4000/wishlist/'+this.state.userId)
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    wishlist:json
                })

                console.log(json)
            });

    }
    //-----add items to wishlist------

    addtoWishlist= async (image,product,price,size,pid)=>{

        // Check if selected item already present in the list
        let index=0;
        this.state.wishlist.map((item) =>{
            if(item.productId == pid){

                index=1;
            }

        });

        //If selected item does not contain in the list only, it will be added to the list
        if(index == 0) {
            let newWishListItem = {

                userId: this.state.userId,
                productId: pid,
                productName: product,
                size: size,
                colour: "Blue",
                image: image,
                price: price
            }

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newWishListItem)
            };

            await fetch('http://localhost:4000/wishlist', requestOptions)
                .then(window.alert("Item has added to the wishlist"))
                .catch(error => {
                    console.error('Error:', error);
                });
            ;

        }
    }

    render() {   
        
        var {isLoaded,items,count} = this.state;

        if(!isLoaded){
            return (<center> 
                        <br />
                        <br />                   
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h5> <b><br />Wait ! Data Is Loading ... </b></h5>
                    </center>
            )
        }

        return (
            <div className="bg-light">
                <main role="main">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 style={{fontSize:"30px"}}><b>Discount Available Items</b></h1>                        
                        </div>            
                    </section>
                </main>
                <div className="album py-5">
                    <div className="container">
                        <div className="row">
                            {/* map function */}
                            {items.filter(filt => filt.pdiscount>0).map(item=>(                                
                                <div className="col-md-4" key={item._id}>
                                    <div class="card mb-4 shadow-sm">
                                        <img src={item.pimage} className="card-img-top"  style={{height:"275px"}}  alt="..."></img>
                                        <div className="card-body">
                                        <center>
                                        <table>
                                            <tr>
                                                <td><h6 className="card-text"><b>Product : </b> </h6></td> 
                                                <td><h6 className="card-text"> &nbsp;&nbsp;{item.pname}  </h6></td>                                                
                                            </tr>  
                                            <tr>
                                                <td><h6 className="card-text"><b>Price : </b></h6></td>
                                                <td><h6 className="card-text text-danger">&nbsp;&nbsp;<strike>{item.pprice}</strike></h6></td>
                                                <td><h6 className="card-text">&nbsp;&nbsp;Rs.{item.pprice*(100-item.pdiscount)/100}  </h6></td>
                                            </tr>    
                                            <tr>
                                                <td> <h6 className="card-text"><b>Size : </b></h6></td>
                                                <td> <h6 className="card-text"><span class="badge badge-secondary">&nbsp;&nbsp;&nbsp;{item.psize}&nbsp;&nbsp;&nbsp;</span></h6></td>
                                            </tr>                                       
                                        </table>
                                        </center>
                                            <br />
                                            <div className="d-flex flex-row-reverse bd-highlight"> 
                                                <div className="btn-group">
                                                    <Link to={'/product/'+item._id}><button type="button" className="btn btn-sm btn-success"><FontAwesomeIcon className="faicons" icon={faCartPlus} /> &nbsp;BUY</button></Link>
                                                    <button type="button" className="btn btn-sm btn-danger"onClick = {()=>this.addtoWishlist(item.pimage,item.pname,item.pprice*(100-item.pdiscount)/100,item.psize,item._id)}><FontAwesomeIcon className="faicons" icon={faHeart} />&nbsp;LOVE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div> 
                    </div>    
                </div>
            </div>
        )
    }
}
