import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import AdminApp from './component/Admin/AdminApp';
import LoginAdmin from './component/Admin/LoginAdmin';
import StockApp from './component/StockManager/StockApp';
import UserApp from './component/UserApp';
import Login from './component/StockManager/LoginStockMan'



function App() {
  return (
     <div>
      <Router>
        <Switch>            
            <Route path="/" exact component={UserApp}/>
            <Route path="/admin" exact component={AdminApp}/>
            <Route path="/stockman" exact component={StockApp}/>
            <Route path="/loginstock" exact component={Login}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
