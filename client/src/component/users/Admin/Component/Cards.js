import React from 'react';

const Cards = (props) => {
    
        return (  
            <center>
                <div  class="row row-cols-1 row-cols-md-3">                
                    {
                        props.body.map((value,index)=> {
                            return(
                                <div>
                                <div class="card border-dark ml-4 mb-3" style={{maxWidth: '18rem'}} key={index}>
                                    <div class="card-header"><center>{value.headers}</center></div>
                                        <div class="card-body text-dark">
                                        <h5 class="card-title"><center><b>{value.values}</b></center></h5>
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