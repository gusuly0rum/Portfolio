import Home from './home';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div id="app">
      <Switch>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
};

export default App;