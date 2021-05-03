import React, {Component} from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';


var image_style = { border: '2px solid #33b3a6',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}


class TeethWhitening extends Component {
  render(){
    return (
      <div className = 'container'>
        <div id = 'project_image'>
          <img src={require("../assets/whitening.jpg")} alt="teethwhitening" className="center"
            style = {image_style}/>
        </div>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Determining which teeth "whitening" products remove the most surface stains</h1>
            <hr/>
            <br />

              <div id = 'twitter-border' className = 'center'>
                <div className="centerContent">
                  <div className="selfCenter standardWidth">
                    <div id = 'container_1'>
                        <TwitterTimelineEmbed
                         sourceType="collection"
                         id = '1316239833010974729'
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
