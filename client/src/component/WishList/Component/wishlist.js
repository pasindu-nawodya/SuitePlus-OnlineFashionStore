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
            loading:true,
            userId:props.userId,
            cart:[]

        }
    }

    callAPI = async () => {

        await fetch('http://localhost:4000/wishlist/'+this.state.userId)
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

    componentDidMount() {
        this.callAPI();
       this.updateCart();
    }

    //----update state of cart--------
    updateCart = async () =>{
        await fetch('http://localhost:4000/cart/'+this.state.userId)
            .then(res => res.json())
            .then(json => this.setState({
                cart:json
            }));


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

    addItemsToCart =  (id,pid)=>{

        // Check if selected item already present in the list
        let index=0;
        let pr;
        this.state.cart.map((item) =>{
            if(item.productId == pid){

                index=1;
            }

        });
        console.log(pid);
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
        console.log(index);
        if(index == 0) {
            //-------delete item from wishlist---

            const requestOptions = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},

            };


            fetch('http://localhost:4000/wishlist/' + id, requestOptions).then(alert("Item has added to shopping cart succesfully"));
            //----add item to cart---------
            const addOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(itemToBeAdd)
            };
            fetch('http://localhost:4000/cart/', addOptions);

        }else if(index == 1){

            const requestOptions = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},

            };


           fetch('http://localhost:4000/wishlist/' + id, requestOptions).then(alert("Item has added to shopping cart succesfully"));
        }



    }

    //-----redirect to home------

    gotoHome = () =>{
        console.log("home");
        this.props.history.push('/');
    }

    render() {
console.log(this.state.wishlist);
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
                <Button variant="info"style={{color: "white"}} onClick = {()=> this.gotoHome()}>Start Shopping</Button>


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

                                    <MDBCol className="columnSet" key={item.key}><img src = {item.image} className = "productimage"/> </MDBCol>
                                    <MDBCol className="columnSet" key={item.key}>
                                        <span><p className="productName" key={item.key}>{item.productName}</p></span>
                                        <span><p className="productColour" key={item.key}>{item.colour}</p></span>
                                        <span><p className="productSize" key={item.key}>{item.size}</p></span>

                                    </MDBCol>


                                    <MDBCol className="columnSet"><span><p
                                        className="productPrice">Rs {item.price}/=</p></span><br/>
                                        <MDBBtn color="primary" onClick={() => this.addItemsToCart(item._id,item.productId)}>Add To
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
export default withRouter(WishList);