import React from "react";
import "../CSS/payment.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {withRouter} from 'react-router-dom';



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

                
                
                    <Container className="test">

                        <MDBContainer className = "t">
                            <h4>Order Summary</h4>
                            <MDBRow>


                                <MDBCol  className="columnEight">

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

                                        <Button  variant="success" className = "checkBtn" onClick = {() => this.props.history.push('/payment/add')}>
                                            
                                            Check Out
                                            
                                        </Button>
                                    
                                </MDBCol>

                            </MDBRow>
                        </MDBContainer>


                    </Container>

                    

            );
        }
    }

}
export default withRouter(PaymentBox);
