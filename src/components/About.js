// About.js

import React, { Component } from 'react';

import './About.css';
var image_style = { border: '1px solid #ddd',
 borderRadius: '50%',
  padding: '5px' ,
  width: '200px',
  objectFit: 'cover',
  align:'center'
}

class About extends Component {
  render() {
    return (
      <div className = 'container'>
          <h1 style={{textAlign: 'center'}}>About us</h1>
          <br />
          <h2 >Values</h2>
          <br/>
          <h2 >The Cozy Analytics Team!</h2>
          <br/>

            <hr/>

            <div id = 'member'>
            <img src={require("../assets/about_crop.jpeg")} alt="aboutimage" className="center"
              style = {image_style} />
              <br />
              {/*<audio controls controlsList="nodownload" className ="center" style = {{width: '30%'}}>
                <source src={require("../assets/about.ogg")} type="audio/ogg" />
                <source src={require("../assets/about.mp3")} type="audio/mp3" />
                <source src={require("../assets/about.wav")} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>*/}
              <center>Korede Adegboye</center>
              </div>
              <span >A dedicated professional with 4+ years of experience analyzing data and evaluating statistical methods to improve business performance under uncertainty; proficient in Python and R. Exceptional research and programming skills to evaluate the design, development and analysis of software. Proficient technical writing skills connecting the context to abstract or technical. Methodical approach to detecting and investigating problems that lead to practical decisions. Team oriented with strong communication abilities, motivated to reach objectives.  </span>
              <br/>
              <br/>

              <hr/>
          <br/>
          <br/>

          <br/>
          <br/>
          <hr/>

      </div>

    );
  }
}

export default About;
