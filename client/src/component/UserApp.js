import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import NavBar from './views/NavBar/NavBar';
import Home from './User/HomePage/Home';
import AllProduct from './User/ProductPage/AllProduct';
import FilterProduct from './User/ProductPage/FilterProduct';
import DiscountProduct from './User/ProductPage/DiscoutProduct';
import ProductDetails from './User/ProductPage/ProductDetails';
import Footer from './views/Footer/Footer'


/*
                 <Router>                       
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/additem" component={AddItem}/>
                        <Route path="/productList" component={ProductListTable}/>
                    </Switch>
                 </Router>


*/

export default class Appfunction extends Component {
    render(){
        return (
            <div>  
            <Router>                       
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product" component={ProductDetails}/>
                    <Route path="/filterProduct" component={FilterProduct}/>
                    <Route path="/discount" component={DiscountProduct}/>
                </Switch>
            </Router>
            <Footer/>
            </div>
        );
    }
}

