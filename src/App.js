// App.js

import React, { Component } from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';
import Content from './components/Content';
import About from './components/About';
// import Contact from './components/Contact';
import ShinyClimate from './components/ShinyClimate';
import CarAccident from './components/CarAccident';
import Resources from './components/Resources';
import HealthyLiving from './components/HealthyLiving';
import TeethWhitening from './components/TeethWhitening';
import Trade from './components/Trade';
import Surveys from './components/Surveys';
import BookClub from './components/BookClub';

// import Home_1 from './components/Home_1';
import News from './components/News';
import * as Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

import { createBrowserHistory } from 'history';


// import { animateScroll } from "react-scroll";
import ReactGA from 'react-ga';

import './App.css';

var Link_1     = Scroll.Link;
var Element   = Scroll.Element;
// var Events    = Scroll.Events;
// var scroll    = Scroll.animateScroll;
// var scrollSpy = Scroll.scrollSpy;


// const history = createBrowserHistory();
//
// // Initialize google analytics page view tracking
// ReactGA.initialize("UA-180692644-1");
// history.listen(location => {
//   ReactGA.set({ page: location.pathname+location.search }); // Update the user's current page
//   ReactGA.pageview(location.pathname+ location.search); // Record a pageview for the given page
//   console.log(location.pathname)
// });



class App extends Component {
//   componentDidMount(){
//     ReactGA.set({page:window.location.pathname + window.location.search});
//     ReactGA.pageview(window.location.pathname + window.location.search);
//   }
//   componentDidUpdate(){
//     ReactGA.set({page:window.location.pathname + window.location.search});
//
//     ReactGA.pageview(window.location.pathname + window.location.search);
//   }
//
//   const { match } = this.props // coming from React Router v4.
//
// console.log(match.path) // /topics/:topicId/:subId
//
// console.log(match.url) // /topics/react-router/url-parameters
    constructor() {
        super();
        var today = new Date();
        let time = today.getHours();
        // switch(time) {
        //     case
        // }
        this.state = {
            currentTime: time,
        }

    }
    timeBlock () {
        let time = parseInt(this.state.currentTime);
        let parts_parts_of_day;

        if ( time >= 0 && time <= 11) {
            parts_parts_of_day = 'Good morning';
        }
        else if (time >= 12 && time <= 5) {
            parts_parts_of_day = 'Good aftrnoon';
        }
        else {
            parts_parts_of_day = 'Good evening';
        }
        console.log(parts_parts_of_day);

        return parts_parts_of_day
    }
  render() {

    return (
      <div>

      <header>

      {/*}<br/>
      <br/>

      <center><h1 style = {{fontWeight: 'bold', fontSize: '55px', fontFamily:'Courier New', color:'#33b3a6'}} > Cosy Analytics</h1></center>
      <br />
      <center style  = {{color: '#b3a633', fontStyle:'italic'}}>"Data your way"</center>
      <br/>
      <br/>*/}
      <span>
      <img src={require("./assets/header_text.png")} alt="teethwhitening" className="center"
      style = {{
        width: '60%',
        height:'30%',
        padding: '50px',
      }}/>
      </span>
        <div>

          <nav className="navbar custom navbar-expand-lg navbar-light  text-center" >
          <ul className="navbar-nav mr-auto mx-auto">
            <li> <a href="#" class="pull-left"><img src={require("./assets/ct_2-removebg-preview.png")}          style = {{ border: '1px solid #ddd',
                        width: '100px',
                        height:'100px'
                      }}/></a> </li>
            <li><Link to={'/portfolio'} className="nav-link" style = {{color:'white', hover: 'green'}}> Home </Link></li>
            <li><a href={'https://medium.com/@korede.adegboye'} className="nav-link" style = {{color:'white', hover: 'green'}} target = '_blank' rel = 'noopener noreferrer'> Articles </a></li>
            <li><Link to={'/surveys'} className="nav-link" style = {{color:'white'}}>Surveys</Link></li>
            <li><Link to={'/bookclub'} className="nav-link" style = {{color:'white'}}>Book Club</Link></li>
            <div id = 'to_pointer'>
              <li><Link_1 activeClass="active" to='footer' spy ={true} offset = {50} duration = {5000} delay = {1000} className="nav-link" style = {{color:'white'}}>Contact</Link_1></li>
            </div>
            <li><Link to={'/about'} className="nav-link" style = {{color:'white'}}>About</Link></li>
            {/*<li><Link to={'/filter'} className="nav-link">Filter</Link></li>*/}
          </ul>
          </nav>
        </div>
      </header>

      <body>
        <h2><b>{this.timeBlock()}</b></h2>
      <br/>
      remove home link in navbar and replace with logo..
          <br />

          <Route exact path='/' component={Content} />

            <Switch>
                <Route exact path='/portfolio' component={Content} />
                <Route path='/about' component={About} />
                <Route path='/portfolio/shinyclimate'  component={ShinyClimate} />
                <Route path='/portfolio/caraccident' component={CarAccident} />
                <Route path='/portfolio/resources' component={Resources} />
                <Route path='/portfolio/healthylifestyle' component={HealthyLiving} />
                <Route path='/portfolio/teethwhitening' component={TeethWhitening} />
                <Route path='/portfolio/trade' component={Trade} />
                <Route path='/portfolio/news' component={News} />
                <Route path='/surveys' component={Surveys} />
                <Route path='/bookclub' component={BookClub} />
            </Switch>

      </body>
      <footer>
        <Element name = 'footer'>
        <p style={{fontSize: '40px'}}>Contact us</p>

          <div className = 'center'>
          <div id = 'footer_links'>
            <div className = 'bounce'>
              <a href = "https://www.linkedin.com/in/koredeadegboye/" target ='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size = '3x'
                  color="#343434"
                  className = 'footer_link'
                />
              </a>
            </div>
            </div>


            <div id = 'footer_links'>
              <div className = 'bounce'>
                <a href = "mailto:korede_a3@outlook.com" target ='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size = '3x'
                    color="#343434"
                    className = 'footer_link'
                  />
                </a>
              </div>
            </div>

            <div id = 'footer_links'>
              <div className = 'bounce'>
                <a href = "mailto:korede_a3@outlook.com" target ='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size = '3x'
                    color="#343434"
                    className = 'footer_link'
                  />
                </a>
              </div>
            </div>

            <div id = 'footer_links'>
              <div className = 'bounce'>
                <a href = "https://github.com/korede97" target ='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size = '3x'
                    color="#343434"
                    className = 'footer_link'
                  />
                </a>
              </div>
            </div>
            <div id = 'footer_links'>
                <a href = "https://github.com/korede97" target ='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faMedium}
                    size = '3x'
                    color="#343434"
                    className = 'footer_link'
                  />
                </a>
            </div>

          </div>
          <br/>
          © 2021 Korede Adegboye. All rights reserved.
        </Element>
      </footer>

      </div>
    );
  }
}

export default App;

// export default withRouter(App);
