import React, { Component } from 'react'

export default class CategoryList extends Component {
    render() {
        return (
            <div>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Category List</span>
              <span class="badge badge-secondary badge-pill">Count</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Shirts</h6>                  
                </div>                
              </li>              
            </ul>

            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted text-dark">Request a category from Admin</span>
            </h4>
      
            <form class="card p-2">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Request a category" />
                <div class="input-group-append">
                  <button type="submit" class="btn btn-secondary">Request</button>
                </div>
              </div>
            </form>
          </div>   
        )
    }
}
