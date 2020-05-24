import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom"


// output table that refer with database columns

let Payment = props => (

    
        <tr>
            <td>{props.payment.fname}</td>
            <td>{props.payment.lname}</td>
            <td>{props.payment.fline}</td>
            <td>{props.payment.Lline}</td>
            <td>{props.payment.contact}</td>
            <td>{props.payment.cardnumber}</td>
            <td>{props.payment.cvv}</td>
            <td>{props.payment.expdate.substring(0,10)}</td>
            <td>{props.payment.createdAt.substring(0,10)}</td>
            <td>
                <button type="button" className="btn btn-outline-danger" onClick={()=> {props.deletePayment(props.payment._id)}}>Remove</button> 
                <button type="button" className="btn btn-outline-warning ml-2"><Link to={'/payment/edit/'+props.payment._id}>Change</Link></button>
            </td>    
        </tr>
    

)


class ListPayment extends Component{

    constructor(props){
      super(props);

      this.state = {
          payments:[]
      };

    }


    componentDidMount() {
        axios.get('http://localhost:4000/payment/').then(response => {
            this.setState({
                payments:response.data
            })
        }).catch(error => console.log(error) )
    }

    deletePayment(id){
        axios.delete('http://localhost:4000/payment/'+id).then(res => console.log(res.data));
        this.setState({
            payments: this.state.payments.filter(el => el._id !== id)
        });
    }

    paymentList() {
        return this.state.payments.map(currentpayment =>{
            return <Payment payment={currentpayment} deletePayment={this.deletePayment.bind(this)} key={currentpayment._id} />
        })
    }

    render() {

        return(

            <div>
                <h3>Payment Log</h3>
                <br/>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>Contact</th>
                        <th>Credit card number</th>
                        <th>CVV</th>
                        <th>Expire Date</th>
                        <th>Purchased Date</th>
                        <th>Purchased Item</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.paymentList()}
                    </tbody>

                </table>
            </div>

        );

    }

}

export default ListPayment;
