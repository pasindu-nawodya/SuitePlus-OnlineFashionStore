import React from "react";
import { MDBBtn } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
import '../CSS/itemList.css';
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import  {withRouter} from 'react-router-dom';



class CartItems extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            numOfItems: 0,
            myCart:[],
            totalPrice:0,
            isEmpty:true,
            loading:true,
            userId:""
        }



    }


    callAPI = async  ()=>  {

        this.setState({userId:this.props.users});
        await fetch("http://localhost:4000/cart/"+this.props.userInfo)
            .then(res => res.json())
            .then(json => this.setState({
                myCart:json,
                loading:false,
                isEmpty: false,
                userId:this.props.userInfo

            }));
        this.getNumberOfItems();
        this.calTotalprice();


        if(this.state.myCart == ""){

            await this.setState({isEmpty:true});

        }else {
            await this.setState({
                isEmpty: false
            });
        }
        this.props.numItems(this.state.numOfItems);
        this.props.tprice(this.state.totalPrice);
        //this.props.carts(this.state.myCart);


    }

    componentWillReceiveProps(props) {
        this.setState({
           userId:props.userInfo
        });

    }




    componentDidMount ()  {

        this.callAPI();



    }

    componentDidUpdate(){
        
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

    }

     //-----redirect to home------

    gotoHome = () =>{
        console.log("home");
        this.props.history.push('/');
    }
    render() {


        let list = this.state.myCart;
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

            return (

                <div className="emptyList">
                    <br/> <br/>
                    <center>

                        <div className="cardEmpty">
                            <br/>
                            <span> <img src={require('../images/empty.png')} className="sadimage"/>
                  <p className="empty">You don't have any items in your cart. Let's get shopping!</p></span>
                          <Button variant="info"style={{color: "white"}} onClick = {()=> this.gotoHome()}>Start Shopping</Button>


                        </div>
                    </center>


                </div>
            );
        } else {

            return (

                <Container className="cartlist">

                    <br/>


                    {this.state.myCart.map((item) => (

                        <MDBContainer key={item.key}>
                            <MDBRow key={item.key}>

                                <MDBCol className="cartCol" key={item.key}><img src={item.image}
                                                                   className="productimage"/> </MDBCol>
                                <MDBCol className="cartCol" key={item.key}>
                                    <span><p className="productName" key={item.key}>{item.productName}</p></span>
                                    <span><p className="productColour" key={item.key}>{item.colour}</p></span>
                                    <span><p className="productSize" key={item.key}>{item.size}</p></span>

                                </MDBCol>

                                <MDBCol className="cartCol" key={item.key}><span className="quantityString">Quantity</span><br/>
                                    <Button variant="success" className="increseDecreseBtn"
                                            onClick={() => this.decreaseQuantity(item._id)}>-</Button>
                                    <input type="number" className="qty" value={item.quantity}/>
                                    <Button variant="success" className="increseDecreseBtn"
                                            onClick={() => this.increaseQuantity(item._id)}>+</Button>
                                </MDBCol>
                                <MDBCol className="cartCol"><span><p
                                    className="productPrice">Rs {item.price}/=</p></span><br/><br/><br/><br/><br/>
                                    <div className="remove">
                                        <button className="trashBtn" onClick={() => this.deleteProduct(item._id)}><img
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

export default withRouter(CartItems);
