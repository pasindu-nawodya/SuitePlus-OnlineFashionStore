import React, { Component } from 'react'

export default class ShowItemForm extends Component {
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

            var pid= '5ebc21f781d29b24e4114338';
  
          fetch('http://localhost:4000/product/'+pid)
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
                          <h5> <b><br/>Wait ! Data Is Loading ... </b></h5>
                      </center>
              )
          }
  
          return (
              <div>
                  <div className="container">
                      <div className="row">

                            <div className="col-md-4 order-md-2 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Image </span>
                                </h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">{items.pimage}</h6>                  
                                    </div>                
                                    </li>              
                                </ul>
                            </div>
                          
                          <div className="col-md-8 order-md-1">
                              <h4 className="mb-3"><b>{items.pname} Product Details</b></h4>
                              <form className="needs-validation" noValidate>
                                  
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
                                      <input type="text" value={items.pname} name="pname" className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                  </div>
  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Product Price</span>
                                      </div>
                                      <input type="number" value={items.pprice} name="pprice" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                  </div>
  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Quantity</span>
                                      </div>
                                      <input type="number" value={items.pqty} name="pqty" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                  </div>
  
                                  <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                          <label className="input-group-text" id="inputGroup-sizing-default">Category</label>
                                      </div>
                                      <input type="text" value={items.pcategory} name="pcategory" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>  
                                  </div>
  
                                  <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                          <label className="input-group-text" for="inputGroupSelect01">Product Size</label>
                                      </div>
                                      <input type="text" value={items.psize} name="psize" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>     
                                  </div>
  
                                  <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                          <label className="input-group-text" for="inputGroupSelect01">Age Range</label>
                                      </div>
                                      <input type="text" value={items.prange} name="psize" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                  </div>
  
                                  <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                          <label className="input-group-text" id="inputGroup-sizing-default">Gender</label>
                                      </div>
                                      <input type="text" value={items.pgender} name="pgender"  className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                  </div>
  
                                  <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                          <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                      </div>
                                      <input type="textarea" value={items.pdesc} name="pdesc"  className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
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
