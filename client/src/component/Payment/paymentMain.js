import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./component/navbar.component";
import PaymentForm from "./payment-form.component";
import ListPayment from "./payment-list.component";
import EditPayment from "./payment-edit.component";
import Footer from "./component/Footer";


class Payment extends Component {


    render() {

        return(
            <Router>
                <div>
                    <Navbar />
                    <br/>
                    <Route path="/payment/add" exact component={PaymentForm} />
                    <Route path="/payment/edit/:id" component={EditPayment} />
                    <Route path="/payment/history" component={ListPayment} />
                    <Footer/>
                </div>
            </Router>

        )
    }

}

export default Payment;
