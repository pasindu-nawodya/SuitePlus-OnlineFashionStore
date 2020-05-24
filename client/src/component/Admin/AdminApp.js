import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import CategorieListTable from './CategorieListTable';
import StockManagerListTable from './StockManagerListTable';
import UserListTable from './UserListTable';
import AddCategorie from './AddCategorie';
import AddStockManager from './AddStockManager'
import Dashboard from './Dashboard';
import LoginAdmin from './LoginAdmin';
import NavBar from './Component/NavBar';

export default class Appfunction extends Component {
    render(){
        return (
            <div>
            <Router>
            <NavBar />
            <Switch>
                <Route path="/admin" exact component={Dashboard}/>
                <Route path="/addcategory" component={AddCategorie}/>
                <Route path="/categoryList" component={CategorieListTable}/>
                <Route path="/addstockManager" component={AddStockManager}/>
                <Route path="/stockManagerList" component={StockManagerListTable}/>
                <Route path="/userList" component={UserListTable}/>
                </Switch>
            </Router>
        </div>
    );
    }
}

