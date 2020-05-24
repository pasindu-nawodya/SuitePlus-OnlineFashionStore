import React, { Component } from 'react';
import Slider from './Component/Slider';
import Cards from './Component/Cards';

export default class Dashboard extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            items:[],
            citems:[],
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

        fetch('http://localhost:4000/category')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                citems:json,
            })

            console.log(json)
        });
    }
   
    render() {   
        
        var {items,count,citems} = this.state;
        var countNum =0
        var Amount = 0
        var catcount = 0

        items.map(i=>(            
            countNum = countNum+i.pqty,
            Amount = Amount+i.pprice
        ))

        citems.map(i=>(
            catcount = catcount+1
        ))

        const value=[{headers :"Available Stock",values : countNum},
                     {headers :"Total Stock Value",values : Amount},
                     {headers :"Category Count",values : catcount}];

        return (            
        
            <div>                     
                <Slider />
                <div className="container">
                    <Cards body={value} />
                </div>
            </div>
        )
    }
}
