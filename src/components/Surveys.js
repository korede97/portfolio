import React, {Component} from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}

class Surveys extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src={require("../assets/insert_image_here.png")} alt="insert_image_here" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Surveys</h1>
            <br />

              <h3>Health</h3>
              <hr/>
              [outline objectives of the survey...follow process of survey design]
              <br/>
              [link to survey monkey]
              <br/>
              <br/>
              <h3>Books</h3>
              <hr/>
              <br/>
              <br/>
              <h3>Environment</h3>
              <hr/>
              <br/>
              <br/>
              <h3>Sports</h3>


      </div>


    )
  }
}

export default Surveys
