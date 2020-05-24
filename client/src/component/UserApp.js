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
import Footer from './views/Footer/Footer'
import CartMain from './ShoppingCart/CartMain';
import WishListMain from './WishList/WishListMain';
import Payment from "./Payment/payment-form.component";
import PaymentHistory from "./Payment/payment-list.component";
import PaymentEdit from "./Payment/payment-edit.component";

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
                    <Route path="/product" exact component={AllProduct}/>
                    <Route path="/filterProduct" component={FilterProduct}/>
                    <Route path="/discount" component={DiscountProduct}/>
                    <Route path="/userLogin" component={UserLogin}/>
                    <Route path="/userRegister" component={UserRegister}/>

                    <Route path="/wishlist/:id" component={ WishListMain}/>
                    <Route path="/mycart/:id" component={ CartMain}/>
                    <Route path="/payment" component={ Payment}/>
                    <Route path="/paymenthistory" component={ PaymentHistory}/>
                    <Route path="/payment/edit/:id" component={ PaymentEdit}/>
                    <Route path="/product/:id" component={ProductDetails}/>                    

                </Switch>
            </Router>
            <Footer/>

            </div>
        );
    }
}

