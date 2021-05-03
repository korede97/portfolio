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


class HealthyLiving extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src={require("../assets/healthy.jpg")} alt="healthylifestyle" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Analysing the components of a healthy lifestyle for an individual</h1>
            <br />


            <h3>Notes</h3>
              <ul>
                <li>Data Collection </li>
                  <ul>
                    <li> Fitness log created by me </li>
                    <li> Food log from myPlate application</li>
                    <li> iPhone health data</li>
                  </ul>
                <li>Over the past couple of weeks, I have been refining my data collection process. So many variables, can be measured and I would love to capture them all. Since we never know which may be useful during our analysis </li>
                <li>Data Visualization should play a key role in determining the results </li>
                <li>It will be ineteresting to see how I end up combining the data from these sources </li>
                <li>A database will be created to store the data and practice SQL queries of the data</li>
              </ul>

              <div id = 'twitter-border' className = 'center'>
                <div className="centerContent">
                  <div className="selfCenter standardWidth">
                    <div id = 'container_1'>
                        <TwitterTimelineEmbed
                         sourceType="collection"
                         id = '1316244646075478017'
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

export default HealthyLiving
