import React, { Component } from 'react';

export default class AllItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
            count:0,
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/product')
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
        
        var {isLoaded,items} = this.state;

        if(!isLoaded){
            return (<center> 
                        <br />
                        <br />                   
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h5> <b><br />Wait ! Data Is Loading ... </b></h5>
                    </center>
            )
        }
        return (
            <div>
                <div className="album py-5">
                    <div className="container">                    
                        <div className="row">
                            {/* map function */}
                            {items.map(item=>(                                                   
                                <div className="col-md-4" key={item._id}>
                                    <div class="card mb-4 shadow-sm">
                                        <img src={item.pimage} className="card-img-top" alt={item.pimage} ></img>
                                        <div className="card-body">
                                        <center>
                                        <table>
                                            <tr>
                                                <td><h6 className="card-text"><b>Product : </b> </h6></td> 
                                                <td><h6 className="card-text"> &nbsp;&nbsp;{item.pname}  </h6></td>                                                
                                            </tr>  
                                            <tr>
                                                <td><h6 className="card-text"><b>Price : </b></h6></td>
                                                <td><h6 className="card-text">&nbsp;&nbsp;{item.pprice*(100-item.pdiscount)/100}  </h6></td>
                                            </tr>    
                                            <tr>
                                                <td> <h6 className="card-text"><b>Size : </b></h6></td>
                                                <td> <h6 className="card-text"><span class="badge badge-secondary">&nbsp;&nbsp;&nbsp;{item.psize}&nbsp;&nbsp;&nbsp;</span></h6></td>
                                            </tr>                                       
                                        </table>
                                        </center>
                                            <br />
                                            
                                        </div>
                                    </div>                                    
                                </div>
                            ))}
                            
                        </div> 
                    </div>    
                </div>           
            </div>
        )
    }
}
