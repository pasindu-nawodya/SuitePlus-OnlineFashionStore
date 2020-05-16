import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import ProductListTable from './ProductListTable';
import AddItem from './AddItem';
import Dashboard from './Dashboard';
import LoginStockMan from './LoginStockMan';
import NavBar from './Component/NavBar';

export default class Appfunction extends Component {
    render(){
        return (
            <div>  
                <Router>                       
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/additem" component={AddItem}/>
                        <Route path="/productList" component={ProductListTable}/>
                    </Switch>
                </Router>            
            </div>
        );
    }
}

