import React from 'react';
import Container from 'react-bootstrap/Container'
import '../CSS/WishListMain.css';
import WishList from "../Component/wishlist";



class MainComponent extends React.Component{

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

                            <h1>
                                  <span>&nbsp;&nbsp;&nbsp;&nbsp;
                                      <img src={require('./images/paper.png')}
                                           className="heartimg"/></span>&nbsp;&nbsp;Wish List</h1>

                        </center>


                    </div>

                    <WishList></WishList>


                </Container>


            </div>

        );

    }

}
export default MainComponent;
