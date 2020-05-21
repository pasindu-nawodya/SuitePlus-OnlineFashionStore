import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class PaymentForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            name:'',
            address:'',
            contact:'',
            cardnumber:'',
            cvv:'',
            expdate:new Date(),
        };

    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }

    onChangeAddress(e){
        this.setState({
            address:e.target.value
        });
    }

    onChangeContact(e){
        this.setState({
            contact:e.target.value
        });
    }

    onChangeCardnumber(e){
        this.setState({
            cardnumber:e.target.value
        });
    }

    onChangeCvv(e){
        this.setState({
            cvv:e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            expdate:date
        });
    }

    onSubmit(e){
        e.preventDefault();

        let payment = {
            name:this.state.name,
            address:this.state.address,
            contact:this.state.contact,
            cardnumber:this.state.cardnumber,
            cvv:this.state.cvv,
            expdate:this.state.expdate
        };
        console.log('payment successful');
        console.log(payment);
        axios.post('http://localhost:4000/payment/add', payment).then(res => console.log(res.data));
        window.location = '/payment/history';

    }





    render() {

        return(
            <div className="container">

                <h3>Make payment</h3>

                <form onSubmit={this.onSubmit.bind(this)}>

                    <div className="form-group">
                        <label>Your Full Name : </label>
                        <input type="text" required className="form-control" onChange={this.onChangeName.bind(this)} value={this.state.name} />
                    </div>

                    <div className="form-group">
                        <label>Address : </label>
                    <input type="text" required className="form-control" onChange={this.onChangeAddress.bind(this)} value={this.state.address} />
                    </div>

                    <div className="form-group">
                        <label>Contact : </label>
                    <input type="number" required className="form-control" onChange={this.onChangeContact.bind(this)} value={this.state.contact} />
                    </div>

                    <div className="form-group">
                        <label>Your Card number : </label>
                        <input type="number" required className="form-control" onChange={this.onChangeCardnumber.bind(this)} value={this.state.cardnumber} />
                    </div>

                    <div className="form-group">
                        <label>CVV : </label>
                        <input type="number" required className="form-control" onChange={this.onChangeCvv.bind(this)} value={this.state.cvv} />
                    </div>

                    <div className="form-group">
                        <label>Expire date : </label>
                        <div>
                            <DatePicker selected={this.state.expdate} onChange={this.onChangeDate.bind(this)} />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Purchase" className="btn btn-success"/>
                    </div>


                </form>

            </div>
        );

    }

}
export default PaymentForm;
