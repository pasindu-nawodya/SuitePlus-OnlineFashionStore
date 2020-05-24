import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import NavBar from './views/NavBar/NavBar';
import Home from './User/HomePage/Home';
import AllProduct from './User/ProductPage/AllProduct';
import FilterProduct from './User/ProductPage/FilterProduct';
import DiscountProduct from './User/ProductPage/DiscoutProduct';
import ProductDetails from './User/ProductPage/ProductDetails';
import UserLogin from './User/UserAccount/UserLogin';
import UserRegister from './User/UserAccount/UserRegister';
import Footer from './views/Footer/Footer';
import CartMain from './ShoppingCart/CartMain';
import  WishListMain from './WishList/WishListMain';

export default class Appfunction extends Component {
    render(){
        return (
            <div>  
            <Router>                       
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product" component={AllProduct}/>
                    <Route path="/filterProduct" component={ProductDetails}/>
                    <Route path="/discount" component={DiscountProduct}/>
                    <Route path="/userLogin" component={UserLogin}/>
                    <Route path="/userRegister" component={UserRegister}/>
                    <Route path="/wishlist" component={ WishListMain}/>
                    <Route path="/mycart" component={ CartMain}/>
                </Switch>
            </Router>
            <Footer/>

            </div>
        );
    }
}

