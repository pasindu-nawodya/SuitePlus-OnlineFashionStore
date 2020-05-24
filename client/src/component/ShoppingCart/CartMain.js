import React from 'react';
import './CSS/CartMain.css';
import Container from 'react-bootstrap/Container'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import CartItems from "./Components/itemList";
import PaymentBox from "./Components/payment";
import {withRouter} from'react-router-dom';
import {height} from "@fortawesome/free-solid-svg-icons/faAd";


class CartMain extends React.Component{
    constructor(props){
        super(props);
        this.state ={

            numOfItems:0,
            price:0,
            totalPrice:0,

        }
    }





    //-----get number of items and update the state

    getNumOfItems =(number)=>{

        this.setState({
            numOfItems:number
        });

    }

    //---get total price----

    getTotalPrice = (price) =>{
        this.setState({
            totalPrice:price
        });

    }



    //--------Render function implements here-------------

    render(){
        return(
            <div>
                <link href='https://fonts.googleapis.com/css?family=Cherry Cream Soda' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Alike' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Asul' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Corben' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Farro' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Alike' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Adamina' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Actor' rel='stylesheet'/>
                <Container>

                    <br/> <br/> <br/>
                    <div className="title">
                        <center>

                            <h1 className = "head1">


                                <span>&nbsp;&nbsp;&nbsp;<img src={require('./images/favouritecart.png')}/></span>
                                My Shopping Cart</h1>

                        </center>


                    </div>


                    <CartItems  numItems = {this.getNumOfItems} tprice = {this.getTotalPrice}  ></CartItems>


                   <PaymentBox items = {this.state.numOfItems} price = {this.state.totalPrice} ></PaymentBox>
                </Container>

           <br/><br/><br/>
            </div>


        );}



}
export default CartMain;