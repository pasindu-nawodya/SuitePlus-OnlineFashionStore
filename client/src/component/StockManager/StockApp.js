import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import ProductListTable from './ProductListTable';
import AddItem from './AddItem';
import Dashboard from './Dashboard';
import Footer from './Component/Footer';
import LoginStockMan from './LoginStockMan';
import NavBar from './Component/NavBar';
import AllItem from './AllProduct';
import StockManager from './StockManagerAccount';

export default class Appfunction extends Component {
    render(){
        return (
            <div>  
            <Router>                       
            <NavBar />
                <Switch>
                    <Route path="/stockman" exact component={Dashboard}/>
                    <Route path="/allitem" component={AllItem}/>
                    <Route path="/additem" component={AddItem}/>
                    <Route path="/productList" component={ProductListTable}/>
                    <Route path="/stockmanager" exact component={StockManager}/>
                </Switch>
            </Router>
            <br />
            <br />
            <br />
            <Footer />
            </div>
        );
    }
}

