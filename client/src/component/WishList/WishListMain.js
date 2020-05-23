import React from 'react';
import Container from 'react-bootstrap/Container'
import './CSS/WishListMain.css';
import {Link} from'react-router-dom';
import WishList from "./Component/wishlist";
import {withRouter} from'react-router-dom';


class WishListMain extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }



    render() {


        return (
            <div>


                <link href='https://fonts.googleapis.com/css?family=Cherry Cream Soda' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Alike' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Asul' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Corben' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Farro' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Alike' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Adamina' rel='stylesheet'/>
                <link href='https://fonts.googleapis.com/css?family=Actor' rel='stylesheet'/>

                <Container>

                    <br/> <br/> <br/>
                    <div className="title">
                        <center>

                            <h1 className = "h1">
                                  <span>&nbsp;&nbsp;&nbsp;&nbsp;
                                      <img src={require('./images/paper.png')}
                                           className="heartimg"/></span>&nbsp;&nbsp;Wish List</h1>

                        </center>


                    </div>

                    <WishList></WishList>


                </Container>

             <br/><br/><br/><br/>
            </div>

        );

    }

}
export default WishListMain;
