import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Navbar from './navbar';
import Sidebar from './sidebar';

import Home from './pages/home';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Interests from './pages/interests';
import Education from './pages/education';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/interests" component={Interests} />
        <Route path="/education" component={Education} />
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
};

export default App;