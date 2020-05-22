import React , {Component} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Dashboard from './Dashboard';
import NavBar from './Component/NavBar';

export default class Appfunction extends Component {
    render(){
        return (
            <div>
            <Router>
            <NavBar />
            <Switch>
            <Route path="/" exact component={Dashboard}/>
        <Route path="/userLogin" component={UserLogin}/>
        <Route path="/userRegister" component={UserRegister}/>
        </Switch>
        </Router>
        </div>
    );
    }
}