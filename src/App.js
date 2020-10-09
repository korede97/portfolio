// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ShinyClimate from './components/ShinyClimate';
import CarAccident from './components/CarAccident';
import Resources from './components/Resources';
import HealthyLiving from './components/HealthyLiving';
import TeethWhitening from './components/TeethWhitening';
import Trade from './components/Trade';



import './App.css'; // Tell webpack that Button.js uses these styles




class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <center><h1>Korede Adegboye</h1></center>
          <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
          <ul className="navbar-nav mr-auto mx-auto">
            <li><Link to={'/portfolio'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>

          <hr />
          <Switch>
              <Route exact path='/portfolio' component={Home} />
              <Route path='/portfolio/contact' component={Contact} />
              <Route path='/portfolio/about' component={About} />
              <Route path='/portfolio/shinyClimate' component={ShinyClimate} />
              <Route path='/portfolio/carAccident' component={CarAccident} />
              <Route path='/portfolio/resources' component={Resources} />
              <Route path='/portfolio/healthyLiving' component={HealthyLiving} />
              <Route path='/portfolio/teethWhitening' component={TeethWhitening} />
              <Route path='/portfolio/trade' component={Trade} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
