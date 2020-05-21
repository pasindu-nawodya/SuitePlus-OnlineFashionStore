import React, { Component } from 'react'

export default class Footer extends Component {
    render() {

        var d = new Date();
        var n = d.getFullYear();

        return (   
        
            <div>
                <div className="position"></div>
                
                <div class="footer-copyright bg-dark text-center py-3  text-light">© {n} Copyright: 
                    <a href="http://localhost:3000/"> SuitePlus</a>
                </div>

            </div>
            

        )
    }
}
