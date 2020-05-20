import React,{Component} from 'react';
import axios from 'axios';
import UpdateItem from '../UpdateItem';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class ProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
           itemid:0,
           newItem:[],
        }
    }

    
    componentDidMount(){
        fetch('http://localhost:4000/product')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
                count:0,
                newItems:json,
            })

            console.log(json)
        });
    }
        
    handleSubmit(pid){
       alert("Item Deleted Succesfully!");

       axios.delete(`http://localhost:4000/product/`+pid)
         .then(res => {
           console.log(res);
           console.log(res.data);
         })         
      }

      showDetails(pid){
             this.setState({
                 itemid:pid,
                 thisTime:true
             })  

             axios.get(`http://localhost:4000/product/`+pid)
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
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Details</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(item=>(
                        <tr key={item._id} >
                        
                            <th scope="row">{++count}</th>
                            <td>{item.pname}</td>
                            <td>{item.pqty}</td>                          
                            <td><button onClick={() => this.showDetails(item._id)} data-toggle="modal" data-target="#myModal" className="btn btn-outline-primary btn-sm">Details</button></td>
                            <td><a href="#"><button type="submit" className="btn btn-outline-secondary btn-sm">Update</button></a></td>
                            <td><button onClick={() => this.handleSubmit(item._id)} className="btn btn-outline-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}                        
                    </tbody>
                </table>
                
                <div className="container" >
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle"><b>{items.pname} Product Details</b></h5>
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
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Code</span>
                                            </div>
                                            <input type="text" value={this.state.newItem._id} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                        </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Name</span>
                                            </div>
                                            <input type="text" value={this.state.newItem.pname} name="pname" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                        </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Price</span>
                                            </div>
                                            <input type="number" value={this.state.newItem.pprice} name="pprice" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                        </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Quantity</span>
                                            </div>
                                            <input type="number" value={this.state.newItem.pqty} name="pqty" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                        </div>
        
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" id="inputGroup-sizing-default">Category</label>
                                            </div>
                                            <input type="text" value={this.state.newItem.pcategory} name="pcategory" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>  
                                        </div>
        
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Product Size</label>
                                            </div>
                                            <input type="text" value={this.state.newItem.psize} name="psize" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>     
                                        </div>
        
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Age Range</label>
                                            </div>
                                            <input type="text" value={this.state.newItem.prange} name="psize" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                        </div>
        
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" id="inputGroup-sizing-default">Gender</label>
                                            </div>
                                            <input type="text" value={this.state.newItem.pgender} name="pgender"  className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                        </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                            </div>
                                            <input type="textarea" value={this.state.newItem.pdesc} name="pdesc"  className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
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
