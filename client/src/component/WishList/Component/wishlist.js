import React from "react";
import Container from "react-bootstrap/Container";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../CSS/wishlist.css';
import 'mdbreact/dist/css/mdb.css'
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBBtn} from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
class WishList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wishlist: [],
            isEmpty:false

        }
    }

    callAPI = async () => {

        await fetch('http://localhost:4000/wishlist/101')
            .then(res => res.json())
            .then(json => this.setState({
                wishlist: json
            }));


    }

    componentWillMount() {
        this.callAPI();
        //console.log("render");

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

        this.setState({
            wishlist: remainingItem
        });

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



    }
    render() {
        if (this.state.isEmpty == true) {

            return (<div className="emptyList">
                <br/> <br/>
                <center>

                    <div className="card" >
                        <br/>
                        <span> <img src={require('../images/sad.png')} className="sadimage"/>
                  <p className="empty">You don't have any items in your wish List. Let's get shopping!</p></span>
                        <MDBBtn color="cyan" style = {{color:"white"}}>Start Shopping</MDBBtn>


                    </div>
                </center>





            </div>);
        } else {
            return (

                <Container className="list">

                    <br/>


                    {this.state.wishlist.map((item) =>
                        (

                            <MDBContainer key={item.key}>
                                <MDBRow key={item.key}>

                                    <MDBCol md="3" key={item.key}><img src={require('../images/whiteFrock.jpg')}
                                                                       className="productimage"/> </MDBCol>
                                    <MDBCol md="3" className="product" key={item.key}>
                                        <span><p className="productName" key={item.key}>{item.productName}</p></span>
                                        <span><p className="productColour" key={item.key}>{item.colour}</p></span>
                                        <span><p className="productSize" key={item.key}>{item.size}</p></span>

                                    </MDBCol>

                                    <MDBCol md="3" key={item.key}><span className="quantityString">Quantity</span>
                                        <spa><p className="productQty">{item.quantity}</p></spa>
                                    </MDBCol>
                                    <MDBCol md="3"><span><p
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