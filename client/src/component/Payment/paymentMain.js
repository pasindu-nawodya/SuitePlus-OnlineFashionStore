import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./navbar.component";
import PaymentForm from "./payment-form.component";
import ListPayment from "./payment-list.component";
import EditPayment from "./payment-edit.component";


function Payment() {

    return(
        <Router>
            <div className="container">
            <Navbar />
            <br/>
                <Route path="/payment/add" exact component={PaymentForm} />
                <Route path="/payment/edit/:id" component={EditPayment} />
                <Route path="/payment/history" component={ListPayment} />
            </div>
        </Router>

    )

}

export default Payment;
