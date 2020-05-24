import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
            userId:"5ec76f0b133ca45fccadc01a",
            cart:[],
            wishlist:[]
        }
    }

    //have to pass selected product id to here
    componentDidMount(){
        fetch('http://localhost:4000/product/'+this.props.match.params.id)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
            })

            console.log(json)
        });


        this.updateCartState();
        this.updateWishlistState();
    }

    //-----update state of cart--------------

    updateCartState = () =>{
        fetch('http://localhost:4000/cart/'+this.state.userId)
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                   cart:json
                })

                console.log(json)
            });

    }

    //-----update state of wishlist--------------

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
      console.log(index);
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


    //-----add items to cart------

    addtoCart = async (image,product,price,size,pid)=>{


        // Check if selected item already present in the list
        let index=0;
        let qty=0;
        let id = 0;
        this.state.cart.map((item) =>{
            if(item.productId == pid){

                index=1;
                qty = item.quantity;
                id = item._id;
            }

        });

        //if the selected item is already in the cart, only the quantity of item will be incresed by 1,
        // else if the item is not present in the cart the item will be added to the cart
        if(index == 0) {
            let cartItem = {

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
                body: JSON.stringify(cartItem)
            };

            await fetch('http://localhost:4000/cart', requestOptions)
                .then(window.alert("Item has added to your shopping cart and ready to buy!!"))
                .catch(error => {
                    console.error('Error:', error);
                });
            ;
        }else if(index == 1){
              console.log(id);
              let newQty = qty+1;
            let updateQty ={

                quantity:newQty
            }
            const requestOptions = {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateQty)
            };

            await fetch('http://localhost:4000/cart/'+id, requestOptions);

        }
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
                                                <button className="btn btn-success mr-3" onClick = {()=>this.addtoCart(items.pimage,items.pname,items.pprice*(100-items.pdiscount)/100,items.psize,items._id)}>&nbsp;&nbsp;<FontAwesomeIcon className="faicons" icon={faCartPlus} /> &nbsp; ADD TO CART &nbsp;&nbsp;</button>
                                                <button className="btn btn-danger ml-3" onClick = {()=>this.addtoWishlist(items.pimage,items.pname,items.pprice*(100-items.pdiscount)/100,items.psize,items._id)}><FontAwesomeIcon className="faicons" icon={faHeart} />&nbsp;ADD TO WISHLIST</button>
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
