import React, { Component } from 'react';
import UpdateItem from '../UpdateItem';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class ProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
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
            })
        });
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
                        <tr key={item._id}>
                            <th scope="row">{++count}</th>
                            <td>{item.pname}</td>
                            <td>{item.pqty}</td>                          
                            <td><a href="#"><button className="btn btn-outline-primary btn-sm">Details</button></a></td>
                            <td><a href="#"><button className="btn btn-outline-secondary btn-sm">Update</button></a></td>
                            <td><a href="#"><button className="btn btn-outline-danger btn-sm">Delete</button></a></td>
                        </tr>
                    ))}                        
                    </tbody>
                </table>
                
            </div>
        )
    }
}
