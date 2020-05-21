import React from "react";
import "../CSS/payment.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class PaymentBox extends React.Component{


    constructor(props){

        let numOfItems = props.items;

        super(props);
        this.state ={
            numOfItems:0,
            price:0,
            cart:[]
        }
    }

    //----update state number of Items---------

    componentWillReceiveProps(props) {
        this.setState({
            numOfItems:props.items,
            cart:props.carts,
            price:props.price
        });
    }



    //-----render function-------
    render() {
        if (this.state.numOfItems == 0) {

            return (<div>

            </div>);
        } else {
            return (

                <div className="test">

                    <MDBContainer className = "t">
                        <h4>Order Summary</h4>
                        <MDBRow>


                            <MDBCol  className="col-md-8">

                                <MDBRow>
                                    <div className="left">Number of Items</div>
                                    <div className="right">{this.state.numOfItems}</div>
                                </MDBRow>
                                <MDBRow>
                                    <div className="left">Total Price</div>
                                    <div className="right">Rs {this.state.price}/=</div>
                                </MDBRow>


                            </MDBCol>

                            <MDBCol className = "checkoutBox">
                              <MDBBtn color="dark-green">Check Out</MDBBtn>
                           </MDBCol>

                        </MDBRow>
                    </MDBContainer>


                </div>

            );
        }
    }

}
export default PaymentBox;
