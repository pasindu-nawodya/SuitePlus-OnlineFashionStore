import React, { Component } from 'react'

export default class TitleBanner extends Component {
    render() {
        return (
            <div>
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 style={{fontSize:"30px"}}><b>{this.props.TitleName}</b></h1>                        
                    </div>            
                </section>
            </main>
            </div>
        )
    }
}
