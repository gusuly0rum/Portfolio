import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './home';
import Navbar from './navbar';
import Skills from './skills';
import Sidebar from './sidebar';
import Projects from './projects';
import Interests from './interests';
import Education from './education';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/interests" component={Interests} />
        <Route path="/education" component={Education} />
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
};

export default App;