import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';


import Nav from './components/Nav';
import Home from './components/Home';

import CategoryContainer from './components/Category/CategoryContainer';

import Books from './components/Category/Books';
import Headphones from './components/Category/Headphone';
import PC from './components/Category/PC';
import Laptop from './components/Category/Laptop';
import Tablets from './components/Category/Tablets';
import Iphones from './components/Category/Iphones';
import Samsung from './components/Category/Samsung';
import Camera from './components/Category/Camera';
import Furniture from './components/Category/Furniture';
import GamingSystem from './components/Category/GamingSystem';
import Toys from './components/Category/Toys';
import Tools from './components/Category/Tools';


import './App.css';

function App() {
  return (
      <div className="">
        <Router>
          <div>
            <Nav />
          </div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Books} />
          <Route path="/categorycontainer" component={CategoryContainer} />
          <Route path="/headphones" component={Headphones} />
          <Route path="/books" component={Books} />
          <Route path="/pc" component={PC} />
          <Route path="/laptop" component={Laptop} />
          <Route path="/iphones" component={Iphones} />
          <Route path="/samsung" component={Samsung} />
          <Route path="/tablets" component={Tablets} />
          <Route path="/camera" component={Camera} />
          <Route path="/furniture" component={Furniture} />
          <Route path="/gamingsystem" component={GamingSystem} />
          <Route path="/toys" component={Toys} />
          <Route path="/tools" component={Tools} />
        </Switch>
        </Router>
      </div>
  );
}

export default App;