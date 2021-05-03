import React, {Component} from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}


class TeethWhitening extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src={require("../assets/news.jpg")} alt="teethwhitening" className="center"
            style = {image_style}/>
            <span>Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/s/photos/news?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>What's happening in the world today? An overview</h1>
            <br />

            <div id = 'twitter-border' className = 'center'>
              <div className="centerContent">
                <div className="selfCenter standardWidth">
                  <div id = 'container_1'>
                      <TwitterTimelineEmbed
                       sourceType="collection"
                       id = '1316246380021788672'
                       screenName="koredeadegboye"
                       theme="dark"
                       // borderColor="#40E0D0"
                       noFooter
                       noHeader
                       options={{height: 800}}
                      />
                  </div>
                </div>
              </div>
            </div>


      </div>


    )
  }
}

export default TeethWhitening
