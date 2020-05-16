import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'
import '../CSS/itemList.css';
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/esm/Button";
import { MDBBtn } from "mdbreact";


class CartItems extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            numOfItems: 0,
            myCart:[],
            totalPrice:0,
            isEmpty:false
        }

    }
    callAPI = async ()=>  {

        await fetch("http://localhost:4000/cart/100")
            .then(res => res.json())
            .then(json => this.setState({   myCart:json}));
        this.getNumberOfItems();
        this.calTotalprice();
        if(this.state.myCart == ""){
            // console.log("empty");
            this.setState({isEmpty:true});

        }

        this.props.numItems(this.state.numOfItems);
        this.props.tprice(this.state.totalPrice);
        //this.props.carts(this.state.myCart);


    }

    componentWillMount()  {
        this.callAPI();
        //console.log("render");

    }

    //----increase the Quantity on button click---
    increaseQuantity = async (key) =>{

        let list = this.state.myCart;
        //----get appropriate product details-------
        let editedItem = list.find(item => item._id==key);
        let index = list.findIndex(item=>item._id == key);
        const remaining = this.state.myCart.filter(item => item._id !== key);
        //console.log(remaining );

        //---set new quantity---
        let newQty = editedItem.quantity + 1;
        editedItem.quantity = newQty;
        let newCartAfterEdited = remaining;
        newCartAfterEdited.splice(index,0,editedItem);
        //console.log(editedItem );

        this.setState({
            myCart:newCartAfterEdited
        });
        console.log(this.state.myCart );

        let updateQuantity = {
            quantity: newQty
        }

        //---send patch request to update quantity------
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateQuantity)
        };

        const response = await  fetch('http://localhost:4000/cart/'+editedItem._id, requestOptions);
        //-----update number of items after increasing------
        this.getNumberOfItems();
        this.calTotalprice();
        this.props.tprice(this.state.totalPrice);
        this.props.numItems(this.state.numOfItems);


    }
    //---decrease the quantity on button click-------
    decreaseQuantity = async(key) =>{


        let list = this.state.myCart;

        //----get appropriate product details-------
        let editedItem = list.find(item => item._id==key);
        let index =  list.findIndex(item => item._id==key);
        const remainItems = this.state.myCart.filter(item => item._id !== key);
        //---set new quantity---
        let newQty = editedItem.quantity - 1;

        if(newQty >= 1) {
            let newCartAfterEdited = remainItems;
            newCartAfterEdited.splice(index,0,editedItem);
            //console.log(newCartAfterEdited );
            this.setState({
                myCart:newCartAfterEdited
            });

            //-----update database------------

            let updateQuantity = {
                quantity: newQty
            }
            editedItem.quantity =newQty ;

            //---send patch request to update quantity------
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateQuantity)
            };
            const response =  await fetch('http://localhost:4000/cart/'+editedItem._id, requestOptions);

            //---update number of items after decreasing---
            this.getNumberOfItems();
            this.calTotalprice();
            this.props.tprice(this.state.totalPrice);
            this.props.numItems(this.state.numOfItems);

        }
    }

    //----delete a product from cart--------

    deleteProduct = async (key)=>{
        //----update number of items after deleting on item----

        let itemTobeDelete = this.state.myCart.find(item => item._id == key);
        let quantity = itemTobeDelete.quantity;
        let newQuantity = this.state.numOfItems - quantity;



        const cartAfterDel = this.state.myCart.filter(item => item._id !== key);

        if(cartAfterDel == ""){

            await this.setState(
                {
                    numOfItems:newQuantity,
                    myCart:cartAfterDel,
                    isEmpty:true

                }
            );
        }else {
            await this.setState(
                {
                    numOfItems: newQuantity,
                    myCart: cartAfterDel,
                    isEmpty:false

                }
            );

        }

        this.props.numItems(this.state.numOfItems);
        this.calTotalprice();
        this.props.tprice(this.state.totalPrice);
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        };

        const response =  await fetch('http://localhost:4000/cart/'+key, requestOptions)




    }

    //--calculate number of items----
    getNumberOfItems =()=>{

        let cart = this.state.myCart;
        let items = 0;

        cart.map((item) =>{

                items = items + item.quantity;

            }

        );

        this.setState({
            numOfItems:items
        });

        this.calTotalprice();
    }
    //-----calculate total price----

    calTotalprice = ()=>{

        let list = this.state.myCart;
        let totalPrice = 0;

        list.map(item=>{
            totalPrice = totalPrice +(item.quantity*item.price);
        });

        console.log(totalPrice);
        this.setState({
            totalPrice:totalPrice
        });
        console.log("price"+this.state.totalPrice);
    }

    render() {
        let list = this.state.myCart;
        if (this.state.isEmpty == true) {

            return (

                <div className="emptyList">
                    <br/> <br/>
                    <center>

                        <div className="card">
                            <br/>
                            <span> <img src={require('./images/empty.png')} className="sadimage"/>
                  <p className="empty">You don't have any items in your cart. Let's get shopping!</p></span>
                            <MDBBtn color="cyan" style={{color: "white"}}>Start Shopping</MDBBtn>


                        </div>
                    </center>


                </div>
            );
        } else {

            return (

                <Container className="list">

                    <br/>


                    {this.state.myCart.map((item) => (
                        <MDBContainer key={item.key}>
                            <MDBRow key={item.key}>

                                <MDBCol md="3" key={item.key}><img src={require('./images/whiteFrock.jpg')}
                                                                   className="productimage"/> </MDBCol>
                                <MDBCol md="3" className="product" key={item.key}>
                                    <span><p className="productName" key={item.key}>{item.productName}</p></span>
                                    <span><p className="productColour" key={item.key}>{item.colour}</p></span>
                                    <span><p className="productSize" key={item.key}>{item.size}</p></span>

                                </MDBCol>

                                <MDBCol md="3" key={item.key}><span className="quantityString">Quantity</span><br/>
                                    <MDBBtn className="increseDecreseBtn"
                                            onClick={() => this.decreaseQuantity(item._id)}>-</MDBBtn>
                                    <input type="number" className="qty" value={item.quantity}/>
                                    <MDBBtn className="increseDecreseBtn"
                                            onClick={() => this.increaseQuantity(item._id)}>+</MDBBtn>
                                </MDBCol>
                                <MDBCol md="3"><span><p
                                    className="productPrice">Rs {item.price}/=</p></span><br/><br/><br/><br/><br/>
                                    <div className="remove">
                                        <button className="trashBtn" onClick={() => this.deleteProduct(item._id)}><img
                                            src={require('./images/trash.png')} className="trashIcon"/></button>
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

export default CartItems;