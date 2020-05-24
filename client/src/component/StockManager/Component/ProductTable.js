import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class ProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
           p_id:0,
           newItem:[],
           pname: '',           
            pprice: 0,
            pqty:0,
            pcategory:'',
            psize:'',
            prange:'',
            pgender:'',
            pdesc:'',
            pimage:'',
            pdiscount:0,
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
        
    handleDelete(pid){
       alert("Item Deleted Succesfully!");

       axios.delete(`http://localhost:4000/product/`+pid)
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

        alert('Item Updated Successfully!')
        console.log(this.state.p_id)
        axios.post(`http://localhost:4000/product/`+this.state.p_id, this.state)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

      showDetails(pid){      
          
            this.setState({
                p_id:pid,
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
                            <h5 class="modal-title" id="exampleModalLongTitle"><b>{this.state.newItem.pname} Product Details</b></h5>
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
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Discount</span>
                                            </div>
                                            <input type="number" value={this.state.newItem.pdiscount} name="pprice" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
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

                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Image</span>
                                            </div>  
                                            <input type="textarea" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                                            
                                        </div>                                        
                                        <img src={this.state.newItem.pimage} style={{width:"50%"}}/>    
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
                            <h5 class="modal-title" id="exampleModalLongTitle"><b>Update Product Details</b></h5>
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
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Code</span>
                                            </div>
                                            <input type="text" placeholder="pid" value={this.state.newItem._id} onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                        </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Name</span>
                                            </div>
                                            <input type="text" placeholder={this.state.newItem.pname} name="pname" onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" />                                 
                                        </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Price</span>
                                            </div>
                                            <input type="number" placeholder={this.state.newItem.pprice} name="pprice" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />                                 
                                        </div>

                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Product Discount</span>
                                            </div>
                                            <input type="number" placeholder={this.state.newItem.pdiscount} name="pprice" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />                                 
                                        </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Quantity</span>
                                            </div>
                                            <input type="number" placeholder={this.state.newItem.pqty} name="pqty" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />                                 
                                        </div>
        
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Category</label>
                                            </div>
                                            <select name="pcategory" className="custom-select" onChange={this.handleChange} id="inputGroupSelect01" required>
                                                <option selected value={this.state.newItem.pcategory}>{this.state.newItem.pcategory}</option>
                                                <option value="tshirt">t-shirt</option>
                                            </select>
                                        </div>
        
                                        <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" for="inputGroupSelect01">Product Size</label>
                                        </div>
                                        <select name="psize" onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
                                            <option value={this.state.newItem.psize}>{this.state.newItem.psize}</option>
                                            <option value="XS">Extra Small</option>
                                            <option value="S">Small</option>
                                            <option value="M">Medium</option>
                                            <option value="L">Large</option>
                                            <option value="XL">Extra Large</option>
                                        </select>
                                    </div>
        
                                        <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" for="inputGroupSelect01">Age Range</label>
                                        </div>
                                        <select name="prange" className="custom-select" id="inputGroupSelect01" onChange={this.handleChange}>
                                            <option value={this.state.newItem.prange}>{this.state.newItem.prange}</option>
                                            <option value="child">Child</option>
                                            <option value="teen">Teen</option>
                                            <option value="young">Young</option>
                                            <option value="adult">Adult</option>
                                        </select>
                                        </div>
        
                                        <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                                        </div>
                                        <select name="pgender" className="custom-select" id="inputGroupSelect01" onChange={this.handleChange}>
                                            <option value={this.state.newItem.pgender}>{this.state.newItem.pgender}</option>
                                            <option value="male">Men</option>
                                            <option value="female">Women</option>
                                        </select>
                                    </div>
        
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                            </div>
                                            <input type="textarea" placeholder={this.state.newItem.pdesc} name="pdesc"  className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.handleChange}/>                                 
                                        </div>

                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Image</span>
                                            </div>  
                                            <input type="textarea" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                                            
                                        </div>                                        
                                        <img src={this.state.newItem.pimage} style={{width:"50%"}}/> 
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" data-dismiss="modal">submit</button>
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
