// About.js

import React, { Component } from 'react';

var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '450px'}

class About extends Component {
  render() {
    return (
      <div className = 'container'>
          <img src="/images/about.jpg" alt="Paris" className="center"
            style = {image_style}/>
            <br />
            <audio controls controlsList="nodownload" className ="center" style = {{width: '30%'}}>
              <source src="/sounds/about.ogg" type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
            <br />
            <h2 style={{textAlign: 'center'}}>About me</h2>

            <h3>Past</h3>
            From "basketball is life", to a Computer Science and Statistics Major, to becoming an enthusiest of data storytelling.

            I hope to further demonstrate my background and experience through my work!!

            <hr/>
            <h3>Present</h3>
            The projects displayed in my portfolio stem from my interests. At this point, I am curious of the role data plays in an individual. What kind of analysis will it take for me to make intelligent decisions in different aspects of my life. Further, I am using this experience to initiate a deeper understanding into the atitude of analytics at a larger scale (i.e. organizations).
            <br/>
            <br/>

            With approximately a year of experience as a Data Analyst, I am fluent in using a variety of software and data management systems to solve an analytics problem. My statistical background enables comprehension and vision for the problems being solved.
            <br/>
            <br/>

            Motivationally, "uncertainity" is the reason I love working with data. I thrive on producing an analysis that leads to practical decisions.


            <br/>
            <br/>
            Thank you for your time.
            I am looking forward to new opportunities that will expand my learning environment!!
            Please, if you have any suggestions, feedback, opportunities, etc contact me!! The work I display is not only for me, but for those that want to discover the flexibility that data analysis offers. So displaying, documenting and refining these projects will be helpful to the analytics community!


            <hr/>
            <h3>Future</h3>
            I plan on applying to a Masters program, in Data science or Statistics.
            <br/>
            <br/>

            I seek to discover how I can help businesses through digitial transfornation. Personally, I aspire to increase my community involvement. There are many businesses started by my peers. Many of which, are not aware of the use of data analytics. A problem in my community, is many people have a great idea. But are unaware of what it may take to efficiently go about it.



        </div>

    );
  }
}

export default About;
