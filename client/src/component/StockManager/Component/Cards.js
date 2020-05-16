import React from 'react';

const Cards = (props) => {
    
        return (  
            <center>
                <div  className="row row-cols-1 row-cols-md-3">                
                    {
                        props.body.map((value,index)=> {
                            return(
                                <div>
                                <div className="card border-dark ml-4 mb-3" style={{maxWidth: '18rem'}} key={index}>
                                    <div className="card-header"><center>{value.headers}</center></div>
                                        <div className="card-body text-dark">
                                        <h5 className="card-title"><center><b>{value.values}</b></center></h5>
                                    </div>
                                </div>
                                <span></span>
                                </div>
                                
                            )
                        })
                    }
                    
                </div>
            </center>
            
            
        )
    
}

export default Cards;