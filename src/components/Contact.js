// Contact.js

import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import { animateScroll } from "react-scroll";

var Link_1     = Scroll.Link;
var Element   = Scroll.Element;
var Events    = Scroll.Events;
var scroll    = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
class Contact extends Component {


  render() {
    return (
      <footer>
        <Element name = 'footer'>
          <div className = 'center'>

            <SocialIcon url="https://www.linkedin.com/in/koredeadegboye/" style={{ height: 50, width: 50 }}/>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="mailto:korede_a3@outlook.com" style={{ height: 50, width: 50 }}/>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://twitter.com/KoredeAdegboye" style={{ height: 50, width: 50 }}/>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://github.com/korede97" style={{ height: 50, width: 50 }}/>
          </div>
          <br/>
          © 2020 Korede Adegboye. All rights reserved.
        </Element>
      </footer>
    )
  }
}

export default Contact;
