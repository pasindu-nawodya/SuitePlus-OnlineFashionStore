import React, { Component } from 'react'
import axios from "axios";

export default class UserAccountTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,

            u_id:0,
            newItem:[],
            uname: '',
            uemail: '',
            upassword: '',
            utel: '',
        }
    }

    componentDidMount(){

        fetch('http://localhost:4000/user/5ec76f0b133ca45fccadc01a')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoaded:true,
                    items:json,
                    count:0,

                })
            });
    }


    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        //make post request

        alert('Updated Successfully!')

        axios.post(`http://localhost:4000/user/5ec76f0b133ca45fccadc01a`, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    render() {

        var {isLoaded,items,count} = this.state;

        if(!isLoaded){
            return (<center>
                <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <h5> <b><br />Wait ! Data Is Loading ... </b></h5>
            </center>
        )
        }

        return (

            <div>
            <div className="container">
            <div className="row">

            <div className="m-auto w-60 order-md-1">
        <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">User ID</span>
        </div>
        <input type="text" value={items._id} onChange={this.handleChange} className="form-control" placeholder="Generated by system" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
            </div>
            <input type="text" name="uname" onChange={this.handleChange} className="form-control"placeholder={this.state.items.uname}  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Email </span>
            </div>
            <input type="text" name="uemail" onChange={this.handleChange} className="form-control" placeholder={this.state.items.uemail}  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
            </div>
            <input type="text" name="upassword" onChange={this.handleChange} className="form-control" placeholder={this.state.items.upassword}  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Telephone</span>
            </div>
            <input type="textarea" name="utel" onChange={this.handleChange} className="form-control" placeholder={this.state.items.utel}  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
        </div>

        <hr className="mb-4" />

            <div className="row">
            <div className="col-md-6 mb-3">
            <button type="submit"  className="btn btn-primary btn-lg btn-block">Update</button>
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