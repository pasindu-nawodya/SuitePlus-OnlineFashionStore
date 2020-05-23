import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import ProductListTable from './ProductListTable';
import AddItem from './AddItem';
import Dashboard from './Dashboard';
import Footer from './Component/Footer';
import LoginStockMan from './LoginStockMan';
import NavBar from './Component/NavBar';
import AllItem from './AllProduct';

export default class Appfunction extends Component {
    render(){
        return (
            <div>  
            <Router>                       
            <NavBar />
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/allitem" component={AllItem}/>
                    <Route path="/additem" component={AddItem}/>
                    <Route path="/productList" component={ProductListTable}/>
                </Switch>
            </Router>
            <Footer />
            </div>
        );
    }
}

