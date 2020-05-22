import React, {Component} from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

class EditPayment extends Component{

    constructor(props){
        super(props);

        this.state = {
            fname:'',
            lname:'',
            fline:'',
            Lline:'',
            contact:'',
            cardnumber:'',
            cvv:'',
            expdate:new Date(),
        };

    }

    componentDidMount() {
        axios.get('http://localhost:4000/payment/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    fname:response.data.fname,
                    lname:response.data.lname,
                    fline:response.data.fline,
                    Lline:response.data.Lline,
                    contact:response.data.contact,
                    cardnumber:response.data.cardnumber,
                    cvv:response.data.cvv,
                    expdate:new Date(response.data.expdate)
                })
            }).catch(function (err) {
                console.log(err);
            })
        console.log('data fetched from db');    
    }

    onChangeFirstName(e){
        this.setState({
            fname:e.target.value
        });
    }

    onChangeLastName(e){
        this.setState({
            lname:e.target.value
        });
    }

    onChangeFlineAddress(e){
        this.setState({
            fline:e.target.value
        });
    }

    onChangeLlineAddress(e){
        this.setState({
            Lline:e.target.value
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
            fname:this.state.fname,
            lname:this.state.lname,
            fline:this.state.fline,
            Lline:this.state.Lline,
            contact:this.state.contact,
            cardnumber:this.state.cardnumber,
            cvv:this.state.cvv,
            expdate:this.state.expdate
        };
        console.log('payment update successful');
        console.log(payment);
        axios.post('http://localhost:4000/payment/update/'+this.props.match.params.id, payment).then(res => console.log(res.data));
        window.location = '/payment/history';

    }





    render() {

        return(

            <div className="container">

                    <h3>Update payment</h3>
                    <form onSubmit={this.onSubmit.bind(this)}>

                        <div className="form-group">
                            <label>Your Full Name : </label>

                            <div class="row">
                                <div class="col">
                                    <input type="text" required class="form-control" placeholder="First name" onChange={this.onChangeFirstName.bind(this)} value={this.state.fname}/>
                                </div>
                                <div class="col">
                                    <input type="text" required class="form-control" placeholder="Last name" onChange={this.onChangeLastName.bind(this)} value={this.state.lname}/>
                                </div>
                            </div>

                            
                        </div>

                        <div className="form-group">
                            <label>Address : </label>

                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Line 1" onChange={this.onChangeFlineAddress.bind(this)} value={this.state.fline}/>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Line 2" onChange={this.onChangeLlineAddress.bind(this)} value={this.state.Lline}/>
                                </div>
                            </div>

                            
                        </div>

                        <div className="form-group">
                            <label>Contact : </label>
                            <input type="number" required className="form-control" placeholder="XXX XXXXXXX" onChange={this.onChangeContact.bind(this)} value={this.state.contact} />
                        </div>

                        <div className="form-group">
                            <label>Your Card number : </label>
                            <input type="number" required className="form-control" placeholder="XXXX XXXX XXXX XXXX" onChange={this.onChangeCardnumber.bind(this)} value={this.state.cardnumber} />
                        </div>

                        <div className="form-group">
                            <label>CVV : </label>
                            <input type="number" required className="form-control" placeholder="XXX" onChange={this.onChangeCvv.bind(this)} value={this.state.cvv} />
                        </div>

                        <div className="form-group">
                            <label>Expire date : </label>
                            <div>
                                <DatePicker selected={this.state.expdate} onChange={this.onChangeDate.bind(this)} />
                            </div>
                        </div>
                        <br/>

                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-success"/>
                        </div>

                    </form>

            </div>
        );

    }

}
export default EditPayment;

