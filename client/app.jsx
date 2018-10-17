import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './home';
import Navbar from './navbar';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Switch>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
};

export default App;