import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home/Homepage';
import ShopPage from './pages/Shop/ShopPage';
import SignInRegisterPage from './pages/SignInRegister/SignInRegister'
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
