import React, { Component } from 'react'

export default class CategoryList extends Component {

  constructor(props){
    super(props);
    this.state = {
        items:[],
    }
}

componentDidMount(){
    fetch('http://localhost:4000/category')
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
    
    var {items} = this.state;

        return (
            <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Category List</span>
              <span className="badge badge-secondary badge-pill"></span>
            </h4>

            {items.map(item=>(
              <ul className="list-group mb-3" key={item._id} >
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">{item.cdesc}</h6>                  
                  </div>                
                </li>              
              </ul>
          ))}
            
          </div>   
        )
    }
}
