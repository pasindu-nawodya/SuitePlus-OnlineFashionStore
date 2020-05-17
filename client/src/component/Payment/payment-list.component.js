import React, {Component} from "react";
import axios from "axios";

// output table that refer with database columns
let Payment = props => (
    <tr>
        <td>{props.payment.name}</td>
        <td>{props.payment.cardnumber}</td>
        <td>{props.payment.createdAt.substring(0,10)}</td>
        <td>
            <button type="button" class="btn btn-outline-danger" onClick={()=> {props.deletePayment(props.payment._id)}}>Delete record</button>
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
        axios.get('http://localhost:5000/payments/').then(response => {
            this.setState({
                payments:response.data
            })
        }).catch(error => console.log(error) )
    }

    deletePayment(id){
        axios.delete('http://localhost:5000/payments/'+id).then(res => console.log(res.data));
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
                        <th>Customer Name</th>
                        <th>Credit card number</th>
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
