import ReactDom from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

// import { Router } from 'react-router-dom'
import App from './App'
// require('./ably');
// import ReactGA from 'react-ga';
// import { createBrowserHistory } from 'history';
//
// const history = createBrowserHistory();


// Initialize google analytics page view tracking
// ReactGA.initialize("UA-180692644-1");
// history.listen(location => {
//   ReactGA.set({ page: window.location.pathname+window.location.search }); // Update the user's current page
//   ReactGA.pageview(window.location.pathname+ window.location.search); // Record a pageview for the given page
//   console.log(window.location.pathname)
// });
// <Router history = {history}>

ReactDom.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
