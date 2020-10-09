// Contact.js

import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
  render() {
    return (
      <div className = 'container'>
        <SocialIcon url="https://www.linkedin.com/in/koredeadegboye/" style={{ height: 150, width: 150 }}/>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="mailto:korede_a3@outlook.com" style={{ height: 150, width: 150 }}/>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="https://twitter.com/KoredeAdegboye" style={{ height: 150, width: 150 }}/>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="https://github.com/korede97" style={{ height: 150, width: 150 }}/>

      </div>
    );
  }
}

export default Contact;
