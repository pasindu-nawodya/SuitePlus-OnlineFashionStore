import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../CSS/wishlist.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBBtn} from "mdbreact";
import { withRouter } from 'react-router-dom';


class WishList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wishlist: [],
            isEmpty:true,
            loading:true

        }
    }

    callAPI = async () => {

        await fetch('http://localhost:4000/wishlist/107')
            .then(res => res.json())
            .then(json => this.setState({
                wishlist: json,
                loading:false
            }));
        if(this.state.wishlist == ""){

            await this.setState({
                isEmpty:true
            });
        }else{
            await this.setState({
                isEmpty:false
            });
        }

    }

    componentWillMount() {
        this.callAPI();



    }


    //----delete an item--------

    deleteItem = async (id) => {
        let list = this.state.wishlist;
        let remainingItem = list.filter((item) => item._id !== id);

        if(remainingItem == ""){
            await this.setState({
                wishlist: remainingItem,
                isEmpty:true
            });
        }else {

            await this.setState({
                wishlist: remainingItem,
                isEmpty: false
            });

        }
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        };

        await fetch('http://localhost:4000/wishlist/'+id,requestOptions);

    }

    //----add item to the cart----

    addItemsToCart =  (id)=>{
        let list = this.state.wishlist;
        let itemToBeAdd = list.find((item)=>item._id == id);
        let remainingItem = list.filter((item) => item._id !== id);

        if(remainingItem == "") {
            this.setState({
                wishlist: remainingItem,
                isEmpty: true
            });
        }else{

            this.setState({
                wishlist: remainingItem,
                isEmpty: false
            });

        }

        //-------delete item from wishlist---
        console.log("came");
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        };


        fetch('http://localhost:4000/wishlist/'+id,requestOptions);
        //----add item to cart---------
        const addOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemToBeAdd)
        };
        fetch('http://localhost:4000/cart/',addOptions);

        alert("Item has added to shopping cart succesfully");



    }



    render() {
        if(this.state.loading == true){
            return(
                <center>
                <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            </center>
        );

        }
        if (this.state.isEmpty == true) {

            return (<div className="emptyList">
                <br/> <br/>

                <center>

                    <div className="emptyCard" >
                        <br/>
                        <span> <img src={require('../images/sad.png')} className="sadimage"/>
                  <p className="empty">&nbsp;You don't have any items in your wish List. Let's get shopping!&nbsp;</p></span>
                        <Button variant="info" style = {{color:"white"}} onClick = {this.newfunction}>Start Shopping</Button>


                    </div>

                </center>





            </div>);
        } else if(this.state.isEmpty == false) {
            return (

                <Container className="list">

                    <br/>


                    {this.state.wishlist.map((item) =>
                        (

                            <MDBContainer key={item.key}>
                                <MDBRow key={item.key}>

                                    <MDBCol className="columnSet" key={item.key}><img src={require('../images/whiteFrock.jpg')}
                                                                       className="productimage"/> </MDBCol>
                                    <MDBCol className="columnSet" key={item.key}>
                                        <span><p className="productName" key={item.key}>{item.productName}</p></span>
                                        <span><p className="productColour" key={item.key}>{item.colour}</p></span>
                                        <span><p className="productSize" key={item.key}>{item.size}</p></span>

                                    </MDBCol>

                                    <MDBCol className="columnSet" key={item.key}><span className="quantityString">Quantity</span>
                                        <spa><p className="productQty">{item.quantity}</p></spa>
                                    </MDBCol>
                                    <MDBCol className="columnSet"><span><p
                                        className="productPrice">Rs {item.price}/=</p></span><br/>
                                        <MDBBtn color="primary" onClick={() => this.addItemsToCart(item._id)}>Add To
                                            Cart</MDBBtn>
                                        <br/><br/>
                                        <div className="remove">
                                            <button className="trashBtn" onClick={() => this.deleteItem(item._id)}><img
                                                src={require('../images/trash.png')} className="trashIcon"/></button>
                                        </div>


                                    </MDBCol>

                                </MDBRow>
                                <br/>
                            </MDBContainer>

                        ))}


                </Container>

            );
        }
    }
}
export default WishList;