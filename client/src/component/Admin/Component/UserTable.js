import React, { Component } from 'react'
import axios from "axios";

export default class UserTable extends Component {

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

        fetch('http://localhost:4000/user')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoaded:true,
                    items:json,
                    count:0,

                })
            });
    }

    handleDelete(uid){
        alert("User Deleted Succesfully!");

        axios.delete(`http://localhost:4000/user/`+uid)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit= event => {
        event.preventDefault();
        //make post request

        alert('User Updated Successfully!')

        axios.post(`http://localhost:4000/user/`+this.state.u_id, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    showDetails(uid){

        this.setState({
            u_id:uid,
        })

        axios.get(`http://localhost:4000/user/`+uid)
            .then(res => {
                const Item = res.data;
                this.setState({ newItem:Item });
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
            <div className="container">

            <table className="table" style={{width:"100%"}}>
    <thead>
        <tr className="table-active">
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Details</th>
            <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item=>(
                    <tr key={item._id}>
                <th scope="row">{++count}</th>
            <td>{item.uname}</td>
            <td>{item.uemail}</td>
            <td><button onClick={() => this.showDetails(item._id)} data-toggle="modal" data-target="#myModalShow" className="btn btn-outline-primary btn-sm">Details</button></td>
            <td><button onClick={() => this.handleDelete(item._id)} className="btn btn-outline-danger btn-sm">Delete</button></td>

        </tr>
    ))}
    </tbody>
        </table>


        <div className="container" >
            <div class="modal fade" id="myModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><b>{this.state.newItem.uname} User Details</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

        <div class="modal-body">
            <div className="container">
            <div className="row">
            <div style={{alignContent:"center"}}>
    <form className="needs-validation" noValidate>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">User ID</span>
        </div>
        <input type="text" value={this.state.newItem._id} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
        </div>
        <input type="text" value={this.state.newItem.uname} name="uname" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" value={this.state.newItem.uemail} name="uemail" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
            </div>
            <input type="text" value={this.state.newItem.upassword} name="upassword" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Telephone</span>
            </div>
            <input type="text" value={this.state.newItem.utel} name="utel" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>



        </form>
        </div>
        </div>
        </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
            </div>
            </div>
            </div>


            </div>
    )
    }
}