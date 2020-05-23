import React from 'react';

//import AdminApp from './component/Admin/AdminApp';
//import LoginAdmin from './component/Admin/LoginAdmin';
//import StockApp from './component/StockManager/StockApp';
//import ShoppingCart from './component/ShoppingCart/CartMain'
//import WishList from './component/WishList/WishListMain'
//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import MainComponent from './component/ShoppingCart/CartMain';
import Payment from "./component/Payment/paymentMain";
import UserApp from './component/UserApp'


function App() {
  return (
     <div>
      <UserApp />
      <Payment/>
      
    </div>

  );
}

export default App;
