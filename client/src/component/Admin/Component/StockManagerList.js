import React, { Component } from 'react'

export default class StockManagerList extends Component {
    render() {
        return (
            <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
				<span className="text-muted">Request List</span>
				<span className="badge badge-secondary badge-pill">Count</span>
            </h4>
            <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <h6 className="my-0">David</h6>
            </div>
            </li>
            </ul>
            </div>
    )
    }
}