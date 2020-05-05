import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage/Homepage';

const StickersPage = () => (
  <div>
    <h1>STICKERS PAGE!</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/stickers" component={StickersPage} />
      </Switch>
    </div>
  );
}

export default App;
