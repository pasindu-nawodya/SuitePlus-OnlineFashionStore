import React, { Component } from 'react';
import axios from 'axios';

export default class UserLoginForm extends Component {

    state = {
        uemail: '',
        upassword: '',
    }
    
    render() {

        return (
            <div>
            <div className="container">
            <div className="row">

            <div className="col-md-8 order-md-1">
            <h4 className="mb-3"><b>Enter Your Email And Password</b></h4>
        <form className="needs-validation" >


        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Email </span>
            </div>
            <input type="text" name="uemail"  className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
            </div>
            <input type="text" name="upassword" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
        </div>


        <hr className="mb-4" />

            <div className="row">
            <div className="col-md-6 mb-3">
            <button type="submit"  className="btn btn-primary btn-lg btn-block">Login</button>
            </div>
            <div className="col-md-6 mb-3">
            <a href="http://localhost:3000/"><button type="button" className="btn btn-danger btn-lg btn-block">Cancel</button></a>
        </div>
        </div>

        </form>
        </div>
        </div>
        </div>
        </div>
    )
    }
}