import React, { Component } from 'react'

export default class Footer extends Component {
    render() {

        var d = new Date();
        var n = d.getFullYear();

        return (

            <div class="footer-copyright bg-dark text-center py-3  text-light">© {n} Copyright:
            <a href="#"> SuitePlus - Signature of Trend</a>
        </div>


    )
    }
}