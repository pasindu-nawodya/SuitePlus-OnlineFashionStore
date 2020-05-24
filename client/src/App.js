import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import AdminApp from './component/Admin/AdminApp';
import LoginAdmin from './component/Admin/LoginAdmin';
import StockApp from './component/StockManager/StockApp';
import UserApp from './component/UserApp';



function App() {
  return (
     <div>
      <Router>
        <Switch>            
            <Route path="/" exact component={UserApp}/>
            <Route path="/admin" exact component={AdminApp}/>
            <Route path="/stockman" exact component={StockApp}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
