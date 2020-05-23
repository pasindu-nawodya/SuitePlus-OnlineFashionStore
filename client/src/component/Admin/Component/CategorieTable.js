import React, { Component } from 'react'
import axios from "axios";

export default class CategorieTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
            c_id:0,
            newItem:[],
            cname: '',
            cdesc:'',

        }
    }

    componentDidMount(){

        fetch('http://localhost:4000/category')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoaded:true,
                    items:json,
                    count:0,
                })
            });
    }


    handleDelete(cid){
        alert("Category Deleted Succesfully!");

        axios.delete(`http://localhost:4000/category/`+cid)
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

        alert('Category Updated Successfully!')

        axios.post(`http://localhost:4000/category/`+this.state.c_id, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    showDetails(cid){

        this.setState({
            c_id:cid,
        })

        axios.get(`http://localhost:4000/category/`+cid)
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
            <th scope="col">Category Name</th>
            <th scope="col">Discription</th>
            <th scope="col">Details</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item=>(
                    <tr key={item._id}>
                <th scope="row">{++count}</th>
            <td>{item.cname}</td>
            <td>{item.cdesc}</td>
            <td><button onClick={() => this.showDetails(item._id)} data-toggle="modal" data-target="#myModalShow" className="btn btn-outline-primary btn-sm">Details</button></td>

        <td><button onClick={() => this.showDetails(item._id)} data-toggle="modal" data-target="#myModalUpdate" type="submit" className="btn btn-outline-secondary btn-sm">Update</button></td>
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
            <h5 class="modal-title" id="exampleModalLongTitle"><b>{this.state.newItem.cname} Category Details</b></h5>
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
            <span className="input-group-text" id="inputGroup-sizing-default">Category Code</span>
        </div>
        <input type="text" value={this.state.newItem._id} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Category Name</span>
        </div>
        <input type="text" value={this.state.newItem.cname} name="cname" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
            </div>
            <input type="textarea" value={this.state.newItem.cdesc} name="cdesc"  className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
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


            <div className="container" >
            <div class="modal fade" id="myModalUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"><b>Update Category Details</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

        <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>
        <div class="modal-body">
            <div className="container">
            <div className="row">
            <div style={{alignContent:"center"}}>


    <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Category Code</span>
        </div>
        <input type="text" placeholder="cid" value={this.state.newItem._id} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Category Name</span>
        </div>
        <input type="text" placeholder={this.state.newItem.cname} name="cname" onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group mb-4">
            <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
            </div>
            <input type="textarea" placeholder={this.state.newItem.cdesc} name="cdesc"  className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.handleChange}/>
        </div>

            </div>
            </div>
            </div>
            </div>
            <div class="modal-footer">
            <button type="submit" class="btn btn-success" data-dismiss="modal">Submit</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </form>
            </div>
            </div>
            </div>
            </div>

        </div>
    )
    }
}