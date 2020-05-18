import React, { Component } from 'react'

export default class updateItemForm extends Component {
   /*state = {
          pname: '',
          pprice: 0,
          pqty:0,
          pcategory:'',
          psize:'',
          prange:'',
          pgender:'',
          pdesc:'',
          pimage:'',
          items:[],
          isLoaded:false,
  
        }*/

        constructor(props){
            super(props);
            this.state = {
                items:[],
                isLoaded:false,
            }
        }
  
        componentDidMount(){
  
          fetch('http://localhost:4000/product/5ebc21f781d29b24e4114338')
          .then(res=>res.json())
          .then(json=>{
              this.setState({
                  isLoaded:true,
                  items:json,                  
              })  
              console.log(json)
          });
  
          
      }
  
      render() {
  
          const {items,isLoaded}  = this.state;
  
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
                          
                          <div className="col-md-8 order-md-1">
                              <h4 className="mb-3"><b>Update Product Details</b></h4>
                              <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>
                                  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Product Code</span>
                                      </div>
                                      <input type="text" value={items._id} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                  </div>
  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Product Name</span>
                                      </div>
                                      <input type="text" value={items.pname} name="pname" onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                  </div>
  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Product Price</span>
                                      </div>
                                      <input type="number" value={items.pprice} name="pprice" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                  </div>
  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Quantity</span>
                                      </div>
                                      <input type="number" value={items.pqty} name="pqty" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                  </div>
  
                                  <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                          <label className="input-group-text" for="inputGroupSelect01">Category</label>
                                      </div>
                                      <select name="pcategory" className="custom-select" onChange={this.handleChange} id="inputGroupSelect01" required>
                                          <option selected value={items.pcategory}>{items.pcategory}</option>
                                          <option value="tshirt">t-shirt</option>
                                      </select>
                                  </div>
  
                                  <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                          <label className="input-group-text" for="inputGroupSelect01">Product Size</label>
                                      </div>
                                      <select name="psize" onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
                                          <option value={items.psize}>{items.psize}</option>
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
                                          <option value={items.prange}>{items.prange}</option>
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
                                          <option value={items.pgender}>{items.pgender}</option>
                                          <option value="male">Men</option>
                                          <option value="female">Women</option>
                                      </select>
                                  </div>
  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                      </div>
                                      <input type="textarea" value={items.pdesc} name="pdesc" onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                  </div>  
                                  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Image</span>
                                      </div>
                                      <input type="text" value={items.pimage} name="pimage" onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                  </div>  
  
                                  <hr className="mb-4" />
  
                                  <div className="row">
                                      <div className="col-md-6 mb-3">
                                          <button type="submit"  className="btn btn-primary btn-lg btn-block">Add Product</button>
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
