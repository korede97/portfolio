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

class BookClub extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src={require("../assets/insert_image_here.png")} alt="insert_image_here" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Book Club</h1>
            <br />

              <h3>March</h3>


      </div>


    )
  }
}

export default BookClub
