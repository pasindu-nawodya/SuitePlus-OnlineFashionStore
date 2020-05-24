import React, {Component} from 'react';
//import './CSS/CartMain.css';
import Container from 'react-bootstrap/Container';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';
import CartItems from "./Components/itemList";
import PaymentBox from "./Components/payment";

//import {withRouter} from'react-router-dom';
//import {height} from "@fortawesome/free-solid-svg-icons/faAd";



class CartMain extends Component{

    constructor(props){
        super(props);

        this.state ={

            numOfItems:0,
            price:0,
            totalPrice:0,
            userId:this.props.match.params.id

        }
        
    }




    //-----get number of items and update the state

    getNumOfItems =(number)=>{

        this.setState({
            numOfItems:number
        });

    }

    //---get total price---------

    getTotalPrice = (price) =>{
        this.setState({
            totalPrice:price
        });

    }



    //--------Render function implements here-------------

    render(){

        return(
            <div className="container">
                
                <Container>
                    <div className="title">  

                            <h1>
                                <span>&nbsp;&nbsp;&nbsp;<img src={require('./images/favouritecart.png')}/></span>
                                My Shopping Cart</h1>

                    </div>


                    <CartItems  numItems = {this.getNumOfItems} tprice = {this.getTotalPrice}  ></CartItems>

                    <div className="title">


                    <center>
                           <h1 className = "head1">
                           <span>&nbsp;&nbsp;&nbsp;<img src={require('./images/favouritecart.png')}/></span>My Shopping Cart</h1>


                    <PaymentBox items = {this.state.numOfItems} price = {this.state.totalPrice} ></PaymentBox>
                

                     </center>
                     </div>
                     <CartItems  numItems = {this.getNumOfItems} tprice = {this.getTotalPrice}   userInfo = {this.state.userId} ></CartItems>
                     <PaymentBox items = {this.state.numOfItems} price = {this.state.totalPrice} ></PaymentBox>
                </Container>


                 <br/><br/><br/>
            </div>


        );
    }



}
export default CartMain;