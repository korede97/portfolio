import React, {Component} from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}

class CarAccident extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src={require("../assets/accident.jpg")} alt="accident" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Predicting car accident severity</h1>
            <br />



            <center>

              <div id = 'project_links'>
                <div className = 'bounce'>
                  <a href = "https://github.com/korede97/Coursera_Capstone/blob/master/Coursera_Capstone.ipynb" target ='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size = '2x'
                      color="black"
                      className = 'project_link'
                    />
                  </a>
                </div>
                <br/>
                Notebook
              </div>

              <div id = 'project_links'>
                <div className = 'bounce'>
                  <a href = "https://github.com/korede97/Coursera_Capstone/blob/master/coursera_capstone_report.pdf" target ='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size = '2x'
                      color="black"
                      className = 'project_link'
                    />
                  </a>
                </div>
                <br/>
                Report
              </div>

            </center>
            <br/>

            <div id =  'overview'>
              <p> Programming </p><div id = 'lighter'> Python</div>
              <br/>
              <p> Tools used </p><div id = 'lighter'>Github, Jupyter Notebook</div>
              <br/>
              <p> Concepts</p><div id = 'lighter'>Supervised Learning</div>
              <br/>
              <p> Year</p><div id = 'lighter'>Jan. 2020</div>
            </div>



              <h3>Timeline</h3>
              <hr/>
              <div className="centerContent">
                <div className="selfCenter standardWidth">
                  <div id = 'container_1'>
                      <TwitterTimelineEmbed
                       sourceType="collection"
                       id = '1316183283047301120'
                       screenName="koredeadegboye"
                       theme="light"
                       borderColor="#40E0D0"
                       noFooter
                       options={{height: 800}}
                      />
                  </div>
                </div>
              </div>

      </div>


    )
  }
}

export default CarAccident
