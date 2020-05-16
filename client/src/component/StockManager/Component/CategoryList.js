import React, { Component } from 'react'

export default class CategoryList extends Component {
    render() {
        return (
            <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Category List</span>
              <span className="badge badge-secondary badge-pill">Count</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Shirts</h6>                  
                </div>                
              </li>              
            </ul>

            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted text-dark">Request a category from Admin</span>
            </h4>
      
            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Request a category" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Request</button>
                </div>
              </div>
            </form>
          </div>   
        )
    }
}
